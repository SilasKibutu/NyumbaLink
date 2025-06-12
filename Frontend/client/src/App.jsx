import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import AddProperty from './pages/AddProperty';
import SubmitRequest from './pages/SubmitRequest';
import Login from './pages/LoginPage';
import Register from './pages/RegisterPage';
import TenantDashboard from './pages/TenantDashboard';
import LandlordDashboard from './pages/LandlordDashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/tenant-dashboard"
          element={
            <ProtectedRoute>
              <TenantDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/landlord-dashboard"
          element={
            <ProtectedRoute>
              <LandlordDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/add-property"
          element={
            <ProtectedRoute>
              <AddProperty />
            </ProtectedRoute>
          }
        />

        <Route
          path="/submit-request"
          element={
            <ProtectedRoute>
              <SubmitRequest />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
