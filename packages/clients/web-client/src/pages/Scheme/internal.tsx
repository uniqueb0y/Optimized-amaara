import { FC } from "react";
import { Box, Button, Card, Typography } from "@mui/material";
import {
  cardCommonStyles,
  customHeadingStyle,
  customBodyTextStyle,
} from "../../styles/card-text";
import { TeaserCarousel } from "../../components/teaser-carousel";
import { buttonStyles } from "../../styles/button";
import { useNavigate } from "react-router-dom";

export const Scheme: FC = () => {
  const navigate = useNavigate();
  const images = ["/seetuCarousel2.png", "/seetuCarousel3.png"];
  return (
    <Box pt={7} pb={4}>
      <Box onClick={() => navigate("/open-account")} style={{ cursor: 'pointer' }}>
        <TeaserCarousel images={images} />
      </Box>
      <Box>
        <Box
          component="img"
          src="/seetuPage.png"
          alt="seetu scheme"
          width="100%"
          display={{ xs: "none", sm: "block" }}
        />
        <Box
          component="img"
          src="/seetuPageMobile.png"
          alt="seetu scheme"
          width="100%"
          display={{ xs: "block", sm: "none" }}
        />
      </Box>
      <Box
        sx={{
          width: "100vw",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          display: "inline-flex",
          py: 2,
          paddingX: { xs: 3, sm: "20%", md: "25%" },
        }}
      >
        <Card className="card" sx={[cardCommonStyles, { mb: 0 }]}>
          <Typography sx={customHeadingStyle}>About Scheme</Typography>
          <Typography sx={customBodyTextStyle}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Typography>
          <Typography sx={customBodyTextStyle}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Typography>
          <Typography
            variant="body2"
            fontSize={10}
            color="#777777"
            sx={{ lineHeight: 2, textAlign: "justify" }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Typography>
        </Card>
      </Box>
      <Box
        sx={[
          styled.flex,
          { mt: 2, width: "100%", px: { xs: 6, sm: "20%", md: "25%" } },
        ]}
      >
        <Button
          sx={[buttonStyles, { width: { xs: "100%" } }]}
          onClick={() => navigate("/open-account")}
        >
          Open New Account
        </Button>
      </Box>
    </Box>
  );
};

const styled = {
  flex: {
    display: "flex",
    justifyContent: "center",
  },
};
