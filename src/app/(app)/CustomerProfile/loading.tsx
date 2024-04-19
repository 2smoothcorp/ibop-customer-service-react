import { Box, CircularProgress } from "@mui/material";

export const Loading = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-zinc-400 ">
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    </div>
  )
}

export default Loading;