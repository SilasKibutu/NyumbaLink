// backend/server/controllers/maintenanceController.js

// Example: pretend you have a Maintenance model
// const Maintenance = require('../models/Maintenance');

const createMaintenanceRequest = async (req, res) => {
  try {
    const request = {
      title: req.body.title,
      description: req.body.description,
      user: req.user.id,
    };

    // Simulated save — replace with actual DB call
    // const savedRequest = await Maintenance.create(request);

    res.status(201).json({ message: 'Request created', request });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const getMyRequests = async (req, res) => {
  try {
    // Simulated query — replace with actual DB logic
    // const myRequests = await Maintenance.find({ user: req.user.id });

    res.status(200).json({ message: 'Here are your maintenance requests', requests: [] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// ✅ Export functions **after they're defined**
module.exports = {
  createMaintenanceRequest,
  getMyRequests,
};
