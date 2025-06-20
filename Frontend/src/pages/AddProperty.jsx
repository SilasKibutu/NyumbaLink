import React, { useState } from 'react';
import axios from 'axios';

export default function AddProperty() {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    rent: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post('/api/properties', formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      alert('Property added successfully!');
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to add property');
    }
  };

  return (
    <div>
      <h2>Add Property</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Property Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          required
        />
        <input
          name="rent"
          type="number"
          placeholder="Monthly Rent"
          value={formData.rent}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Property</button>
      </form>
    </div>
  );
}
