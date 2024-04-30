import SearchCustomerProfileListForm from "@/containers/CustomerProfile/index/SearchCustomerProfileListForm";
import SearchCustomerProfileListTable from "@/containers/CustomerProfile/index/SearchCustomerProfileListTable";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { GridPaginationModel } from "@mui/x-data-grid";
import { useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";
import { searchCustomerInfo } from "./customerProfile.action";
import { CustomerInfoPageProps } from "./page";

const CustomerProfileContent = (props: CustomerInfoPageProps) => {

    const formRef = useRef<HTMLFormElement>(null);

    const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
        pageSize: 10,
        page: 1,
    });

    const [searchCustomerInfoState, searchCustomerInfoAction] = useFormState(searchCustomerInfo, {
        data: undefined,
        success: false,
        error: undefined
    })

    const [isLoading, setIsLOading] = useState<boolean>(false)

    const prepareBeforeSendAction = (formData: FormData) => {
        setPaginationModel((prev) => ({
            ...prev,
            page: 1,
        })
        )
    }

    useEffect(() => {
        if (!searchCustomerInfoState.success && searchCustomerInfoState?.error) {
            alert(searchCustomerInfoState?.error)
        }
        setIsLOading(false)

    }, [searchCustomerInfoState])

    useEffect(() => {
        if (formRef.current && paginationModel) {
            setIsLOading(true)
            const formData = new FormData(formRef.current);
            formData.set('pageIndex', paginationModel?.page?.toString() || '');
            formData.set('pageSize', paginationModel?.pageSize?.toString() || '');
            //formRef.current && formRef.current?.requestSubmit();
            searchCustomerInfoAction(formData);
        }
    }, [paginationModel])

    return (
        <>
            <AppBar
                sx={{ backgroundColor: '#1F346B' }}
                className="bg-primary"
            >
                <Toolbar>
                    <Typography variant="h6" component="div">
                        Customer Info list
                    </Typography>
                </Toolbar>
            </AppBar>
            <form action={prepareBeforeSendAction} ref={formRef} >
                <SearchCustomerProfileListForm />
                <SearchCustomerProfileListTable
                    response={searchCustomerInfoState}
                    paginationModel={paginationModel}
                    setPaginationModel={setPaginationModel}
                    onClickWithEditEvent={props?.onClickWithEditEvent}
                    isLoading={isLoading}
                />
            </form>
        </>
    );
}

export default CustomerProfileContent