import { CustomerProfileActionResponse } from "@/app/(app)/CustomerProfile/customerProfile.action";
import Table, { ColProps } from "@/components/table/table";
import { Button } from "@mui/material";
import { GridColDef, GridPaginationModel, GridRenderCellParams } from "@mui/x-data-grid";
import { useRouter } from "next/navigation";
import { useFormStatus } from "react-dom";

export interface SearchCustomerProfileListTableProps {
    response?: CustomerProfileActionResponse
    paginationModel: GridPaginationModel
    setPaginationModel: (model: GridPaginationModel) => void
    isLoading?: boolean
}

const SearchCustomerProfileListTable = (props: SearchCustomerProfileListTableProps) => {

    const { response, paginationModel, setPaginationModel } = props

    const { pending } = useFormStatus();
    const router = useRouter();

    const columns: GridColDef[] = [
        {
            field: "actions",
            headerName: "Action",
            type: "actions",
            width: 150,
            renderCell: (params: GridRenderCellParams<ColProps>) => {
                return (
                    <strong>
                        <Button
                            variant="contained"
                            size="small"
                            className="bg-[#1F346B] hover:bg-[#1F346B] hover:brightness-95 text-xl py-0 w-25 h-10 font-db-helvethaica"
                            style={{ marginLeft: 16 }}
                            tabIndex={params.hasFocus ? 0 : -1}
                            onClick={() => router.push(`/CustomerProfile/${params.id}/Detail`)}
                        >
                            ดูรายละเอียด
                        </Button>
                    </strong>
                )
            }
        },
        { field: "corporateId", headerName: "Corporate ID" },
        { field: "fullNameTH", headerName: "ชื่อ - นามสกุล (ไทย)" },
        { field: "fullNameEN", headerName: "ชื่อ - นามสกุล (Eng)" },
        { field: "referenceId", headerName: "เลขที่หลักฐาน" },
        { field: "email", headerName: "อีเมล" },
        { field: "phoneNumber", headerName: "หมายเลขโทรศัพท์" },
        { field: "accountCreateDate", headerName: "วันที่เปิดบัญชี" },
        { field: "accountBranch", headerName: "สาขา" },
        { field: "advisor", headerName: "ผู้แนะนำการลงทุน", flex: 1 },
    ];


    const getRowId = (row: any) => row.corporateId;

    console.log(`pending`, pending)

    return (

        <div className="p-4 w-full">
            <Table
                columns={columns}
                rows={response?.data?.items || []}
                getRowId={getRowId}
                totalItems={response?.data?.totalItems || 0}
                totalPages={response?.data?.totalPages || 0}
                paginationModel={paginationModel}
                setPaginationModel={setPaginationModel}
                //onPageChange={onPageChange}
                isLoading={ props.isLoading || pending}
            />
        </div>

    )
}

export default SearchCustomerProfileListTable;