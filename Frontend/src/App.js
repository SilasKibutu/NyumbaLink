import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import TenantDashboard from './pages/tenant/TenantDashboard';
import LandlordDashboard from './pages/landlord/LandlordDashboard';
import ReportIssuePage from './pages/ReportIssuePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/tenant-dashboard" element={<TenantDashboard />} />
        <Route path="/landlord-dashboard" element={<LandlordDashboard />} />
        <Route path="/report-issue" element={<ReportIssuePage />} />
      </Routes>
    </Router>
  );
}

export default App;
