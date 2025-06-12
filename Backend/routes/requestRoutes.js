const express = require('express');
const router = express.Router();
const protect = require('../middleware/authMiddleware');
const authorizeRoles = require('../middleware/roleMiddleware');
const { createRequest, getMyRequests } = require('../controllers/requestController');

router.post('/', protect, authorizeRoles('tenant'), createRequest);
router.get('/my', protect, authorizeRoles('tenant'), getMyRequests);

module.exports = router;
