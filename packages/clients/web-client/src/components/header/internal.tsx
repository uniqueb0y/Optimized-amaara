import React, { useEffect, useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  useTheme,
  useMediaQuery,
  Grid,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { HeaderStyled } from "./style";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";
import NotesIcon from "@mui/icons-material/Notes";
import InfoIcon from "@mui/icons-material/Info";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import { buttonStyles } from "../../styles/button";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Diamond } from "@mui/icons-material";

function useScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}

export const Header = () => {
  useScrollToTop();
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const { currentUser, logout } = useAuth();
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);
  const [show, setShow] = React.useState(false);

  useEffect(() => {
    let scrollPosition = 0;

    function handleScroll() {
      const newScrollPosition = window.scrollY;

      // ADDED
      const shouldShow = newScrollPosition > scrollPosition;

      // ADDED
      setShow(newScrollPosition !== 0);

      scrollPosition = newScrollPosition;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
  }, []);

  const handleAuth = async () => {
    try {
      if (currentUser) {
        await logout();
        localStorage.removeItem("accessToken");
        window.location.reload();
      } else {
        handleDrawerClose();
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const isProfileMenuOpen = Boolean(profileAnchorEl);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleProfileMenuOpen = (event: any) => {
    setProfileAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setProfileAnchorEl(null);
  };

  const handleMenuItemClick = (route: string) => {
    handleDrawerClose();
    // Add your logic for handling menu item click
    navigate(route);
  };

  const links = [
    { label: "Home", route: "/" },
    { label: "Schemes", route: "/scheme" },
    { label: "Raffle", route: "/raffle" },
    { label: "Notifications", route: "/notifications" },
    { label: "T&C", route: "/t&c" },
    { label: "About Us", route: "/about-us" },
    { label: "Contact Us", route: "/contact-us" },
  ];

  const profileMenuId = "profile-menu";
  const renderProfileMenu = (
    <Menu
      anchorEl={profileAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={profileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isProfileMenuOpen}
      onClose={handleProfileMenuClose}
      sx={{ marginTop: 4 }}
    >
      <MenuItem onClick={() => navigate("/profile")}>Profile</MenuItem>
      <MenuItem onClick={() => handleAuth()}>SignOut</MenuItem>
    </Menu>
  );

  return (
    <HeaderStyled
      defaultChecked={
        location.pathname === "/"
          ? window.innerWidth < 600
            ? true
            : show
          : true
      }
    >
      <AppBar position="fixed" elevation={0}>
        <Toolbar sx={{ backgroundColor: "#f2eee5", padding: "0 16px" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <IconButton
              color="inherit"
              onClick={handleDrawerOpen}
              sx={{
                color: "#4F0336",
                display: { xs: "block", sm: "none" },
                paddingBottom: 0,
              }}
            >
              <MenuIcon />
            </IconButton>
            {/* <Typography
              variant="h6"
              component="div"
              sx={{
                fontFamily: "Tensor Sans",
                fontWeight: 300,
                color: "#4F0336",
              }}
              onClick={() => navigate("/")}
            >
              AMAARA
            </Typography> */}
            <Box
              component={"img"}
              alt="Amaara Seetu"
              src={"/logo.svg"}
              width={120}
              onClick={() => navigate("/")}
              style={{ cursor: "pointer" }}
            />
            <Box sx={{ display: { xs: "none", sm: "block" }, marginLeft: 2 }}>
              <Grid
                container
                spacing={4}
                justifyContent={"center"}
                alignItems={"center"}
                sx={{ display: "flex" }}
              >
                <Grid item>
                  {links.map((link, index) => (
                    <Box
                      key={index}
                      sx={{
                        textAlign: "center",
                        display: "inline-block",
                      }}
                      pl={2}
                    >
                      <Typography
                        component={"span"}
                        onClick={() => navigate(link.route)}
                        sx={{
                          color: "#4F0336",
                          cursor: "pointer",
                          textDecoration: location.pathname === link.route ? 'underline' : 'none',
                          textUnderlineOffset: "3px",
                          "&:hover": {
                            textDecoration: "underline",
                          },
                        }}
                      >
                        {link.label}
                      </Typography>
                    </Box>
                  ))}
                  {currentUser ? (
                    <Box
                    sx={{
                      textAlign: "center",
                      display: "inline-block",
                      verticalAlign: "middle"
                    }}
                    pl={1}
                  >
                    <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={profileMenuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    color="primary"
                    sx={{ display: { xs: "none", sm: "block" } }}
                  >
                    <AccountCircle />
                  </IconButton>
                  </Box>
                  ) : (
                    <Box
                      sx={{
                        textAlign: "center",
                        display: "inline-block"
                      }}
                      pl={2}
                    >
                      <Button
                        sx={[
                          buttonStyles,
                        {
                          display: 'block'
                        }]}
                        onClick={() => handleAuth()}
                      >
                        <Typography component={"span"} textTransform={"none"} fontSize={14}>
                          {" "}
                          {currentUser ? "SignOut" : "SignIn"}
                        </Typography>
                      </Button>
                    </Box>)}
                </Grid>
              </Grid>
            </Box>
            <IconButton
              color="inherit"
              sx={{ color: "#4F0336", display: { xs: "block", sm: "none" } }}
              onClick={() => navigate("/notifications")}
            >
              <NotificationsIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={handleDrawerClose}
        sx={{
          "& .MuiDrawer-paper": {
            width: isSmallScreen ? "70%" : "30%",
            backgroundColor: "#f2eee5",
            padding: "16px",
            //marginTop: isSmallScreen ? "56px" : "64px",
            backdropFilter: "blur(8px)",
            height: "100%",
          },
        }}
      >
        <Box
          sx={{
            top: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* <Typography
            variant="h6"
            component="div"
            sx={{
              fontFamily: "Tensor Sans",
              fontWeight: 300,
              color: "#4F0336",
            }}
            onClick={() => navigate("/")}
          >
            AMAARA
          </Typography> */}
          <Box
            component={"img"}
            alt="logo"
            src={"/logo.svg"}
            width={120}
            onClick={() => {
              handleDrawerClose();
              navigate("/");
            }}
            style={{ cursor: "pointer" }}
          />

          {currentUser && (
            <Typography sx={{ color: "#4F0336", fontSize: 12 }}>
              Hello, {currentUser?.phoneNumber}
            </Typography>
          )}
        </Box>
        <List style={{ marginTop: currentUser ? "4px" : "8px" }}>
          {[
            { icon: HomeIcon, text: "Home", route: "/" },
            { icon: Diamond, text: "Seetu Savings", route: "/scheme" },
            { icon: NotesIcon, text: "Terms & Condition", route: "/t&c" },
            { icon: InfoIcon, text: "About Us", route: "/about-us" },
            {
              icon: PhoneCallbackIcon,
              text: "Contact Us",
              route: "/contact-us",
            },
          ].map((item, index) => (
            <ListItem
              key={index}
              onClick={() => handleMenuItemClick(item.route)}
              sx={{ mt: 1 }}
            >
              <item.icon sx={{ color: "#4f0336" }} />
              <Typography
                variant="body1"
                sx={{
                  fontSize: 14,
                  color: "#4F0336",
                  fontWeight: "bold",
                  paddingLeft: 2,
                }}
              >
                {item.text}
              </Typography>
            </ListItem>
          ))}
          <ListItem sx={{ mt: 1 }} onClick={() => handleAuth()}>
            {currentUser ? (
              <LogoutIcon sx={{ color: "#4f0336" }} />
            ) : (
              <LoginIcon sx={{ color: "#4f0336" }} />
            )}
            <Typography
              variant="body1"
              sx={{
                fontSize: 14,
                color: "#4F0336",
                fontWeight: "bold",
                paddingLeft: 2,
              }}
            >
              {currentUser ? "SignOut" : "SignIn"}
            </Typography>
          </ListItem>
        </List>
      </Drawer>
      {renderProfileMenu}
    </HeaderStyled>
  );
};
