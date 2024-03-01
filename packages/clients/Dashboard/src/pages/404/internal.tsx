import { FC } from 'react';
import { Box, TextField, ThemeProvider, createTheme, Button, Typography, Link } from '@mui/material';

export const PageNotFound: FC = () => {
  

  return (
      <Box sx={{ width: '100vw', height: '100vh', background: 'white', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex',}} pt={7}>
        <Box component={'img'} src='/not_found.svg' alt="404" height={'80vh'} width={'95vw'} ></Box>
        
      </Box>
  );
};
