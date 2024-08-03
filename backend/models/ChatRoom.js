const mongoose = require("mongoose");

const ChatroomSchema = mongoose.Schema({
  ChatroomName: {
    type: String,
    required: true,
  },
  ChatroomId: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  participants: {
    participant1: {
      type: String,
      required: true,
    },
    participant2: {
      type: String,
      required: true,
    },
  },
});


module.exports = mongoose.model('Chatroom', ChatroomSchema);