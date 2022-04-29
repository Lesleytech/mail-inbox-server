const { model } = require('mongoose');

const { MessageSchema } = require('../schemas');

const Message = model('Message', MessageSchema);

module.exports = { Message };
