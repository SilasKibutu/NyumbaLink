const express = require('express');
const router = express.Router();
const protect = require('../middleware/authMiddleware');
const authorizeRoles = require('../middleware/roleMiddleware');
const {
  createProperty,
  getMyProperties
} = require('../controllers/propertyController');

// Create property - Landlord only
router.post('/', protect, authorizeRoles('landlord'), createProperty);

// Get all properties for logged-in landlord
router.get('/my', protect, authorizeRoles('landlord'), getMyProperties);

module.exports = router;

