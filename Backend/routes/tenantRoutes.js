const protect = require('../middleware/authMiddleware');

router.get('/profile', protect, (req, res) => {
  res.json({ message: `Welcome back, user ${req.user.id}` });
});
