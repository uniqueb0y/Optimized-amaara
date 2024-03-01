import { FC, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Notification, NotificationForm } from "../../Component/Notification";
import { useQuery } from "@apollo/client";
import { Loader } from "../../Component/Loader";
import { GET_CUSTOM_NOTIFICATIONS } from "../../gql/notifications";
import AddIcon from "@mui/icons-material/Add";

export const Notifications: FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { data, loading } = useQuery(GET_CUSTOM_NOTIFICATIONS);

  const notifications = data?.getCustomNotifications;

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ padding: "40px", width: "95vw" }}>
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
            Notifications
          </Typography>
          <Button
            variant="contained"
            size="small"
            sx={{
              backgroundColor: "#4F0336",
              "&:hover": { backgroundColor: "#390227" },
            }}
            onClick={handleOpenForm}
          >
            <AddIcon />
          </Button>
        </Box>
        {loading && (
          <Box mt={4}>
            <Loader />
          </Box>
        )}
        {!loading && notifications && notifications.length > 0 ? (
          <Notification notifications={notifications} />
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
        {isFormOpen && (
          <NotificationForm open={isFormOpen} onClose={handleCloseForm} />
        )}
      </Box>
    </Box>
  );
};
