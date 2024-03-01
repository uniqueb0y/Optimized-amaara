import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { Box } from '@mui/material';
import { useAuth } from '../../contexts/AuthContext';

export const UserAccount: React.FC = () => {
  const { currentUser } = useAuth();
  return (
    <>
    <Card sx={{ borderRadius: '20px', display: 'flex', mt: 1, flexDirection: 'column' }}>
      <CardContent>
        <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <Avatar alt="Profile Picture" src={require("../../images/profile.png")} />
        <Typography variant="body1"  sx={{ fontSize: 15, padding: '10px' }}>
          {currentUser?.profileInfo?.referenceNo}
        </Typography>
        </Box>
        <Typography variant="body1" color="#777777" sx={{ font: 'roboto', fontSize: 12, padding: '5px' }}>
          The excitement is building for the raffle! Good luck and make sure to join our Instagram page for the announcement!
        </Typography>
      </CardContent>
    </Card>
    {/* <Card sx={{ borderRadius: '20px', display: 'flex', mt: 1, flexDirection: 'column' }}>
    <CardContent>
    <Typography variant="body1"  sx={{ fontSize: 15, padding: '10px' }}>Open New Account</Typography>
      <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
      <Typography variant="body1" color="#777777" sx={{ font: 'roboto', fontSize: 12, padding: '12px' }}>
      Protect your savings from the uncertainties of inflation and invest in the timeless value of gold with our secure Seetu savings scheme.
      </Typography>
      <AddIcon color="primary" sx={{ fontSize: 60}} />
      </Box>
      
    </CardContent>
  </Card> */}
  </>
    
  );
};
