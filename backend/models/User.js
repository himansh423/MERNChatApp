const mongoose = require('mongoose');


const messagesSchema = new mongoose.Schema({
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, expires: 18000 }
})

const chatroomSchema = new mongoose.Schema({
  chatroomName: {
    type: String,
    required: true,
  },
  chatRoomID: {
    type: String,
    required: true,
  },
  chatroomPassword:{
    type:String,
    required:true,
    unique:true,
  },
  chatroomMessages:[messagesSchema]
});

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  userChatrooms: {
    type: [chatroomSchema],
    default: []
  }
});

module.exports = mongoose.model('User', userSchema);
