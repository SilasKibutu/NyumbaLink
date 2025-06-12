const Property = require('../models/property');

const createProperty = async (req, res) => {
  const { name, location, rent } = req.body;

  if (!name || !location || !rent) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const property = new Property({
    name,
    location,
    rent,
    landlord: req.user._id, // comes from auth middleware
  });

  await property.save();
  res.status(201).json(property);
};

const getMyProperties = async (req, res) => {
  const properties = await Property.find({ landlord: req.user._id });
  res.json(properties);
};

module.exports = { createProperty, getMyProperties };
