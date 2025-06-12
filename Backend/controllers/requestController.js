const Request = require('../models/Request');

const createRequest = async (req, res) => {
  const { title, description, propertyId } = req.body;

  if (!title || !description || !propertyId) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const request = await Request.create({
    title,
    description,
    property: propertyId,
    tenant: req.user._id,
  });

  res.status(201).json(request);
};

const getMyRequests = async (req, res) => {
  const requests = await Request.find({ tenant: req.user._id }).populate('property');
  res.json(requests);
};

module.exports = { createRequest, getMyRequests };
