const ChatRoom = require('../models/ChatRoom');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.create = async (req, res) => {
  const { ChatroomName, ChatroomId, password,participants } = req.body;

  try {
    const existingChatRoom = await ChatRoom.findOne({ ChatroomId });
    if (existingChatRoom) {
      return res.status(400).json({ message: 'CahtRoom already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newChatroomCreated = new ChatRoom({
      ChatroomName,
      ChatroomId,
      password: hashedPassword,
      participants,
    });

    await newChatroomCreated.save();

    res.status(201).json({ message: 'Chatroom Created successfully' });
  } catch (error) {
    console.error(error); 
    res.status(500).json({ message: 'Server error' });
  }
};


exports.enter = async (req, res) => {
  const { ChatroomId, password } = req.body;

  try {
    const chatRoom = await ChatRoom.findOne({ ChatroomId });
    if (!chatRoom) {
      return res.status(400).json({ message: 'Chatroom not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, chatRoom.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: chatRoom._id }, process.env.CHATROOM_SECRET_KEY, { expiresIn: '2h' });

    // Send the token back to the client
    res.json({ token, chatRoom });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
