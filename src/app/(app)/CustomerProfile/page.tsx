"use client";

import Table, { ColProps } from "@/components/table/table";
import {
  AppBar,
  Button,
  Grid,
  Paper,
  styled,
  Toolbar,
  Typography
} from "@mui/material";
import { GridColDef, GridPaginationModel, GridRenderCellParams } from "@mui/x-data-grid";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { searchCustomerInfo } from "./customerProfile.action";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const CustomerInfoPage = ({
  searchParams
}: {
  searchParams?: { search?: string; page?: string }
}) => {

  const router = useRouter();
  const { pending } = useFormStatus();

  const formRef = useRef(null);

  const searchFields = [
    {
      title: "Corporate ID",
      input: (
        <input
          type="text"
          id="corporateID"
          name="corporateID"
          className={`font-cordia-new w-full px-3 py-2 h-10 bg-[#D9D9D9] border border-slate-300 rounded-md text-xl shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500`}
        />
      ),
    },
    {
      title: "เลขที่หลักฐาน",
      input: (
        <input
          type="text"
          id="referenceID"
          name="referenceID"
          className={`font-cordia-new w-full px-3 py-2 h-10 bg-[#D9D9D9] border border-slate-300 rounded-md text-xl shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500`}
        />
      ),
    },
    {
      title: "ชื่อ - นามสกุล",
      input: (
        <input
          type="text"
          id="fullName"
          name="fullName"
          className={`font-cordia-new w-full px-3 py-2 h-10 bg-[#D9D9D9] border border-slate-300 rounded-md text-xl shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500`}
        />
      ),
    },
    {
      title: "อีเมล / หมายเลขโทรศัพท์",
      input: (
        <input
          type="text"
          id="emailNumber"
          className={`font-cordia-new w-full px-3 py-2 h-10 bg-[#D9D9D9] border border-slate-300 rounded-md text-xl shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500`}
        />
      ),
    },
  ];

  const col_per_row = 2;
  const rowCount = searchFields.length / col_per_row;

  const columns: GridColDef[] = [
    {
      field: "actions",
      headerName: "Action",
      type: "actions",
      width: 150,
      renderCell: (params: GridRenderCellParams<ColProps>) => {
        console.log(`params`, params)
        
        return  (
          <strong>
            <Button
              variant="contained"
              size="small"
              className="bg-primary"
              style={{ marginLeft: 16 }}
              tabIndex={params.hasFocus ? 0 : -1}
              onClick={() => router.push(`/CustomerProfile/${params.id}`)}
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
    { field: "advisor", headerName: "ผู้แนะนำการลงทุน" },
  ];

  const [searchCustomerInfoState, searchCustomerInfoAction] = useFormState(searchCustomerInfo, {
    data: undefined,
    success: false,
    error: undefined
  })

  const prepareBeforeSendAction = (formData: any) => {
    //console.log(formData)
    const corporateID = formData.get('corporateID') as string || '';
    const referenceID = formData.get('referenceID') as string || '';
    const fullName = formData.get('fullName') as string || '';
    const emailNumber = formData.get('emailNumber') as string || '';
    const pageIndex = Number(formData.get('pageIndex') as string) || 1;
    const pageSize = Number(formData.get('pageSize')as string) || 10;

    const queryParams = {
      corporateID,
      referenceID,
      fullName,
      emailNumber,
      pageIndex,
      pageSize,
    }
    /*
    const queryString = Object.keys(queryParams)
    .map(key => queryParams[key] !== undefined ? `${key}=${encodeURIComponent(queryParams[key])}` : '')
    .filter(Boolean)
    .join('&');
    const path = `/CustomerProfile?${queryString}`;
    router.push(path);
    */
    searchCustomerInfoAction(formData)
  }

  const rows: any = searchCustomerInfoState.data?.items || []


  useEffect(() => {
    if (!searchCustomerInfoState.success && searchCustomerInfoState?.error) {
      alert(searchCustomerInfoState?.error)
    }

  }, [searchCustomerInfoState])

  const getRowId = (row: any) => row.corporateId

  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    pageSize: 10,
    page: 0,
  });

  useEffect(() => {
    if( formRef.current ){
      const formData = new FormData(formRef.current);
      formData.set('pageIndex', paginationModel.page);
      searchCustomerInfoAction(formData);
      
    }
  }, [paginationModel])

  return (
    <>
      <AppBar
        sx={{ backgroundColor: '#1F346B' }}
        className= "bg-primary"
      >
        <Toolbar>
          <Typography variant="h6" component="div">
            Customer Info list
          </Typography>
        </Toolbar>
      </AppBar>
      <form action={prepareBeforeSendAction} ref={formRef}>
        <Grid container spacing={2} sx={{ marginTop: 8, p: 2 }}>
          {new Array(rowCount).fill(0).map((_, index: number) => {
            const field = searchFields.shift();
            const field2 = searchFields.shift();
            return (
              <React.Fragment key={index}>
                <Grid item xs={1} md={1}></Grid>
                <Grid item xs={4} md={4} className="flex items-center gap-4">
                  <Grid xs={6} className="text-right">
                    {field?.title}
                  </Grid>
                  <Grid xs={6}>{field?.input}</Grid>
                </Grid>
                <Grid item xs={4} md={4} className="flex items-center gap-4">
                  <Grid xs={6} className="text-right">
                    {field2?.title}
                  </Grid>
                  <Grid xs={6}>{field2?.input}</Grid>
                </Grid>
                <Grid item xs={2} md={2} className="flex items-center justify-evenly gap-2">
                  {index + 1 === rowCount && (
                    <>
                      <Button
                        type="submit"
                        variant="contained"
                        className="bg-[#1F346B] hover:bg-[#1F346B] hover:brightness-95 text-xl py-0 w-25 h-10 font-db-helvethaica"
                        sx={{ backgroundColor: '#1F346B' }}
                        disabled={pending}
                      >
                        ค้นหา
                      </Button>
                      <Button type="reset" 
                        variant="contained"
                        sx={{ backgroundColor: '#E8E8E8', color: '#252525' }}
                        className="bg-[#E8E8E8] hover:bg-[#E8E8E8] hover:brightness-95 text-xl py-0 w-25 h-10 !text-[#252525] font-db-helvethaica"
                      >
                        ล้างค่า
                      </Button>
                    </>
                  )}
                </Grid>
                <Grid item xs={1} md={1}></Grid>
              </React.Fragment>
            );
          })}
        </Grid>
      </form>
      {
      <div className="p-4 w-full">
        <Table 
          columns={columns} 
          rows={rows} 
          getRowId={getRowId}
          totalItems={searchCustomerInfoState?.data?.totalItems || 0}
          totalPages={searchCustomerInfoState?.data?.totalPages || 0}
          paginationModel={paginationModel}
          setPaginationModel={setPaginationModel}
          //onPageChange={onPageChange}
        />
      </div>
      }
    </>
  );
};


export default CustomerInfoPage;
