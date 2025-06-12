import { useState } from 'react';
import axios from 'axios';

const SubmitRequest = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    urgency: 'low',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post(
        'http://localhost:5000/api/maintenance',
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert('Request submitted successfully!');
      setFormData({ title: '', description: '', urgency: 'low' });
    } catch (err) {
      console.error(err);
      alert('Failed to submit maintenance request.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Submit Maintenance Request</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Issue title"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <textarea
          name="description"
          placeholder="Describe the issue..."
          value={formData.description}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <select
          name="urgency"
          value={formData.urgency}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SubmitRequest;
