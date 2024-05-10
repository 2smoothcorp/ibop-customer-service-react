import ContentLoading from '@/components/content/content-loading';
import InputSwitch from '@/components/custom/input-switch';
import HeaderTitle from '@/components/navbar/header-title';
import { useMasterDataCountriesCustom } from '@/hooks/masterDataCountries';
import { CustomerFatcaState } from '@/libs/redux/store/customer-fatca-slice';
import { swal } from '@/libs/sweetalert';
import { GetTinOutput, TinInfoOutput } from '@/services/rest-api/customer-service';
import { TextField, Tooltip, TooltipProps, styled, tooltipClasses } from '@mui/material';
import Button from '@mui/material/Button';
import { unstable_useEnhancedEffect as useEnhancedEffect } from '@mui/utils';
import {
  DataGrid,
  GridColDef,
  GridEventListener,
  GridPreProcessEditCellProps,
  GridRenderEditCellParams,
  GridRowEditStopReasons,
  GridRowId,
  GridRowModel,
  GridRowModes,
  GridRowModesModel,
  useGridApiContext
} from '@mui/x-data-grid';
import { randomId } from '@mui/x-data-grid-generator';
import { useQuery } from '@tanstack/react-query';
import { useParams, useSearchParams } from 'next/navigation';
import * as React from 'react';
import { UseFormReturn } from 'react-hook-form';

const StyledBox = styled('div')(({ theme }) => ({
  // height: 400,
  width: '100%',
  '& .MuiDataGrid-cell--editable': {
    // backgroundColor: theme.palette.mode === 'dark' ? '#376331' : 'rgb(217 243 190)',
    '& .MuiInputBase-root': {
      height: '100%',
    },
  },
  '& .Mui-error': {
    backgroundColor: `rgb(126,10,15, ${theme.palette.mode === 'dark' ? 0 : 0.1})`,
    color: theme.palette.mode === 'dark' ? '#ff4343' : '#750f0f',
  },
}));

const StyledTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText,
  },
}));

