'use client'

import Table from "@/components/table/table";
import { GridColDef } from "@mui/x-data-grid";

const columns: GridColDef<any>[] = [
    {
        field: 'taxCountryCode',
        headerName: 'ประเทศถิ่นที่อยู่ทางภาษี',
        width: 120,
        headerAlign: 'center',
        align: 'center',
        flex: 1,
    },
    {
        field: 'tinNo',
        headerName: 'หมายเลขประจำตัวผู้เสียภาษี',
        headerAlign: 'center',
        align: 'center',
        flex: 1,
    },
    {
        field: 'noTinResonCode',
        headerName: 'หากไม่มีหมายเลขประจำตัวผู้เสียภาษี ระบุเหตุผล A, B, หรือ C',
        headerAlign: 'center',
        align: 'center',
        flex: 1,
    },
    {
        field: 'noTinReasonRemark',
        headerName: 'หากท่านเลือกเหตุผล B โปรดอธิบายเหตุ...',
        headerAlign: 'center',
        align: 'center',
        flex: 1,
    },
];

export default function SummaryExistUSIDTableInfo({ data }: { data: Array<any> }) {
    return <>
        {
            data?.length > 0 ?
                <>

                    <div className="h-2" />
                    <Table<any>
                        columns={columns}
                        rows={data || []}
                        totalItems={data.length || 0}
                        // totalPages={kycInfo.data?.totalPages || 0}
                        isLoading={false}
                        paginationModel={{ page: 1, pageSize: 10 }}
                        setPaginationModel={() => { }}
                    />
                </>
                :
                null
        }
    </>
}