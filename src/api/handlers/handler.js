const database = require('../database');
const Message = require('../Message');
const commandRegistry = require('./commandRegistry');

database.then(() => {
  process.stdout.write('Loaded!\n');
});

const getMessages = async (filter) => Message.find(filter);

const handleMessage = (message, sender) => {
  let executed = false;

  commandRegistry.handlers.forEach((handler) => {
    if (handler.name === message) {
      handler.execute(sender);
      executed = true;
    }
  });
  return executed;
};

const sendMessage = async (message, sender) => {
  await new Message({
    message,
    sender,
  }).save();
};

module.exports = {
  getMessages,
  handleMessage,
  sendMessage,
};

require('./defaultCommands');
