const express = require('express');
const router = express.Router();
const protect = require('../middleware/authMiddleware');
const { registerUser } = require('../controllers/userController'); // ✅ Import the controller

// Protected route
router.get('/profile', protect, (req, res) => {
  res.json({
    message: `Hello ${req.user.id}, this is your protected profile.`,
    user: req.user,
  });
});

// Public route for user registration
router.post('/register', registerUser); // ✅ Add the route

module.exports = router;
