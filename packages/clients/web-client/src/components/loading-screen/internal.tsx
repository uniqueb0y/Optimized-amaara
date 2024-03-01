import React from 'react';
import { Container, Typography, Box } from '@mui/material';

export const Loading: React.FC = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
        backgroundColor: 'black',
        textAlign: 'center',
        color: 'white',
      }}
    >
      <Box>
        <Box
          component="img"
          src={require('../../images/ammara.gif')}
          alt="Loading"
          sx={{ width: { xs: '80%', sm: '100%' }, height: { xs: 'auto', sm: '500px' } }}
        />
      </Box>

      <Box sx={{ position: 'fixed', bottom: 8 }}>
        <Typography fontSize={'12px'} sx={{ letterSpacing: '1px'}}>From Amaara Jewellery</Typography>
      </Box>
    </Container>
  );
};
