import { Grid } from "@mui/material";

export interface DetailSectionProps<T> {
  topic?: string;
  detailList?: Array<Detail>;
  data?: Array<T>;
  colPerRow?: 1 | 2 | 3 | 4;
}

export interface Detail {
  title?: string;
  value?: string;
  format?: () => any;
}

const DetailSection = <T,>(props: DetailSectionProps<T>) => {
  const { topic, detailList, data, colPerRow = 3 } = props;

  const getColPerRow = () => {
    switch (colPerRow) {
      case 1:
        return 12;
      case 2:
        return 6;
      case 3:
        return 4;
      case 4:
        return 3;
      default:
        return 4;
    }
  };
  const COL_PER_ROW = getColPerRow();

  return (
    <>
      <div className="text-green pb-4 border-b-2 border-b-slate-500">
        {topic}
      </div>
      <Grid container spacing={2} className="mt-2">
        {detailList?.map((l, idx) => {
          return (
            <Grid container item key={idx} xs={COL_PER_ROW} spacing={2}>
              <Grid
                item
                xs={COL_PER_ROW === 12 ? 12 : 6}
                className={COL_PER_ROW === 12 ? "" : "flex justify-end"}
              >
                {l.title}
              </Grid>
              <Grid item xs={COL_PER_ROW === 12 ? 12 : 6}>
                {l.value}
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default DetailSection;
