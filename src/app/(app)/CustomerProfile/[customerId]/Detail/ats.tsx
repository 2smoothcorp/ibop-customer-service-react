'use client'

import HeaderTitle from "@/components/navbar/header-title";
import { BankInfoResponseDataResponse } from "@/services/rest-api/customer-service";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export default function ATS() {
    const params = useParams()
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
                                id: index + 1,
                            });
                        });
                        return result
                    }
                }
            } catch (error) {
                console.error('error', error)
                throw error
            }
        }
        return null
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
                <DataGrid
                    loading={isLoading}
                    showCellVerticalBorder
                    rows={data || []}
                    columns={columns}
                    autoHeight
                    pageSizeOptions={[]}
                />
            </div>

        </>
    )
}

const columns: GridColDef[] = [
    {
        headerClassName: 'font-db-helvethaica text-[20px] bg-[#B9B9B9] bg-opacity-70',
        cellClassName: 'font-cordia-new text-[18px]',
        field: 'id',
        headerName: 'ลำดับ',
        width: 120,
        headerAlign: 'center',
        align: 'center',
    },
    {
        headerClassName: 'font-db-helvethaica text-[20px] bg-[#B9B9B9] bg-opacity-70',
        cellClassName: 'font-cordia-new text-[18px]',
        field: 'bank',
        headerName: 'ธนาคาร',
        headerAlign: 'center',
        align: 'center',
        flex: 2,
    },
    {
        headerClassName: 'font-db-helvethaica text-[20px] bg-[#B9B9B9] bg-opacity-70',
        cellClassName: 'font-cordia-new text-[18px]',
        field: 'accountNo',
        headerName: 'เลขที่บัญชี',
        headerAlign: 'center',
        align: 'center',
        flex: 2,
    },
    {
        headerClassName: 'font-db-helvethaica text-[20px] bg-[#B9B9B9] bg-opacity-70',
        cellClassName: 'font-cordia-new text-[18px]',
        field: 'isDefault',
        headerName: 'เลือกเป็นบัญชีหลัก',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        headerAlign: 'center',
        align: 'center',
        width: 200,
        valueGetter: (value, row) => `${row.isDefault ? '✅' : '❌'}`,
    },
    {
        headerClassName: 'font-db-helvethaica text-[20px] bg-[#B9B9B9] bg-opacity-70',
        cellClassName: 'font-cordia-new text-[18px]',
        field: 'howToRegister',
        headerName: 'วิธีสมัคร ATS',
        headerAlign: 'center',
        align: 'center',
        description: 'This column has a value getter and is not sortable.',
        flex: 1,
    },
];

