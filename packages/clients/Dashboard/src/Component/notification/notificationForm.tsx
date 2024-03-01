import React, { useState } from "react";
import {
  TextField,
  Button,
  Stack,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Box,
} from "@mui/material";
import {
  dialogActionsStyles,
  dialogCancelActionStyles,
  dialogContentStyles,
  dialogHeaderStyles,
  dialogSubmitActionStyles,
} from "../../styles/dialog";
import { useMutation } from "@apollo/client";
import { CREATE_NOTIFICATION } from "../../gql/notifications";
import { useAuth } from "../../contexts/AuthContext";
import { Spinner } from "../Spinner";

interface NotificationFormProps {
  open: boolean;
  onClose: () => void;
}

export const NotificationForm: React.FC<NotificationFormProps> = ({
  open = false,
  onClose,
}) => {
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const { currentUser } = useAuth();
  const [createNotificationMutation] = useMutation(CREATE_NOTIFICATION, {
    refetchQueries: ["GetCustomNotifications"],
  });

  // const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const files = e.target.files;
  //   if (files && files.length > 0) {
  //     setImage(files[0]);
  //   }
  // };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const notificationObj = {
      sentBy: currentUser?.profileInfo?.id,
      message: message,
    };
    createNotificationMutation({
      variables: {
        notificationInput: notificationObj
      },
      onCompleted: (data: any) => {
        if (data?.createNotification) {
          console.log("Notification created");
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

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle sx={dialogHeaderStyles}>Add Notification</DialogTitle>
      <Box>
        <DialogContent sx={dialogContentStyles}>
          <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <TextField
                type="text"
                variant="outlined"
                color="secondary"
                label="Message"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                fullWidth
                required
                rows={5}
                multiline
              />
              {/* <input
                accept="image/*"
                id="image-upload"
                type="file"
                onChange={handleImageChange}
                style={{ display: 'none' }}
              />
              <label htmlFor="image-upload">
                <Button
                  variant="contained"
                  component="span"
                  sx={{ backgroundColor: '#4F0336', '&:hover': { backgroundColor: '#390227' } }}
                >
                  Upload Image
                </Button>
              </label>
              <span>{image?.name || 'No file chosen'}</span> */}
            </Stack>
            <DialogActions sx={dialogActionsStyles}>
              {loading ? (
                <Spinner />
              ) : (
                <>
                  <Button onClick={onClose} size="small" sx={dialogCancelActionStyles}>
                    Cancel
                  </Button>
                  <Button type="submit" size="small" sx={dialogSubmitActionStyles}>
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
