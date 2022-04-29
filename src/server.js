const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const { messages } = require('./data');
const { Message } = require('./models');

if (process.env.NODE_ENV === 'development') {
  require('dotenv').config();
}

const app = express();

mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(async () => {
    console.log('Connected to db');

    const dbMsges = await Message.find({});

    // Populate the database with messages
    if (dbMsges.length === 0) {
      Message.insertMany(messages);
    }
  })
  .catch((err) => console.log('Error connecting to db: ', err));

app.use('/api/messages', require('./routes/messages'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
