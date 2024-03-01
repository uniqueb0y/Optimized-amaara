import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ThemeProvider } from "@mui/system";
import { createTheme, CssBaseline } from "@mui/material";
import { AuthProvider } from "./contexts/AuthContext";
import { Login } from "./pages/Login";
import { PageNotFound } from "./pages/404";
import { ProtectedRoute } from "./pages/ProtectedRoute";

const theme = createTheme();

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/" element={<ProtectedRoute />} />
            <Route path="/login" element={<Login />} />
            <Route path="/404" element={<PageNotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
