"use client";

import SearchCustomerProfileListForm from "@/containers/CustomerProfile/index/SearchCustomerProfileListForm";
import SearchCustomerProfileListTable from "@/containers/CustomerProfile/index/SearchCustomerProfileListTable";
import {
  AppBar,
  Toolbar,
  Typography
} from "@mui/material";
import { GridPaginationModel } from "@mui/x-data-grid";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";
import { searchCustomerInfo } from "./customerProfile.action";

const CustomerInfoPage = ({
  searchParams
}: {
  searchParams?: { 
    corporateID?: string 
    referenceID?: string 
    fullName?: string 
    emailNumber?: string 
    pageIndex?: string 
    pageSize?: string 
  }
}) => {

  console.log(`page`, searchParams?.pageIndex)

  const router = useRouter();
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

  const [ isLoading, setIsLOading ] = useState<boolean>(false)

  const prepareBeforeSendAction = (formData: FormData) => {
    //console.log(formData)
    const corporateID = formData.get('corporateID') as string || '';
    const referenceID = formData.get('referenceID') as string || '';
    const fullName = formData.get('fullName') as string || '';
    const emailNumber = formData.get('emailNumber') as string || '';
    const pageIndex = formData.get('pageIndex') || 1;
    const pageSize = formData.get('pageSize') || paginationModel.pageSize;

    formData.set('pageIndex', pageIndex.toString());
    formData.set('pageSize', pageSize.toString());

    const queryParams = {
      corporateID,
      referenceID,
      fullName,
      emailNumber,
      pageIndex,
      pageSize
    }

    const params = Object.keys(queryParams)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(queryParams[key])}`)
    .join('&');

    //searchCustomerInfoAction(formData)
    setPaginationModel((prev) => ({
      ...prev,
      page: 1,
    })
    )
    //router.push(`/CustomerProfile?${params}`)
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
          isLoading={isLoading}
        />
      </form>
    </>
  );
};


export default CustomerInfoPage;
