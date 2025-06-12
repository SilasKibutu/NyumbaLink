// backend/server/server.js

const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');

// Load environment variables
dotenv.config();

// Initialize app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Parse JSON requests

// Routes
const authRoutes = require('./routes/userRoutes');
const maintenanceRoutes = require('./routes/maintenanceRoutes'); // Maintenance routes

app.use('/api/auth', authRoutes);
app.use('/api/maintenance', maintenanceRoutes); // Use maintenance routes

// Root route (optional)
app.get('/', (req, res) => {
  res.send('NyumbaLink API is running...');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
