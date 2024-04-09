import { AppBar, Toolbar, Typography } from "@mui/material";

const CustomerInfoDashBoardPage = () => {
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
    </>
  );
};

export default CustomerInfoDashBoardPage;
