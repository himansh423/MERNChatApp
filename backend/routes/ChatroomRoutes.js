const express = require('express');
const { create, enter } = require('../controllers/ChatroomAuthController');
const verifyToken = require('../middleware/ChatAuthMiddleware');

const router = express.Router();

router.post('/create', verifyToken, create);
router.post('/enter', verifyToken, enter);

module.exports = router;
