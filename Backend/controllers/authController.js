const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// ✅ Token generator
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });
};

// ✅ REGISTER USER
const registerUser = async (req, res) => {
  const { name, email, password, role } = req.body;

  if (!name || !email || !password || !role) {
    return res.status(400).json({ message: 'Please fill all fields' });
  }

  const userExists = await User.findOne({ email });
  if (userExists) return res.status(400).json({ message: 'User already exists' });

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    role
  });

  const token = generateToken(user._id);

  res.status(201).json({
    _id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
    token,
  });
};

// ✅ LOGIN USER
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    // 🧪 Debugging logs
    console.log('Login attempt:', email);
    console.log('Found user:', user);

    if (!user) return res.status(401).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    console.log('Password match:', isMatch);

    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    const token = generateToken(user._id);

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token,
    });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

// ✅ Export both
module.exports = {
  registerUser,
  loginUser,
};
