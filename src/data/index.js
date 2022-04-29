const messages = [
  {
    content: 'This is the content 1',
    isRead: false,
    receiverId: 1,
    senderId: 2,
    subject: 'Subject 1',
  },
  {
    content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, aspernatur? Voluptate, voluptas alias ratione quaerat
neque eos ab animi, totam, atque laborum tempora id exercitationem.`,
    isRead: true,
    receiverId: 1,
    senderId: 2,
    subject: 'Subject 2',
  },
  {
    content: 'This is the content 3',
    isRead: true,
    receiverId: 1,
    senderId: 3,
    subject: 'Subject',
  },
  {
    content: 'This is the content 4',
    isRead: true,
    receiverId: 2,
    senderId: 1,
    subject: 'Subject 3',
  },
  {
    content: 'This is the content 5',
    isRead: true,
    receiverId: 3,
    senderId: 1,
    subject: 'Subject 4',
  },
];

module.exports = { messages };
