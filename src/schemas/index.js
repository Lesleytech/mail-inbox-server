const { Schema } = require('mongoose');

const MessageSchema = new Schema({
  _id: String,
  subject: String,
  content: String,
  isRead: Boolean,
  senderId: Number,
  receiverId: Number,
  timestamp: { type: Date, default: Date.now() },
});

module.exports = { MessageSchema };
