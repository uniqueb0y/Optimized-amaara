import { FC } from "react";
import { Box, Card, Typography } from "@mui/material";
import {
  cardCommonStyles,
  customHeadingStyle,
  customBodyTextStyle,
} from "../../styles/card-text";
import { parentBoxStyles } from "../../styles/box";

export const AboutUs: FC = () => {
  return (
    <Box pt={8}>
      <Box sx={parentBoxStyles}>
        <Box>
          <Typography
          variant="h1"
            fontSize={40}
            fontFamily={"ABC Gravity"}
            fontWeight={700}
            color="#4f0336"
            sx={{ pb: 2 }}>
            About Us
          </Typography>
        </Box>
        <Box>
          <Card className="card" sx={cardCommonStyles}>
            <Typography sx={customBodyTextStyle}>
              At Amaara Jewellery, we believe that everyone deserves to own
              beautiful and high-quality gold jewellery. That's why we offer a
              wide selection of gold jewellery at affordable prices, as well as
              a variety of saving schemes to help you make your purchase.
            </Typography>
            <Typography sx={customBodyTextStyle}>
              We are a family-owned and operated business with over 20 years of
              experience in the gold industry. We are committed to providing our
              customers with the best possible shopping experience, and we are
              always happy to answer any questions you may have.
            </Typography>
            <Typography sx={customBodyTextStyle}>
              Our gold jewellery is made with the highest quality materials and
              craftsmanship, and we offer a 100% satisfaction guarantee on all
              of our products. We also offer a variety of shipping and return
              options to make your shopping experience as convenient as
              possible.
            </Typography>
          </Card>
        </Box>
        <Box>
          <Card className="card" sx={cardCommonStyles}>
            <Typography sx={customHeadingStyle}>Our Saving Schemes</Typography>
            <Typography sx={customBodyTextStyle}>
              We offer a variety of saving schemes to help you make your dream
              of owning gold jewellery a reality. Our saving schemes are
              flexible and affordable, and they can be tailored to your
              individual needs and budget.
            </Typography>
            <Typography sx={customBodyTextStyle}>
              One of our most popular saving schemes is our Monthly Installment
              Plan (MIP). With MIP, you can pay for your gold jewelry over a
              period of months, without any interest charges. We also offer a
              variety of other saving schemes, such as our Gold Accumulation
              Plan (GAP) and our Gold Savings Account (GSA).
            </Typography>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};
