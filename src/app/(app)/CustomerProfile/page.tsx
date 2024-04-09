"use client";

import Table from "@/components/table/table";
import {
  AppBar,
  Button,
  Grid,
  Paper,
  styled,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { GridPaginationModel } from "@mui/x-data-grid";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const CustomerInfoPage = () => {
  const router = useRouter();
  const params = useSearchParams();

  const onPageChange = (model: GridPaginationModel) => {
    const path = `/CustomerInfo?page=${model.page + 1}&pageSize=${
      model.pageSize
    }`;
    router.push(path);
  };

  console.log(`params`, params.get("page")?.toString());

  const searchFields = [
    {
      title: "Corporate ID",
      input: (
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      ),
    },
    {
      title: "เลขที่หลักฐาน",
      input: (
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      ),
    },
    {
      title: "ชื่อ - นามสกุล",
      input: (
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      ),
    },
    {
      title: "อีเมล / หมายเลขโทรศัพท์",
      input: (
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      ),
    },
  ];

  const col_per_row = 2;
  const rows = searchFields.length / col_per_row;

  console.log(`searchFields`, searchFields);

  return (
    <>
      <AppBar
        sx={{
          backgroundColor: "#1F346B",
        }}
      >
        <Toolbar>
          <Typography variant="h6" component="div">
            Customer Info list
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container spacing={2} sx={{ marginTop: 8, p: 2 }}>
        {new Array(rows).fill(0).map((_, index: number) => {
          const field = searchFields.shift();
          const field2 = searchFields.shift();
          return (
            <React.Fragment key={index}>
              <Grid item xs={1} md={1}></Grid>
              <Grid item xs={4} md={4} className="flex items-center gap-2">
                <Grid xs={6} className="text-right">
                  {field?.title}
                </Grid>
                <Grid xs={6}>{field?.input}</Grid>
              </Grid>
              <Grid item xs={4} md={4} className="flex items-center gap-2">
                <Grid xs={6} className="text-right">
                  {field2?.title}
                </Grid>
                <Grid xs={6}>{field2?.input}</Grid>
              </Grid>
              <Grid item xs={2} md={2} className="flex items-center gap-2">
                {index + 1 === rows && (
                  <>
                    <Button
                      type="button"
                      variant="contained"
                      className="button"
                    >
                      ค้นหา
                    </Button>
                    <Button type="button" variant="outlined">
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
      {
      <div className="p-4">
        <Table onPageChange={onPageChange} />
      </div>
      }
    </>
  );
};

export default CustomerInfoPage;
