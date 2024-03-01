import React from "react";
import { Container, Typography, Box } from "@mui/material";

export const Banner: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        //height: "100vh",
        width: "100vw",
        //backgroundColor: "black",
        textAlign: "center",
        paddingX: 0,
        paddingTop: {xs: '56px', sm: '0'},
        //color: "white",
      }}
    >
      <Box display={'contents'}>
        <Box
          component="img"
          src={require("../../images/landing.png")}
          alt="Loading"
          sx={{
            width: { xs: "100%", sm: "100%" },
            height: { xs: "auto", sm: "auto" },
          }}
        />
      </Box>
    </Box>
  );
};
