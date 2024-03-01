import { Box, SpeedDial, SpeedDialAction, styled } from "@mui/material";
import { Promotion } from "../../components/promotion";
import { LivePrice } from "../../components/live-price/internal";
import { WhyBuy } from "../../components/why-buy";
import { Banner } from "../../components/banner";
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Banner />
      <LivePrice />
      <Promotion />
      <WhyBuy />
      <SpeedDial
        ariaLabel="open account"
        sx={{ display: { xs: "none", sm: "flex" }, right: '20px',
        bottom: '20px',
        position: 'fixed', }}
        color="primary"
        icon={<AddIcon />}
        onClick={() => navigate('/open-account')}
      >]
      </SpeedDial>
    </Box>
  );
};
