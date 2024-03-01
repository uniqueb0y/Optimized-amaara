import { useState, useEffect } from "react";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import "./App.css";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { ContactUs } from "./pages/ContactUs";
import { commonTextFieldStyle } from "./styles/text-field";
import { PageNotFound } from "./pages/404";
import { Loading } from "./components/loading-screen";
import { AboutUs } from "./pages/AboutUs";
import { Scheme } from "./pages/Scheme";
import { TnC } from "./pages/T&C";
import { AuthProvider } from "./contexts/AuthContext";
import { PwaPrompt } from "react-ios-pwa-prompt-ts";
import { OpenAccount } from "./pages/OpenAccount";
import { ProfilePage } from "./pages/Profile";
import { NotificationPage } from "./pages/Notification";
import { AccountSetting } from "./pages/AccountSetting";
import { Raffle } from "./pages/Raffle";

function App() {
  const theme = createTheme({
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            ...commonTextFieldStyle,
          },
        },
      },
    },
    palette: {
      primary: {
        main: "#4F0336",
      },
      secondary: {
        main: "#F2EEE5",
      },
    },
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 0); // Adjust the timeout as needed

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <AuthProvider>
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {loading && <Loading />}
          {!loading && (
            <>
              <PwaPrompt promptOnVisit={1} copyTitle="Install Amaara Seetu App" timesToShow={1} copyClosePrompt="Close" permanentlyHideOnDismiss={true}/>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/404" element={<PageNotFound />} />
                <Route path="/login" element={<Login />} />
                <Route path="/scheme" element={<Scheme />} />
                <Route path="/raffle" element={<Raffle />} />
                <Route path="/open-account" element={<OpenAccount />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/t&c" element={<TnC />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/notifications" element={<NotificationPage />} />
                <Route path="/my-account" element={<AccountSetting />} />
                {/* Introduce new routes above this */}
                <Route path="*" element={<Navigate to="/404" replace />} />
              </Routes>
              <Footer />
            </>
          )}
        </ThemeProvider>
      </Router>
    </AuthProvider>
  );
}

export default App;