export default function ExitUSIndentity({ useForm }: { useForm: UseFormReturn<CustomerFatcaState, any, undefined>; }) {
  const { watch, setValue } = useForm;
  const [rows, setRows] = React.useState<TinInfo[]>([]);
  const [rowModesModel, setRowModesModel] = React.useState<GridRowModesModel>({});
  const searchParams = useSearchParams();
  const isEditable = searchParams.get('edit') === 'true';
  const params = useParams();
  const { data, isLoading, error } = useQuery({
    queryKey: ['exitUSIdentity', params.customerId],
    queryFn: () => getData(),
  });

  const { data: countries, isLoading: isLoadingCountries } = useMasterDataCountriesCustom();

  const handleClick = () => {
    const checkCreateSame = rows.findIndex((row) => row.isNew);
    if (checkCreateSame !== -1) return;
    const id = randomId();
    setRows((oldRows) => [...oldRows, {
      id,
      taxCountryCode: '000',
      tinNo: '',
      noTinResonCode: '',
      noTinReasonRemark: '',
      isNew: true
    }]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: 'taxCountryCode' },
    }));
  };

  const getData = async () => {
    const { customerId } = params;
    if (customerId) {
      try {
        const request = await fetch(`/api/customer-profile/fatca/tins/${customerId}`, { method: 'GET' });
        const response: TinInfoOutput = await request.json();
        // console.log('response', response)
        const { isFatcaIndividualSelfCert } = response;
        if (response) {
          setValue('isFatcaIndividualSelfCert', isFatcaIndividualSelfCert || false, { shouldDirty: false });
          if (response.tins) {
            const tinInfo = response.tins.map(tin => { return { ...tin, id: randomId(), isNew: false }; });
            setRows(tinInfo || []);
          }

          return response;
        }
      } catch (error) {
        throw error;
      }
    }
    return null;
  };

  const handleRowEditStop: GridEventListener<'rowEditStop'> = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id: GridRowId) => async () => {
    await swal({
      title: 'ยืนยันการลบข้อมูล',
      icon: 'question',

      confirmButton: { text: 'ยืนยัน', visible: true, },
      cancelButton: { text: 'ยกเลิก', visible: true },
    }).then(async (result) => {
      if (result.isConfirmed) {
        setRows(rows.filter((row) => row.id !== id));
      }
    });

  };

  const handleCancelClick = (id: GridRowId) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow!.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = React.useCallback(async (newRow: GridRowModel) => {
    if (newRow.taxCountryCode === '' || (newRow.tinNo === '' && newRow.noTinResonCode === '')) {
      await swal({
        title: 'กรุณากรอกข้อมูลให้ครบถ้วน',
        icon: 'error',
        confirmButton: { text: 'ยืนยัน' },
      });
      return null
    } else {
      const updatedRow = { ...newRow, isNew: false };
      setRows(rows.map((row: any) => (row.id === newRow.id ? updatedRow : row)));
      return updatedRow;
    }
  }, [rows]);

  const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  function EditInputTextCell(props: GridRenderEditCellParams<any, string>) {
    const { id, value, field, hasFocus, error } = props;
    const apiRef = useGridApiContext();
    const ref = React.useRef<HTMLElement>(null);

    const handleChange = (newValue: string) => {
      apiRef.current.setEditCellValue({ id, field, value: newValue });
    };

    useEnhancedEffect(() => {
      if (hasFocus && ref.current) {
        const input = ref.current.querySelector<HTMLInputElement>(
          `input[value="${value}"]`,
        );
        input?.focus();
      }
    }, [hasFocus, value]);

    return (
      <StyledTooltip open={!!error} title={error}>
        <TextField
          InputProps={{
            className: 'bg-white border border-gray-300 rounded-md w-full m-auto px-2.5 h-10',
            disableUnderline: true,
          }}
          ref={ref as React.RefObject<HTMLDivElement>} // Change the type of ref
          value={value}
          onChange={(event) => handleChange(event.target.value)}
          type="text"
          fullWidth
          variant="standard"
          size="medium"
        />
      </StyledTooltip>

    );
  }

  const renderEditInputTextCell: GridColDef['renderCell'] = (params) => {
    return <EditInputTextCell {...params} />;
  };

  React.useEffect(() => {
    setValue('tinInput', rows.filter(e => !e.isNew), { shouldDirty: true })
  }, [rows, setValue])

  const columns: GridColDef[] = [
    {
      field: 'taxCountryCode',
      headerName: 'ประเทศถิ่นที่อยู่ทางภาษี',
      headerAlign: 'center',
      align: 'center',
      flex: 1,
      editable: true,
      type: 'singleSelect',
      valueOptions: countries,
      preProcessEditCellProps: (params: GridPreProcessEditCellProps) => {
        const hasError = params.props.value === '';
        return { ...params.props, error: hasError };
      },
    },
    {
      field: 'tinNo',
      headerName: 'หมายเลขประจำตัวผู้เสียภาษี',
      headerAlign: 'center',
      align: 'center',
      flex: 2,
      type: 'custom',
      editable: true,
      renderEditCell: renderEditInputTextCell,
      preProcessEditCellProps: (params: GridPreProcessEditCellProps) => {
        const isNoTinResonCode = params.otherFieldsProps?.noTinResonCode?.value === '' || false;
        const hasError = params.props.value === '' && isNoTinResonCode;
        return { ...params.props, error: hasError ? 'กรุณากรอกหมายเลขประจำตัวผู้เสียภาษี' : '' };
      },
    },
    {
      field: 'noTinResonCode',
      headerName: 'หากไม่มีหมายเลขประจำตัวผู้เสียภาษี ระบุเหตุผล A, B, หรือ C',
      headerAlign: 'center',
      align: 'center',
      flex: 3,
      type: 'singleSelect',
      valueOptions: [
        { value: 'A', label: 'เหตุผล (A) - ประเทศที่ผู้ถือบัญชีมีถิ่นที่อยู่ทางภาษี ไม่ได้ออกเลขประจำตัวผู้เสียภาษี ให้กับผู้อาศัยอยู่ในประเทศนั้น' },
        { value: 'B', label: 'เหตุผล (B) - ผู้ถือบัญชี ยังไม่ได้รับเลขประจำตัวผู้เสียภาษีที่ออกโดยประเทศนั้น (หมายเหตุ: โปรดอธิบายเหตุผลที่ท่านไม่สามารถขอหมายเลขประจำตัวผู้เสียภาษีได้)' },
        { value: 'C', label: 'เหตุผล (C) - ไม่จำเป็นต้องให้หรือเปิดเผยเลขประจำตัวผู้เสียภาษี (หมายเหตุ: เลือกเหตุผลนี้เฉพาะในที่กฏหมายภายในประเทศนั้นไม่ได้บังคับจัดเก็บเลขประจำตัวผู้เสียภาษี)' },
      ],
      editable: true,
      preProcessEditCellProps: (params: GridPreProcessEditCellProps) => {
        const isEmptyTinNo = params.otherFieldsProps?.tinNo?.value === '' || false;
        const hasError = params.props.value === '' && isEmptyTinNo;
        return { ...params.props, error: hasError };
      },
    },
    {
      field: 'noTinReasonRemark',
      headerName: 'หากท่านเลือกเหตุผล B โปรดอธิบายเหตุ...',
      headerAlign: 'center',
      align: 'center',
      flex: 2,
      preProcessEditCellProps: (params: GridPreProcessEditCellProps) => {
        const isB = params.otherFieldsProps?.noTinResonCode?.value === 'B' || false;
        const hasError = params.props.value === '' && isB;
        return { ...params.props, error: hasError ? 'กรุณากรอกเหตุผล' : '' };
      },
      editable: true,
      renderEditCell: renderEditInputTextCell,
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 200,
      // cellClassName: 'actions',
      getActions: (props) => {
        const { id } = props;
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <Button
              key={0}
              onClick={handleSaveClick(id)}
              variant="contained"
              className=" py-0 h-10"
            >บันทึก</Button>,
            <Button
              key={1}
              onClick={handleCancelClick(id)}
              variant="contained"
              className="bg-red-500 hover:bg-red-600 py-0 h-10"
            >ยกเลิก</Button>,
          ];
        }

        return [
          <Button
            key={0}
            onClick={handleEditClick(id)}
            variant="contained"
            className=" py-0 h-10"
          >แก้ไข</Button>,
          <Button
            key={1}
            onClick={handleDeleteClick(id)}
            variant="contained"
            className="bg-red-500 hover:bg-red-600 py-0 h-10"
          >ลบ</Button>,
        ];
      },
    },
  ];

  return (
    <>
      <HeaderTitle
        className="gap-0"
        title="ส่วนที่ 2 ท่านเป็นผู้มีถิ่นที่อยู่ทางภาษีในประเทศอื่นๆนอกจากสหรัฐอเมริกา" />
      <ContentLoading
        isLoading={isLoading || watch('isFatcaIndividualSelfCert') === null}
        error={error && error.message || undefined}
        hight={300}
      >
        <div className="block px-10">
          <div className="flex justify-around items-center pb-4">
            {watch('isFatcaIndividualSelfCert') !== undefined && (
              <InputSwitch
                label="สถานะ FATCA"
                name="isFatcaIndividualSelfCert"
                defaultValue={watch('isFatcaIndividualSelfCert') || false}
                onChange={(isCheck) => setValue('isFatcaIndividualSelfCert', isCheck, { shouldDirty: true })}
                disabled={!isEditable} />
            )}
          </div>
          {watch('isFatcaIndividualSelfCert') && (
            <>
              <Button
                onClick={handleClick}
                variant="contained"
                className="bg-[#1F346B] hover:bg-[#1F346B] hover:brightness-95 text-lg py-0 h-8 mb-6"
              >เพิ่ม</Button>
              <StyledBox>
                <DataGrid
                  rows={rows}
                  columns={columns}
                  editMode="row"
                  rowModesModel={rowModesModel}
                  onRowModesModelChange={handleRowModesModelChange}
                  onRowEditStop={handleRowEditStop}
                  processRowUpdate={processRowUpdate}
                />
              </StyledBox>

            </>

          )}
        </div>
      </ContentLoading>
      <div className='h-10' />
    </>

  );
}

interface TinInfo extends GetTinOutput {
  id: GridRowId;
  isNew: boolean;
}
