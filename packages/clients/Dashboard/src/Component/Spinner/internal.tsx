import { CircularProgress } from "@mui/material";
import { FC } from "react";

export const Spinner: FC<any> = ({ color = "#4F0336" }) => {
  return (
    <CircularProgress sx={{ color: color }} style={{ width: 18, height: 18 }} />
  );
};
