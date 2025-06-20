import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const TenantDashboard = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-blue-50 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">🏠 Tenant Dashboard</h2>
          <button
            onClick={logout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>

        <p className="text-gray-700 mb-4">
          Welcome <span className="font-bold">{user?.name}</span>! You're logged in as a{" "}
          <span className="text-blue-600 font-semibold">{user?.role}</span>.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="p-4 bg-blue-100 rounded shadow">
            <h3 className="font-semibold text-lg">🛠 Report an Issue</h3>
            <p className="text-sm text-gray-600">Easily report a problem to your landlord.</p>
          </div>

          <div className="p-4 bg-blue-100 rounded shadow">
            <h3 className="font-semibold text-lg">📃 View Rental Agreements</h3>
            <p className="text-sm text-gray-600">Access your current lease documents.</p>
          </div>

          <div className="p-4 bg-blue-100 rounded shadow">
            <h3 className="font-semibold text-lg">📅 Track Maintenance</h3>
            <p className="text-sm text-gray-600">See status of reported maintenance tasks.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenantDashboard;


