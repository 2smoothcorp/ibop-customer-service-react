import { Constants } from "@/constants/constants";
import { MenuResponse, MenuResponseListDataResponse } from "@/services/rest-api/customer-service";
import { AppBar, Grid, Toolbar, Typography } from "@mui/material";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import styles from './style.module.css';

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

  const onClickItem = (item: MenuResponse) => {
    console.log('onClickItem', item)
  }

  const generateMenuItem = () => {
    return dashboard.data?.map((item, idx) => {
      const { sequence, name, description } = item;
      return (
        <Grid item
          key={`dashboard-item-${ idx }_${ sequence || '' }`}
          xs={12} sm={12} md={12} lg={6}
        >
          <div
            className={ styles['item-container'] }
            onClick={() => { onClickItem(item); }}
          >
            <Grid container>
              <Grid item>
                <i className={'far fa-user item-icon'}></i>
              </Grid>
              <Grid item>
                <span className={ styles['item-text-title'] }>
                  { name }
                </span>
                {/* <br />
                <span className={ styles['item-text-sub-title'] }>
                  { description }
                </span> */}
              </Grid>
            </Grid>
          </div>
        </Grid>
      );
    });
  }

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
      { generateMenuItem() }
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
