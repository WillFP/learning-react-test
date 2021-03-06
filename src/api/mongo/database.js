const mongoose = require('mongoose');
require('dotenv').config();

const database = mongoose.connect(`${process.env.MONGO_PROD}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

module.exports = database;
