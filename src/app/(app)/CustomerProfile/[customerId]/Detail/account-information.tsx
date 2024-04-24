'use client'

import HeaderTitle from "@/components/navbar/header-title";
import { AccountInfoResponseDataResponse } from "@/services/rest-api/customer-service";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export default function AccountIn() {
    const params = useParams()
    const { data, isLoading, error } = useQuery({
        queryKey: ['accountInfo', params.customerId],
        queryFn: () => getData(),
    })

    const getData = async () => {
        const { customerId } = params
        if (customerId) {
            try {
                const request = await fetch(`/api/customer-profile/account-info/${customerId}`, { method: 'GET' });
                const response: AccountInfoResponseDataResponse = await request.json();
                if (response.status == 200) {
                    const { data } = response;

                    if (data && data.accountInfo) {
                        const result = data.accountInfo.map((item, index) => {
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
                title="ข้อมูลบัญชี"
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
        field: 'id',
        headerName: 'ลำดับ',
        width: 80,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'tools',
        headerName: 'Actions',
        headerAlign: 'center',
        align: 'center',
        // flex: 2,
        width: 150,
    },
    {
        field: 'accountType',
        headerName: 'ประเภทบัญชี',
        headerAlign: 'center',
        // align: 'center',
        flex: 2,
    },
    {
        field: 'accountNo',
        headerName: 'เลขที่บัญชี',
        headerAlign: 'center',
        // align: 'center',
        flex: 1,
    },
    {
        field: 'boAccountNo',
        headerName: 'เลขที่บัญชี Backoffice',
        headerAlign: 'center',
        // align: 'center',
        flex: 2,
    },
    {
        field: 'description',
        headerName: 'รายละเอียด',
        headerAlign: 'center',
        align: 'center',
        flex: 2,
    },
];


