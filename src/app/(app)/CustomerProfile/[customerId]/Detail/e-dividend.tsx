'use client'

import HeaderTitle from "@/components/navbar/header-title";
import Table from "@/components/table/table";
import { useAppDispatch, useAppSelector } from "@/libs/redux/hook";
import { setDataCustomerEDividend, setMainIdCustomerEDividend } from "@/libs/redux/store/customer-ats-e-dividend-slice";
import { nextStep, prevStep } from "@/libs/redux/store/customer-profile-slice";
import { BankInfoModel, BankInfoResponseDataResponse } from "@/services/rest-api/customer-service";
import { Button, Checkbox } from "@mui/material";
import { GridColDef, GridPaginationModel, GridRenderCellParams } from '@mui/x-data-grid';
import { useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function EDividend() {
    const searchParams = useSearchParams()
    const isEditable = searchParams.get('edit') === 'true';
    const [tablePaginator, setTablePaginator] = useState<GridPaginationModel>({ page: 1, pageSize: 10 });
    const dispatch = useAppDispatch()

    const idRowsMainEDividend = useAppSelector(state => state.customerAtsEDividend.idRowsMainEDividend)

    const params = useParams()
    const { data, isLoading, error } = useQuery({
        queryKey: ['eDividend', params.customerId],
        queryFn: () => getData(),
    })

    const getData = async () => {
        const { customerId } = params
        if (customerId) {
            try {
                const request = await fetch(`/api/customer-profile/e-dividend/${customerId}`, { method: 'GET' });
                const response: BankInfoResponseDataResponse = await request.json();
                if (response.status == 200) {
                    const { data } = response;

                    if (data && data.bankInfoModel && data.bankInfoModel.length > 0) {
                        // console.log(data.bankInfoModel)
                        // setDefaultData(data.bankInfoModel)
                        const result = data.bankInfoModel.map((item, index) => {
                            return ({
                                ...item,
                                id: index,
                            });
                        });
                        const rusultIsMain = result.find((item) => item.isDefault)
                        dispatch(setMainIdCustomerEDividend(rusultIsMain?.id || 0))
                        return result
                        // return [{
                        //     accountName: "",
                        //     accountNo: "3213210000",
                        //     bank: "006 - KTB",
                        //     bankCode: "006",
                        //     id: 0,
                        //     isDefault: true,
                        //     registerMethod: "-"
                        // },
                        // {
                        //     accountName: "",
                        //     accountNo: "3213210000",
                        //     bank: "003 - KTB",
                        //     bankCode: "006",
                        //     id: 1,
                        //     isDefault: false,
                        //     registerMethod: "-"
                        // },
                        // {
                        //     accountName: "",
                        //     accountNo: "3213210000",
                        //     bank: "005 - KTB",
                        //     bankCode: "006",
                        //     id: 2,
                        //     isDefault: false,
                        //     registerMethod: "-"
                        // }]
                    }
                    return []
                }
            } catch (error) {
                console.error('error', error)
                throw error
            }
        }
        return null
    }

    const saveData = () => {
        if (data) {
            const indexOld = data.findIndex((item) => item.isDefault)
            const indexNew = data.findIndex((_, index) => index == idRowsMainEDividend)
            if (data.length > 1 && indexOld !== -1 && indexNew !== -1) {
                const newData = [...data]
                newData[indexOld].isDefault = false
                newData[indexNew].isDefault = true
                const result = newData.filter((_, index) => index === indexOld || index === indexNew)
                dispatch(setDataCustomerEDividend(result))
            }
        }
        dispatch(nextStep())
    }

    return (
        <>
            <HeaderTitle
                className="gap-0"
                title="บัญชีธนาคารสำหรับดอกเบี้ย และเงินปันผล Bank account to receive e-Dividend / Interest"
            />
            <div className="h-2" />
            <div className="px-10">
                {
                    error && <div className="text-red-500">{error.message}</div>
                }
                <Table<BankInfoModel>
                    columns={isEditable ? columnsEdit : columns}
                    rows={data || []}
                    totalItems={data?.length || 0}
                    // totalPages={kycInfo.data?.totalPages || 0}
                    isLoading={isLoading}
                    paginationModel={tablePaginator}
                    setPaginationModel={setTablePaginator}
                />
            </div>
            {
                isEditable && <div className="flex justify-end gap-4 mt-6">
                    <Button variant="contained" color="error" onClick={() => dispatch(prevStep())}>ย้อนกลับ</Button>
                    <Button variant="contained" onClick={saveData}>ถัดไป</Button>
                </div>
            }
        </>
    )
}

function RenderCheckBox(props: GridRenderCellParams<any, boolean>) {

    const dispatch = useAppDispatch();
    const isRowMain = useAppSelector(state => state.customerAtsEDividend.idRowsMainEDividend)
    const [checked, setChecked] = useState(props.value);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (checked) {
            dispatch(setMainIdCustomerEDividend(props.row.id))
        }
        if (!checked) {
            dispatch(setMainIdCustomerEDividend(props.row.id))
            setChecked(event.target.checked);
        }
    };

    return (
        <Checkbox
            checked={isRowMain == props.row.id}
            onChange={handleChange}
        />
    );
}

const columnsEdit: GridColDef[] = [
    {
        field: 'id',
        headerName: 'ลำดับ',
        width: 120,
        headerAlign: 'center',
        align: 'center',
        valueGetter: (value) => `${value + 1}`,
    },
    {
        field: 'bank',
        headerName: 'ธนาคาร',
        headerAlign: 'center',
        align: 'center',
        flex: 2,
    },
    {
        field: 'accountNo',
        headerName: 'เลขที่บัญชี',
        headerAlign: 'center',
        align: 'center',
        flex: 2,
    },
    {
        field: 'isDefault',
        headerName: 'เลือกเป็นบัญชีหลัก',
        sortable: false,
        headerAlign: 'center',
        align: 'center',
        minWidth: 200,
        renderCell: RenderCheckBox,
    },
];

const columns: GridColDef[] = [
    {
        field: 'id',
        headerName: 'ลำดับ',
        width: 120,
        headerAlign: 'center',
        align: 'center',
        valueGetter: (value) => `${value + 1}`,
    },
    {
        field: 'bank',
        headerName: 'ธนาคาร',
        headerAlign: 'center',
        align: 'center',
        flex: 2,
    },
    {
        field: 'accountNo',
        headerName: 'เลขที่บัญชี',
        headerAlign: 'center',
        align: 'center',
        flex: 2,
    },
    {
        field: 'isDefault',
        headerName: 'เลือกเป็นบัญชีหลัก',
        sortable: false,
        headerAlign: 'center',
        align: 'center',
        minWidth: 200,
        valueGetter: (value, row) => `${row.isDefault ? '✅' : '❌'}`,
    },
];

