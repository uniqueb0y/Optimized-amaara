import { Box, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Promotion = () => {
  const navigate = useNavigate();
  const promotions = [
    {
      name: "Saving Banner",
      image: "/promotion1.png",
      link: "/",
    },
    {
      name: "Seetu Banner",
      image: "/seetuPromotion.png",
      link: "/",
    },
    {
      name: "Saving Banner",
      image: "/promotion2.png",
      link: "/",
    },
    {
      name: "London Promotion Banner",
      image: "/storeLocation.png",
      link: "/",
    },
    {
      name: "Valentine Banner",
      image: "/newStore3.png",
      link: "/",
    },
    {
      name: "Saving Banner",
      image: "/promotion3.png",
      link: "/",
    },
  ];
  return (
    <Box>
      <Grid container sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" } }}>
        {promotions &&
          promotions.map((promotion, index) => {
            return (
              <Grid item key={index} display={"contents"}>
                <Box
                  component="img"
                  src={promotion.image}
                  alt={promotion.name}
                  sx={{ width: { xs: "100%", sm: "50%"}, cursor: 'pointer', padding: { xs: 0, sm: 1 } }}
                  onClick={() => navigate(promotion.link)}
                ></Box>
              </Grid>
            );
          })}
      </Grid>
      {/* <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" } }}>
        {promotions &&
          promotions.splice(0, 2).map((promotion, index) => {
            return (
              <Box key={index} display={"contents"}>
                <Box
                  component="img"
                  src={promotion.image}
                  alt={promotion.name}
                  sx={{ width: "100%" }}
                  onClick={() => navigate(promotion.link)}
                ></Box>
              </Box>
            );
          })}
      </Box> */}
    </Box>
    // <Box>
    //   <Box
    //     component="img"
    //     src="/Join Seetu Banner.svg"
    //     sx={{ width: "100%" }}
    //   ></Box>
    //   <Box
    //     component="img"
    //     src="Saving Banner.svg"
    //     sx={{ width: "100%" }}
    //     onClick={() => navigate("/scheme")}
    //   ></Box>
    //   <Box
    //     component="img"
    //     src="/London Promotion Banner.svg"
    //     sx={{ width: "100%" }}
    //   ></Box>
    //   <Box
    //     component="img"
    //     src="/Valentine Banner.svg"
    //     sx={{ width: "100%" }}
    //   ></Box>
    // </Box>
  );
};
