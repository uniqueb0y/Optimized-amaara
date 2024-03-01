import React, { useState } from 'react';
import { TextField, Button, Stack, MenuItem, Select, InputLabel, FormControl, Dialog, DialogActions, DialogContent, DialogTitle, Box } from '@mui/material';
import { dialogActionsStyles, dialogCancelActionStyles, dialogContentStyles, dialogHeaderStyles, dialogSubmitActionStyles } from '../../styles/dialog';
import { useMutation } from '@apollo/client';
import { CREATE_SUB_USER } from '../../gql/sub-user';
import { useAuth } from '../../contexts/AuthContext';
import { Spinner } from '../spinner';

interface SubUserProps {open: boolean; onClose: () => void;}

export const SubUserForm: React.FC<SubUserProps> = ({ open = false, onClose }) => {
  const { currentUser }  = useAuth();
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [relation, setRelation] = useState<string>('');
  const [dateOfBirth, setDateOfBirth] = useState<string>('Date of Birth');
  const [createSubUserMutation] = useMutation(CREATE_SUB_USER, {
    refetchQueries: ["GetSubUsers"],
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(firstName, relation, dateOfBirth);
    createSubUserMutation({
      variables: {
        subUserInput: {
          parentId: currentUser?.profileInfo?.id,
          firstName: firstName,
          lastName: lastName,
          relation: relation,
          dob: dateOfBirth,
        }
      },
      onCompleted: (data: any) => {
        if (data?.createSubUser) {
          console.log("Sub User created");
          setLoading(false);
          onClose();
        }
      },
      onError: (error: any) => {
        console.log(error);
        setLoading(false);
        alert(
          "Error while processing this request, please try again after sometime."
        );
      },
    });
  };

  const isDisabled = !firstName || !lastName || !relation || !dateOfBirth;

  return (
    <Dialog
      open={open}
      onClose={onClose}
    >
      <DialogTitle sx={dialogHeaderStyles}>Add Sub User</DialogTitle>
      <Box>
        <DialogContent sx={dialogContentStyles}>
          <form onSubmit={handleSubmit}>
            <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
              <TextField
                type="text"
                variant="outlined"
                color="secondary"
                label="First Name*"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                fullWidth
              />
              <TextField
                type="text"
                variant="outlined"
                color="secondary"
                label="Last Name*"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                fullWidth
              />
            </Stack>
            <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
            <TextField
                type="date"
                variant="outlined"
                color="secondary"
                onChange={(e) => setDateOfBirth(e.target.value)}
                value={dateOfBirth}
                fullWidth
                label="Date of Birth*"
              />
              <TextField
                type="text"
                variant="outlined"
                color="secondary"
                label="Relation*"
                onChange={(e) => setRelation(e.target.value)}
                value={relation}
                fullWidth
              />
              
            </Stack>
            <DialogActions sx={dialogActionsStyles}>
              {loading ? (
                <Spinner />
              ) : (
                <>
                  <Button onClick={onClose} size="small" sx={dialogCancelActionStyles}>
                    Cancel
                  </Button>
                  <Button disabled={isDisabled} type="submit" size="small" sx={dialogSubmitActionStyles}>
                    Add
                  </Button>
                </>
              )}
            </DialogActions>
          </form>
        </DialogContent>
      </Box>
    </Dialog>
  );
};


