// backend/server/routes/maintenanceRoutes.js

const express = require('express');
const router = express.Router();

const {
  createMaintenanceRequest,
  getMyRequests,
} = require('../controllers/maintenanceController');

const protect  = require('../middleware/authMiddleware');

// 🔧 Add this line to handle POST request for creating maintenance
router.post('/request', protect, createMaintenanceRequest);

// Optional: route to get current user's maintenance requests
router.get('/my-requests', protect, getMyRequests);

module.exports = router;


