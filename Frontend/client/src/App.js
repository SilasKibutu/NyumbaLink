import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import TenantDashboard from "./pages/tenant/TenantDashboard";
import LandlordDashboard from "./pages/landlord/LandlordDashboard";
import NotFound from "./pages/NotFound";

function App() {
  const { user } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    return user ? children : <Navigate to="/login" />;
  };

  const RoleProtectedRoute = ({ children, role }) => {
    return user && user.role === role ? children : <Navigate to="/" />;
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
        <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />

        <Route
          path="/tenant-dashboard"
          element={
            <ProtectedRoute>
              <RoleProtectedRoute role="tenant">
                <TenantDashboard />
              </RoleProtectedRoute>
            </ProtectedRoute>
          }
        />

        <Route
          path="/landlord-dashboard"
          element={
            <ProtectedRoute>
              <RoleProtectedRoute role="landlord">
                <LandlordDashboard />
              </RoleProtectedRoute>
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

