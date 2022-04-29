const router = require('express').Router();

const authMiddleWare = require('../middlewares/auth');
const { Message } = require('../models');

router.use(authMiddleWare);

router.get('/', async (req, res) => {
  const { id } = req.user;

  const messages = await Message.find({ receiverId: id });

  res.send(messages);
});

module.exports = router;
