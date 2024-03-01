import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { RaffleForm, RaffleWinner } from '../../Component/RaffleWinner';
import { GET_RAFFLE } from '../../gql/raffle';
import { useQuery } from '@apollo/client';
import { Loader } from '../../Component/Loader';
import AddIcon from '@mui/icons-material/Add';

export const Raffle: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false); 

  const {
    data,
    loading,
  } = useQuery(GET_RAFFLE);

  const result = data?.getRaffle;

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Box sx={{ padding: '40px', width: '95vw' }}>
        <Box sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: 'flex-start', sm: 'space-between'},
            gap: 10,
          }}>
          <Typography variant="h1" sx={{ fontSize: 24, fontWeight: 'bold', color: '#4F0336' }}>
            Raffle Winners
          </Typography>
          <Button
            variant="contained"
            size="small"
            sx={{ backgroundColor: '#4F0336', '&:hover': { backgroundColor: '#390227' } }}
            onClick={handleOpenForm}
          >
            <AddIcon />
          </Button>
        </Box>
        {loading ? (
          <Box mt={4}>
            <Loader />
          </Box>
        ) : (
          <>
          {result && result.length > 0 ? (<RaffleWinner winnerRows={result} />) : (
             <Box
             sx={{
               display: "flex",
               alignItems: "center",
               justifyContent: "center",
             }}
             mt={4}
           >
             <Typography
               variant="h1"
               sx={{ fontSize: "24px", fontWeight: "bold", color: "#4F0336" }}
             >
               No data found.
             </Typography>
           </Box>
          )}
          </>
          )}
        <RaffleForm open={isFormOpen} onClose={handleCloseForm} />
    
      </Box>
    </Box>
  );
};
