import DetailSection from "@/components/detail-section/detail-section";
import { SpaceBar } from "@mui/icons-material";
import { AppBar, Toolbar, Typography } from "@mui/material";

const CustomerInformationPage = () => {
  return (
    <>
      <AppBar
        sx={{
          backgroundColor: "#1F346B",
        }}
      >
        <Toolbar>
          <Typography variant="h6" component="div">
            Customer Information
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="mt-16 p-4">
        <CustomerDetail />
        <SpaceBar />
        <MaritalStatusDetail />
        <SpaceBar />
        <PoliticalStatusDetail />
      </div>
    </>
    //sx={{ marginTop: 8, p: 2 }}
  );
};

const CustomerDetail = () => {
  const list = [
    { title: "คำนำหน้าชื่อ", value: "น.ส." },
    { title: "ชื่อ", value: "" },
    { title: "นามสกุล", value: "" },
    { title: "Title", value: "" },
    { title: "Name", value: "" },
    { title: "Surname", value: "" },
    { title: "เพศ", value: "" },
    { title: "วัน/เดือน/ปีเกิด (ค.ศ.)", value: "" },
    { title: "คำนำหน้าชื่อ", value: "" },
    { title: "คำนำหน้าชื่อ", value: "" },
  ];

  return (
    <>
      <DetailSection topic="ข้อมูลส่วนตัว" detailList={list}></DetailSection>
    </>
  );
};

const MaritalStatusDetail = () => {
  const list = [
    { title: "คำนำหน้าชื่อ", value: "น.ส." },
    { title: "ชื่อ", value: "" },
    { title: "นามสกุล", value: "" },
    { title: "Title", value: "" },
    { title: "Name", value: "" },
    { title: "Surname", value: "" },
    { title: "เพศ", value: "" },
    { title: "วัน/เดือน/ปีเกิด (ค.ศ.)", value: "" },
    { title: "คำนำหน้าชื่อ", value: "" },
    { title: "คำนำหน้าชื่อ", value: "" },
  ];

  return (
    <DetailSection topic="สถานภาพการสมรส" detailList={list}></DetailSection>
  );
};

const PoliticalStatusDetail = () => {
  const list = [{ title: "ตำแหน่งทางการเมือง", value: "" }];

  return (
    <DetailSection
      topic="สถานภาพกทางการเมือง"
      detailList={list}
    ></DetailSection>
  );
};

export default CustomerInformationPage;
