import React, { useState } from 'react';
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { UserTable } from '../../Component/UserTable';
import { AddUser } from '../../Component/AddUser';
import { GET_USERS } from '../../gql/user';
import { useQuery } from "@apollo/client";
import { Loader } from '../../Component/Loader';
import AddIcon from '@mui/icons-material/Add';

export const UserAccount: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const {
    data,
    loading,
  } = useQuery(GET_USERS);

  const users = data?.getUsers;
  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ padding: "40px", width: '95vw' }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "flex-start", sm: "space-between" },
            gap: 10,
          }}
        >
          <Typography
            variant="h1"
            sx={{ fontSize: 24, fontWeight: "bold", color: "#4F0336" }}
          >
            User Accounts
          </Typography>
          <Button
            variant="contained"
            size="small"
            sx={{
              backgroundColor: "#4F0336",
              "&:hover": { backgroundColor: "#390227" },
            }}
            onClick={() => setIsFormOpen(true)}
          >
            <AddIcon />
          </Button>
        </Box>
        {loading && (
          <Box mt={4}>
            <Loader />
          </Box>
        )}
        {!loading && users && users.length > 0 ? (
          <UserTable users={users} />
        ) : (
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
        <AddUser open={isFormOpen} onClose={() => setIsFormOpen(false)} />
      </Box>
    </Box>
  );
};
