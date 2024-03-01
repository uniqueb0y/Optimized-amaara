import {
  styled,
  useTheme,
  Theme,
  CSSObject,
  Box,
  Drawer as MuiDrawer,
  AppBarProps as MuiAppBarProps,
  List,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useState } from "react";
import { SidenavData } from "./data";
import { useAuth } from "../../contexts/AuthContext";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;
const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  color: "#4F0336",
  backgroundColor: "#f2eee5",
});
const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  color: "#4F0336",
  backgroundColor: "#f2eee5",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));
interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);
export function SideNav() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState(SidenavData[0].component);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleAuth = async () => {
    try {
      if (currentUser) {
        await logout();
        localStorage.removeItem("accessToken");
        window.location.reload();
      } else {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box sx={{ display: "flex", overflowX: 'hidden' }}>
      <Drawer variant="permanent" open={open} >
        <DrawerHeader>
          <Box
            sx={{ display: "flex", justifyContent: "center", padding: "24px" }}
          >
            <img
              src={"/logo.svg"}
              alt="Amaara Dashboard"
              width={120}
            />
            <IconButton onClick={() => setOpen(!open)} style={{ paddingRight: 0 }}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </Box>
        </DrawerHeader>
        <List>
          {SidenavData.map((item: any, index: number) => {
            return (
              <ListItem
                  key={index}
                  disablePadding
                  sx={{
                    display: "block",
                    backgroundColor:
                      selectedIndex === index ? "#4F0336" : "#f2eee5",
                  }}
                  onClick={() => {
                    setSelectedComponent(item.component);
                    setSelectedIndex(index);
                  }}
                >
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                      color: selectedIndex === index ? "white" : "#4F0336",
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                        color: selectedIndex === index ? "white" : "#4F0336",
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.name}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </ListItem>
            );
          })}
           <ListItem
                  key={'logout'}
                  disablePadding
                  sx={{
                    display: "block",
                  }}
                  onClick={() => {
                    handleAuth();
                  }}
                >
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <LogoutIcon sx={{ color: "#4f0336" }} />
                    </ListItemIcon>
                    <ListItemText
                      primary={'SignOut'}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </ListItem>
        </List>
      </Drawer>
      <Box>{selectedComponent}</Box>
      {/* {currentUser?.isAdmin ||
      currentUser?.isSuperAdmin ||
      currentUser?.isManager ? (
        <>{selectedComponent}</>
      ) : (
        <Box
          sx={{
            height: "100vh",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            display: 'flex',
            textAlign: 'center'
          }}
        >
          <Typography fontSize={24} color={"#4F0336"}>
            You do not have permission to access this resource. Please contact
            administration.
          </Typography>
        </Box>
      )} */}
    </Box>
  );
}
