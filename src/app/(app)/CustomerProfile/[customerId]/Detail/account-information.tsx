'use client'

import HeaderTitle from "@/components/navbar/header-title";
import { AccountInfoResponseDataResponse } from "@/services/rest-api/customer-service";
import { Button } from "@mui/material";
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
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
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 10,
                            },
                        },
                    }}
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
        renderCell: (params: GridRenderCellParams) => {
            return (
                <Button
                    variant="contained"
                    size="small"
                    className="bg-[#1F346B] hover:bg-[#1F346B] hover:brightness-95 text-[16px] py-0  h-8 font-db-helvethaica"
                    onClick={() => console.log('view detail')}
                >
                    <strong>
                        ดูรายละเอียด
                    </strong>
                </Button>
            )
        }
    },
    {
        field: 'accountDescription',
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


