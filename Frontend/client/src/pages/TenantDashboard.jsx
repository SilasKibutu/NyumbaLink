import { useNavigate } from 'react-router-dom';

export default function TenantDashboard() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Tenant Dashboard</h1>
      <button onClick={() => navigate('/report-issue')}>Report a Maintenance Issue</button>
      <p>List of reported issues will appear here.</p>
    </div>
  );
}
