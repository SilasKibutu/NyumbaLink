import axios from 'axios';
import { useState } from 'react';

export default function ProfileCheck() {
  const [message, setMessage] = useState('');

  const getProfile = async () => {
    try {
      const token = localStorage.getItem('token');

      const res = await axios.get('/api/users/profile', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || 'Unauthorized');
    }
  };

  return (
    <div>
      <button onClick={getProfile}>Check Protected Route</button>
      <p>{message}</p>
    </div>
  );
}
