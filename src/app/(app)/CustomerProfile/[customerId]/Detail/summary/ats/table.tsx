import HeaderTitle from "@/components/navbar/header-title";
import Table from "@/components/table/table";
import { CustomerAtsEDividendState } from "@/libs/redux/store/customer-ats-e-dividend-slice";
import { BankInfoModel } from "@/services/rest-api/customer-service";
import { GridColDef } from "@mui/x-data-grid";

const columns: GridColDef<BankInfoModel>[] = [
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

export default function SummaryATSInfo({ data }: { data: CustomerAtsEDividendState }) {
    return <>
        <HeaderTitle
            className="gap-0"
            title="ข้อมูลบัญชีธนาคาร"
        />
        {
            data?.ats?.length > 0 ?
                <>

                    <div className="h-2" />
                    <Table<BankInfoModel>
                        columns={columns}
                        rows={data.ats || []}
                        totalItems={data.ats.length || 0}
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