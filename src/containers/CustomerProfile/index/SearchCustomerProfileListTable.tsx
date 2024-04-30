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
    onClickWithEditEvent?: (coperateId: number) => void
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
            align: "center",
            renderCell: (params: GridRenderCellParams<ColProps>) => {
                return (

                    <Button
                        variant="contained"
                        size="small"
                        className="bg-[#1F346B] hover:bg-[#1F346B] hover:brightness-95 text-[18px] py-0  h-10 font-db-helvethaica"
                        // style={{ marginLeft: 16 }}
                        tabIndex={params.hasFocus ? 0 : -1}
                        onClick={() => props.onClickWithEditEvent ? props.onClickWithEditEvent(Number.parseInt(params.id)) : router.push(`/CustomerProfile/${params.id}/Detail`)}
                    >
                        <strong>
                            ดูรายละเอียด
                        </strong>
                    </Button>
                )
            }
        },
        { field: "corporateId", headerName: "Corporate ID", minWidth: 100, maxWidth: 100, headerAlign: "center", align: "center" },
        { field: "fullNameTH", headerName: "ชื่อ - นามสกุล (ไทย)", flex: 1, headerAlign: "center", minWidth: 200 },
        { field: "fullNameEN", headerName: "ชื่อ - นามสกุล (Eng)", flex: 1, headerAlign: "center", minWidth: 200 },
        { field: "referenceId", headerName: "เลขที่หลักฐาน", minWidth: 120, maxWidth: 120, headerAlign: "center" },
        { field: "email", headerName: "อีเมล", flex: 1, headerAlign: "center", minWidth: 200 },
        { field: "phoneNumber", headerName: "หมายเลขโทรศัพท์", minWidth: 120, maxWidth: 120, headerAlign: "center" },
        { field: "accountCreateDate", headerName: "วันที่เปิดบัญชี", minWidth: 100, maxWidth: 100, align: "center", headerAlign: "center" },
        { field: "accountBranch", headerName: "สาขา", headerAlign: "center", align: "center" },
        { field: "advisor", headerName: "ผู้แนะนำการลงทุน", headerAlign: "center" },
    ];


    const getRowId = (row: any) => row.corporateId;

    // console.log(`pending`, pending)

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
                isLoading={props.isLoading || pending}
            />
        </div>

    )
}

export default SearchCustomerProfileListTable;