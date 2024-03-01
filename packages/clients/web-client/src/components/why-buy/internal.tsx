import { Box, Grid, Typography } from "@mui/material";

export const WhyBuy = () => {
  return (
    <Box sx={{ paddingX: { xs: 3, sm: 10 }, paddingTop: { xs: 3, sm: 10 } }}>
      <Box mb={3} textAlign={'center'}>
        <Typography color="#4F0336" fontWeight={"bold"} sx={{ fontSize: { xs: 30, sm: 40}}}>
          Why buy from us?
        </Typography>
      </Box>
      <Grid container sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, justifyContent: 'center' }}>
        <Grid item xs={12} sm={5}>
          <Box sx={flexStyled}>
          <img src="/1.svg" alt="01" height={50} />
          <Box>
            <Typography sx={headerStyled}>
              Purity is the Purpose
            </Typography>
            <Typography sx={textStyled}>
              We believe that gold purity is essential. That's why we offer our
              customers the widest selection of pure gold jewelry all backed by
              our satisfaction guarantee.
            </Typography>
          </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Box sx={flexStyled}>
          <img src="/2.svg" alt="02" height={50} />
          <Box>
            <Typography sx={headerStyled}>
              Unique Design Collection
            </Typography>
            <Typography sx={textStyled}>
              Our design carries our identity. We offer a wide range of gold and
              diamond jewelry collection of different categories.
            </Typography>
          </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Box sx={flexStyled}>
          <img src="/3.svg" alt="03" height={50} />
          <Box>
            <Typography sx={headerStyled}>
              Complete Transparency
            </Typography>
            <Typography sx={textStyled}>
              Starting from purity to weight and our Seetu saving schemes, we
              assure 100% transparency with our customers. See it all, know it
              all, and make the best decision.{" "}
            </Typography>
          </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Box sx={flexStyled}>
          <img src="/4.svg" alt="04" height={50} />
          <Box>
            <Typography sx={headerStyled}>
              All Certified Products
            </Typography>
            <Typography sx={textStyled}>
              We believe that gold purity is essential. That's why we offer our
              customers the widest selection of pure gold jewelry all backed by
              our satisfaction guarantee.{" "}
            </Typography>
          </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

const flexStyled = {
  display: "flex",
  gap: "16px",
  alignItems: 'flex-start',
  marginBottom: { xs: 2, sm: 8 }
};
const headerStyled = {
  fontSize: { xs: 18, sm: 20, lg: 24 },
  color: "#777777",
  fontWeight: 'bold'
}
const textStyled = {
  fontSize: { xs: 14, sm: 18, lg: 22 },
  color: "#777777",
  lineHeight: 2
};
