import { Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const ProtectedRoutes = ({ children, role }) => {
  const { user } = useContext(AuthContext);

  // Not logged in
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // If a role is required and user's role doesn't match
  if (role && user.role !== role) {
    return <Navigate to="/" replace />;
  }

  // Authorized
  return children;
};

export default ProtectedRoutes;
