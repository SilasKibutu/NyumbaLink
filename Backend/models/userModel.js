const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
    },
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
    },
    role: {
      type: String,
      enum: ['tenant', 'landlord'], // restrict to two roles
      default: 'tenant',
    },
  },
  {
    timestamps: true,
  }
);

// Prevent overwrite error
const User = mongoose.models.User || mongoose.model('User', userSchema);

module.exports = User;

