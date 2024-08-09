const express = require('express');
const { create, enter } = require('../controllers/ChatroomAuthController');
const verifyToken = require('../middleware/ChatAuthMiddleware');

const router = express.Router();

router.post('/create', create);
router.post('/enter', enter);

module.exports = router;
