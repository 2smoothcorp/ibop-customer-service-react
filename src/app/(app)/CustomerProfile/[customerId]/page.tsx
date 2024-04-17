import { Constants } from "@/constants/constants";
import { MenuResponseListDataResponse } from "@/services/rest-api/customer-service";
import { AppBar, Grid, Toolbar, Typography } from "@mui/material";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const CustomerInfoDashBoardPage = async ({
  params,
  searchParams
}: {
  params: { customerId?: string },
  searchParams?: { query?: string; page?: string }
}) => {

  if( ! params?.customerId ){
    redirect('/CustomerProfile')
    return;
  }

  const dashboard: MenuResponseListDataResponse = await getDashboardByCorporateId(params?.customerId)

  return (
    <>
      <AppBar
        sx={{
          backgroundColor: "#1F346B",
        }}
      >
        <Toolbar>
          <Typography variant="h6" component="div">
            รายละเอียดข้อมูล
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container spacing={2} sx={{ marginTop: 8, p: 2 }}>
        test
        {
          (dashboard?.data || []).map( (d) => {
            return (JSON.stringify(d))
          } )
        }
      </Grid>
    </>
  );
};

const getDashboardByCorporateId = async (corporateId: string) => {
  try{
    const menus = (await fetch(`${Constants.APIUrl}/api/customerProfile/dashboard/${corporateId}`, {
      headers: { Cookie: cookies().toString() },
      cache: 'no-cache',
    }))
    const response = await menus.json()
    return response
    //
  }catch(e){
    console.error(e)
  }
}

export default CustomerInfoDashBoardPage;
