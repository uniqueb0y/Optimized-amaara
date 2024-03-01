import React from 'react';
import {BottomNavigation, BottomNavigationAction, Typography, Box, useTheme, useMediaQuery, SpeedDial, SpeedDialAction, SpeedDialIcon} from '@mui/material';                                                                             
import { LargeScreenFooterComponent } from '../footerlarge';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import LoginIcon from '@mui/icons-material/Login';
import Person2Icon from '@mui/icons-material/Person2';
import AddIcon from '@mui/icons-material/Add';
import HomeIcon from "@mui/icons-material/Home";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import {Diamond }from '@mui/icons-material';

// const DashBoardIcon = () => <img src="/DashBoard.svg" alt="DashBoard" />;
// const SchemeIcon = () => <img src="/Schemes.svg" alt="Schemes" />;
// const ProfileIcon = () => <img src="/Profile2.svg" alt="Profile" />;
// const JewelleryIcon = () => <img src="/jewellery.svg" alt="Jewellery" />;
// const CartIcon = () => <img src="/Cart.svg" alt="Cart" />;

export const Footer: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const labelStyle = {
    color: '#4f0336',
    fontWeight: 'bold',
    fontSize: '10px',
    marginTop: '4px',
  };

  return (
    <Box sx={{ paddingBottom: isSmallScreen ? '64px' : 0 }}>
      {isSmallScreen ? (
        <BottomNavigation
          showLabels={true}
          sx={{ backgroundColor: '#f2eee5', position: 'fixed', bottom: 0, width: '100%' }}
        >
          <BottomNavigationAction onClick={() => navigate('/')}
            label={<Typography variant="body2" sx={labelStyle}>Home</Typography>}
            icon={<HomeIcon sx={{color: "#4f0336"}} />}
          />
          <BottomNavigationAction onClick={() => navigate('/scheme')}
            label={<Typography variant="body2" sx={labelStyle}>Schemes</Typography>}
            icon={<Diamond sx={{color: "#4f0336"}} />}
          />
          {/* <BottomNavigationAction onClick={() => navigate('/jewellery')}
            label={<Typography variant="body2" sx={labelStyle}>Jewellery</Typography>}
            icon={<DiamondIcon sx={{color: "#4f0336"}} />}
          /> */}
          <Box mx={3}>
            <SpeedDial
              ariaLabel="open new account"
              icon={<AddIcon />}
              sx={{ right: "42vw", bottom: "30px", position: "fixed", }}
              onClick={() => navigate('/open-account')}
            >
            </SpeedDial>
          </Box>
          <BottomNavigationAction onClick={() => navigate('/raffle')}
            label={<Typography variant="body2" sx={labelStyle}>Raffle</Typography>}
            icon={<EmojiEventsIcon sx={{color: "#4f0336"}} />}
          />
          {currentUser ? (
            <BottomNavigationAction onClick={() => navigate('/profile')}
            label={<Typography variant="body2" sx={labelStyle}>Profile</Typography>}
            icon={<Person2Icon sx={{color: "#4f0336"}} />}
          />
          ) : (
            <BottomNavigationAction onClick={() => navigate('/login')}
            label={<Typography variant="body2" sx={labelStyle}>SignIn</Typography>}
            icon={<LoginIcon sx={{color: "#4f0336"}} />}
          />
          )}
        </BottomNavigation>
      ) : (
        // Render the large screen footer component
        <LargeScreenFooterComponent />
      )}
    </Box>
  );
};

