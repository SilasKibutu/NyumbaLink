const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

// ✅ Middleware function
const protect = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Not authorized, no token' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decoded.id).select('-password');

    next(); // ✅ Move to next middleware or route handler
  } catch (err) {
    console.error(err);
    res.status(401).json({ message: 'Token failed' });
  }
};

// ✅ Export the function directly (not as an object)
module.exports = protect;

