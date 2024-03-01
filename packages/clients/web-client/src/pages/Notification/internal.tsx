import { FC } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { parentBoxStyles } from "../../styles/box";
import { Notification } from "../../components/profile";
import { useQuery } from "@apollo/client";
import { GET_NOTIFICATION_BY_USER_ID } from "../../gql/notifications";
import { useAuth } from "../../contexts/AuthContext";
import { Loader } from "../../components/loader";
import { Notifications } from "../../../../Dashboard/src/pages/Notifications/internal";

export const NotificationPage: FC = () => {
  const { currentUser } = useAuth();

  const { data, loading } = useQuery(GET_NOTIFICATION_BY_USER_ID, {
    variables: {
      userId: currentUser?.profileInfo?.id,
    },
  });
  const notifications = data?.getNotificationByUserId;
  return (
    <Box pt={7}>
      <Box sx={parentBoxStyles}>
        <Box>
          <Typography
            variant="h1"
            fontSize={40}
            fontFamily={"ABC Gravity"}
            fontWeight={700}
            color="#4f0336"
            sx={{ pb: 2 }}
          >
            Notifications
          </Typography>
        </Box>
        <Box style={{ width: "100%" }}>
          {loading ? (
            <Box mt={4}>
              <Loader />
            </Box>
          ) : (
            <>
              {notifications && notifications.length > 0 ? (
                <>
                  {notifications?.map((item: any, index: number) => {
                    return <Notification notification={item} />;
                  })}
                </>
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  mt={2}
                >
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: "24px",
                      fontWeight: "bold",
                      color: "#4F0336",
                    }}
                  >
                    No Notifications yet.
                  </Typography>
                </Box>
              )}
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};
