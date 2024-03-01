import DashboardIcon from '@mui/icons-material/Dashboard';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AppSettingsAltIcon from '@mui/icons-material/AppSettingsAlt';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { UserAccount } from "../../pages/UserAccount";
import { AppSetting } from '../../pages/AppSetting';
import { Raffle } from "../../pages/Raffle";
import { Notifications } from '../../pages/Notifications/internal'; 
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { ContactUs } from '../../pages/ContactUs/internal';
import HelpIcon from '@mui/icons-material/Help';

export const SidenavData = [

  {
    name: "User Control",
    component: <UserAccount />,
    icon: <ManageAccountsIcon />,
  },
  {
    name: "App Settings",
    component: <AppSetting />,
    icon: <AppSettingsAltIcon />,
  },
  {
    name: "Raffle Winners",
    component: <Raffle />,
    icon: <EmojiEventsIcon/>,
  },
  {
    name: "Notification",
    component: <Notifications />,
    icon: <NotificationsActiveIcon/>,
  },
  {
    name: "Contact Us",
    component: <ContactUs />,
    icon: <HelpIcon/>,
  },
];
