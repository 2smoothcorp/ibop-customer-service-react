'use client'

import { Button, Grid } from "@mui/material";
import React from "react";
import { useFormStatus } from "react-dom";

const SearchCustomerProfileListForm = () => {

  const { pending } = useFormStatus();

  const searchFields = [
    {
      title: "Corporate ID",
      input: (
        <input
          type="text"
          id="corporateID"
          name="corporateID"
          className={`w-full px-3 py-2 h-10 bg-[#D9D9D9] border border-slate-300 rounded-md text-xl shadow-sm placeholder-slate-400`}
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
          className={`w-full px-3 py-2 h-10 bg-[#D9D9D9] border border-slate-300 rounded-md text-xl shadow-sm placeholder-slate-400`}
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
          className={`w-full px-3 py-2 h-10 bg-[#D9D9D9] border border-slate-300 rounded-md text-xl shadow-sm placeholder-slate-400`}
        />
      ),
    },
    {
      title: "อีเมล / หมายเลขโทรศัพท์",
      input: (
        <input
          type="text"
          id="emailNumber"
          name="emailNumber"
          className={`w-full px-3 py-2 h-10 bg-[#D9D9D9] border border-slate-300 rounded-md text-xl shadow-sm placeholder-slate-400`}
        />
      ),
    },
  ];

  const col_per_row = 2;
  const rowCount = searchFields.length / col_per_row;

  return (
    <Grid container spacing={2} sx={{ marginTop: 8, p: 2 }}>
      {new Array(rowCount).fill(0).map((_, index: number) => {
        const field = searchFields.shift();
        const field2 = searchFields.shift();
        return (
          <React.Fragment key={index}>
            <Grid item xs={1} md={1}></Grid>
            <Grid item xs={4} md={4} className="flex items-center gap-4 gap-x-4">
              <Grid item xs={6} className="text-right">
                {field?.title}
              </Grid>
              <Grid item xs={6}>{field?.input}</Grid>
            </Grid>
            <Grid item xs={4} md={4} className="flex items-center gap-4 gap-x-4">
              <Grid item xs={6} className="text-right">
                {field2?.title}
              </Grid>
              <Grid item xs={6}>{field2?.input}</Grid>
            </Grid>
            <Grid item xs={2} md={2} className="flex items-center justify-evenly gap-2">
              {index + 1 === rowCount && (
                <>
                  <Button
                    type="submit"
                    variant="contained"
                    className="bg-primary-950 disabled:bg-primary-900 hover:bg-primary-900 transition-all text-white disabled:text-white text-xl py-0 w-25 h-10"
                    sx={{ backgroundColor: '#1F346B', minWidth: 60 }}
                    disabled={pending}
                  >
                    ค้นหา
                  </Button>
                  <Button type="reset"
                    variant="contained"
                    sx={{ backgroundColor: '#E8E8E8', color: '#252525', minWidth: 60 }}
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
  )
}

export default SearchCustomerProfileListForm;