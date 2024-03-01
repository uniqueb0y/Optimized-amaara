import { FC } from "react";
import { Box } from "@mui/material";
import { parentBoxStyles } from "../../styles/box";

export const PageNotFound: FC = () => {
  return (
    <Box pt={8}>
      <Box sx={parentBoxStyles}>
        <Box
          component={"img"}
          src='/not_found.svg'
          alt="404"
          height={"80vh"}
          width={"80vw"}
        ></Box>
      </Box>
    </Box>
  );
};
