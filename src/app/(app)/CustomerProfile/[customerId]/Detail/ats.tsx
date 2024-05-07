'use client'

import HeaderTitle from "@/components/navbar/header-title";
import Table from "@/components/table/table";
import { useAppDispatch, useAppSelector } from "@/libs/redux/hook";
import { setDataCustomerAts, setIsMainCustomerAts } from "@/libs/redux/store/customer-ats-e-dividend-slice";
import { nextStep, prevStep } from "@/libs/redux/store/customer-profile-slice";
import { BankInfoModel, BankInfoResponseDataResponse } from "@/services/rest-api/customer-service";
import { Button, Checkbox } from "@mui/material";
import { GridColDef, GridPaginationModel, GridRenderCellParams } from '@mui/x-data-grid';
import { useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function ATS() {
    const searchParams = useSearchParams()
    const isEditable = searchParams.get('edit') === 'true';
    const [tablePaginator, setTablePaginator] = useState<GridPaginationModel>({ page: 1, pageSize: 10 });
    const params = useParams()
    const dispatch = useAppDispatch()

    const idRowsMain = useAppSelector(state => state.customerAtsEDividend.idRowsMain)

    const { data, isLoading, error } = useQuery({
        queryKey: ['ats', params.customerId],
        queryFn: () => getData(),
    })

    const getData = async () => {
        const { customerId } = params
        if (customerId) {
            try {
                const request = await fetch(`/api/customer-profile/ats/${customerId}`, { method: 'GET' });
                const response: BankInfoResponseDataResponse = await request.json();
                if (response.status == 200) {
                    const { data } = response;

                    if (data && data.bankInfoModel) {
                        // console.log(data.bankInfoModel)
                        // setDefaultData(data.bankInfoModel)
                        const result = data.bankInfoModel.map((item, index) => {
                            return ({
                                ...item,
                                id: index,
                            });
                        });
                        const rusultIsMain = result.find((item) => item.isDefault)
                        dispatch(setIsMainCustomerAts(rusultIsMain?.id || 0))
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
            const indexNew = data.findIndex((_, index) => index == idRowsMain)
            if (indexOld !== -1 && indexNew !== -1) {
                const newData = [...data]
                newData[indexOld].isDefault = false
                newData[indexNew].isDefault = true
                const result = newData.filter((_, index) => index === indexOld || index === indexNew)
                dispatch(setDataCustomerAts(result))
            }
        }
        dispatch(nextStep())
    }

    return (
        <>
            <HeaderTitle
                className="gap-0"
                title="ข้อมูลบัญชีธนาคาร"
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
    const isRowMain = useAppSelector(state => state.customerAtsEDividend.idRowsMain)
    const [checked, setChecked] = useState(props.value);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (checked) {
            dispatch(setIsMainCustomerAts(props.row.id))
        }
        if (!checked) {
            dispatch(setIsMainCustomerAts(props.row.id))
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
        flex: 1,
    },
    {
        field: 'accountNo',
        headerName: 'เลขที่บัญชี',
        headerAlign: 'center',
        align: 'center',
        flex: 1,
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
    {
        field: 'howToRegister',
        headerName: 'วิธีสมัคร ATS',
        headerAlign: 'center',
        align: 'center',
        description: 'This column has a value getter and is not sortable.',
        flex: 1,
    },
];

const columns: GridColDef[] = [
    {
        field: 'id',
        headerName: 'ลำดับ',
        width: 120,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'bank',
        headerName: 'ธนาคาร',
        headerAlign: 'center',
        align: 'center',
        flex: 1,
    },
    {
        field: 'accountNo',
        headerName: 'เลขที่บัญชี',
        headerAlign: 'center',
        align: 'center',
        flex: 1,
    },
    {
        field: 'isDefault',
        headerName: 'เลือกเป็นบัญชีหลัก',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        headerAlign: 'center',
        align: 'center',
        minWidth: 200,
        valueGetter: (value, row) => `${row.isDefault ? '✅' : '❌'}`,
    },
    {
        field: 'howToRegister',
        headerName: 'วิธีสมัคร ATS',
        headerAlign: 'center',
        align: 'center',
        description: 'This column has a value getter and is not sortable.',
        flex: 1,
    },
];

