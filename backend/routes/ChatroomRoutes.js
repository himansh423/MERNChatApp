const express = require('express');
const { create, enter, getChatroomDetails,deleteChatroom } = require('../controllers/ChatroomAuthController');

const router = express.Router();

router.post('/create', create);
router.post('/enter', enter);
router.get("/create/:idofroom", getChatroomDetails);
router.delete("/create/:idofroom", deleteChatroom);

module.exports = router;
