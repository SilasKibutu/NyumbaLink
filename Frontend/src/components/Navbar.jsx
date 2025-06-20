import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav style={{ padding: "1rem", background: "#f0f0f0" }}>
      <Link to="/">Home</Link>{" | "}
      {!user && (
        <>
          <Link to="/login">Login</Link>{" | "}
          <Link to="/register">Register</Link>
        </>
      )}
      {user && user.role === "tenant" && (
        <>
          <Link to="/tenant-dashboard">Tenant Dashboard</Link>{" | "}
        </>
      )}
      {user && user.role === "landlord" && (
        <>
          <Link to="/landlord-dashboard">Landlord Dashboard</Link>{" | "}
        </>
      )}
      {user && (
        <>
          <span>Welcome, {user.name}</span>{" | "}
          <button onClick={logout}>Logout</button>
        </>
      )}
    </nav>
  );
};

export default Navbar;
