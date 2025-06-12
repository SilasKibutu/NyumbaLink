import { useNavigate } from 'react-router-dom';

export default function ReportIssuePage() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Issue submitted!");
    navigate('/tenant-dashboard');
  };

  return (
    <div>
      <h1>Report Maintenance Issue</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Issue Title" required /><br />
        <textarea placeholder="Describe the issue..." required></textarea><br />
        <button type="submit">Submit Issue</button>
      </form>
    </div>
  );
}
