import React, { FC, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Notification, NotificationCarousel } from "../../components/profile";
import { UserAccount } from "../../components/profile";
import { Button, Grid, Paper } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { SubUserForm } from "../../components/profile";
import { parentBoxStyles } from "../../styles/box";
import { Logout } from "@mui/icons-material";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useQuery } from "@apollo/client";
import { GET_NOTIFICATION_BY_USER_ID } from "../../gql/notifications";
import { GET_SUB_USERS } from "../../gql/sub-user";
import { ProfileSetting } from "../../components/profile/ProfileSetting";

const subAccountsData = [
  { label: "Mother", value: "A0024", icon: <Avatar /> },
  { label: "Wife", value: "A0026", icon: <Avatar /> },
  { label: "Brother", value: "A0028", icon: <Avatar /> },
  { label: "Sister", value: "A0029", icon: <Avatar /> },
];

const commonStyles = {
  a: { display: "flex", paddingTop: "30px", flexDirection: "column", width: '100%' },
  b: { fontFamily: "Inter", fontSize: 15, fontWeight: "bold" },
  c: {
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "10px",
  },
};

export const ProfilePage: FC = () => {
  const navigate = useNavigate();
  const { currentUser, logout }  = useAuth();
  useEffect(() => {
    if (!currentUser) navigate('/login?returnUrl=/profile');
  }, [currentUser, navigate]);
  const [isUserFormOpen, setIsUserFormOpen] = useState(false);
  const [openProfileSetting, setOpenProfileSetting] = useState(false);
  const { data: notificationsData } = useQuery(GET_NOTIFICATION_BY_USER_ID, {
    variables: {
      userId: currentUser?.profileInfo?.id,
    },
  });
  const notifications = notificationsData?.getNotificationByUserId;
  const { data: subUsersData } = useQuery(GET_SUB_USERS);
  const subUsers = subUsersData?.getSubUsers;


  const renderSubAccounts = () => {
    return subUsers?.map((item: any, index: number) => (
      <Grid
        item
        key={index}
        xs={12}
        sm={5}
        gap={1}
        my={1}
        sx={{ marginLeft: { xs: 0, sm: 1 } }}
        justifyContent={'left'}
      >
        <Paper
          key={index}
          sx={{
            padding: 1,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: 'space-between',
            gap: 2
          }}
        >
          <Avatar />
          <Box>
            <Typography
              variant="body2"
              sx={{ fontSize: 14, fontWeight: "bold", color: '4F0336' }}
            >
              {item.firstName} {item.lastName}
            </Typography>
            <Typography
              variant="body2"
              color="#777777"
              sx={{ fontSize: 12 }}
            >
              {item.referenceNo}
            </Typography>
          </Box>
        </Paper>
      </Grid>
    ));
  };

  const logOut = async () => {
    await logout();
    localStorage.removeItem("accessToken");
    window.location.reload();
  };

  return (
    <Box pt={7}>
      <Box sx={parentBoxStyles} style={{ backgroundImage: "none" }}>
        <Box
          sx={{
            backgroundColor: "white",
            flexWrap: "wrap",
            gap: "10px",
            borderRadius: "0px 0px 20px 20px",
            display: "contents",
          }}
        >
          <Box sx={{ display: "flex", paddingY: "10px" }}>
            <Avatar
              alt="Profile Picture"
              src={require("../../images/profile.png")}
              sx={{ width: 80, height: 80, mb: 2 }}
            />
            <Box
              sx={{ display: "flex", flexDirection: "column", padding: "12px" }}
            >
              <Typography
                variant="body2"
                color="#777777"
                sx={{ fontFamily: "Roboto", fontSize: 15, fontWeight: "bold" }}
              >
                Hello,
              </Typography>
              <Typography
                variant="body1"
                color="primary"
                sx={{ fontFamily: "Roboto", fontSize: 20, fontWeight: "bold" }}
              >
                {" "}
                {currentUser?.phoneNumber}
              </Typography>
            </Box>
          </Box>
          {notifications && notifications.length > 0 && (
            <Box
              sx={{
                backgroundColor: "white",
                display: "contents",
                mt: 2,
              }}
            >
              <Box textAlign={"left"} width={"100%"}>
                <Typography
                  variant="body1"
                  color="#777777"
                  sx={{ ...commonStyles.b }}
                >
                  Notifications
                </Typography>
              </Box>
              <Box style={{ width: "100%" }}>
                {<NotificationCarousel notifications={notifications} />}
              </Box>
            </Box>
          )}
        </Box>
        <Box sx={{ ...commonStyles.a }}>
          <Typography
            variant="body1"
            color="#777777"
            sx={{ ...commonStyles.b }}
          >
            Your Account
          </Typography>
          {<UserAccount />}
        </Box>
        <Box sx={{ ...commonStyles.a }}>
          <Typography
            variant="body1"
            color="#777777"
            sx={{ ...commonStyles.b }}
          >
            Sub Accounts
          </Typography>
          <Grid container justifyContent={"center"}>
            {renderSubAccounts()}
          </Grid>
          <SubUserForm
            open={isUserFormOpen}
            onClose={() => setIsUserFormOpen(false)}
          />
        </Box>

        <Box
          sx={{
            ...commonStyles.a,
            flexDirection: "column",
            width: "100%",
            pt: 2,
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Button
            variant="contained"
            sx={{
              mt: 1,
              backgroundColor: "#4F0336",
              "&:hover": { backgroundColor: "#390227" },
            }}
            onClick={() => setIsUserFormOpen(true)}
          >
            <Typography textTransform={"none"}>Add Sub User</Typography>
          </Button>
            <Button
              variant="contained"
              sx={{
                mt: 1,
                backgroundColor: "#4F0336",
                "&:hover": { backgroundColor: "#390227" },
              }}
              onClick={() => navigate("/my-account")}
            >
              <Typography
                color="white"
                textTransform={"none"}
                fontWeight={"normal"}
                fontSize={16}
              >
                My Account
              </Typography>
            </Button>
            <Button
              variant="contained"
              sx={{
                mt: 1,
                backgroundColor: "#4F0336",
                "&:hover": { backgroundColor: "#390227" },
              }}
              onClick={() => setOpenProfileSetting(true)}
            >
              <Typography
                color="white"
                textTransform={"none"}
                fontWeight={"normal"}
                fontSize={16}
              >
                Profile Settings
              </Typography>
            </Button>
            <Button
              variant="contained"
              sx={{
                mt: 1,
                backgroundColor: "#4F0336",
                "&:hover": { backgroundColor: "#390227" },
                mb: 2
              }}
              onClick={() => logOut()}
            >
              <Typography
                color="white"
                textTransform={"none"}
                fontWeight={"normal"}
                fontSize={16}
              >
                SignOut
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
      <ProfileSetting open={openProfileSetting} onClose={() => setOpenProfileSetting(false)} />
    </Box>
  );
};
