import { Box, CircularProgress } from "@mui/material";

export const Loader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        left: "50%",
        top: "50%",
      }}
    >
      <CircularProgress sx={{ color: "#4F0336" }} />
    </Box>
  );
};
