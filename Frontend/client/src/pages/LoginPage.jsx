import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      alert('Login successful');

      // Redirect based on user role if available
      const userRole = res.data.role || 'tenant'; // fallback role
      if (userRole === 'landlord') {
        navigate('/landlord-dashboard');
      } else {
        navigate('/tenant-dashboard');
      }

    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={login}>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
          required
        /><br />

        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
          required
        /><br />

        <button type="submit">Login</button>
      </form>

      <p>
        Don't have an account?{' '}
        <button onClick={() => navigate('/register')}>
          Register
        </button>
      </p>
    </div>
  );
}
