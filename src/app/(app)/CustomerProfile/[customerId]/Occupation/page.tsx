import DetailSection, {
  Detail,
} from "@/containers/detail-section/detail-section";
import { AppBar, Toolbar, Typography } from "@mui/material";

const OccupationPage = () => {
  const list: Array<Detail> = [
    {
      title:
        "วัตถุประสงค์การลงทุน (เลือกได้มากกว่า 1 ข้อ) Investment Objective (You can select more than 1 item) * ",
      value: "เพื่อสิทธิประโยชน์ทางภาษี Retirement Investment",
    },
  ];

  return (
    <>
      <AppBar
        sx={{
          backgroundColor: "#1F346B",
        }}
      >
        <Toolbar>
          <Typography variant="h6" component="div">
            อาชีพและข้อมูลการเงิน
          </Typography>
        </Toolbar>
      </AppBar>
      <>
        <DetailSection
          topic="ข้อมูลทางการเงิน"
          detailList={list}
          colPerRow={1}
        />
      </>
    </>
  );
};

export default OccupationPage;
