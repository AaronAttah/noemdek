const winston = require('winston');
const mongoose = require('mongoose');
require('dotenv').config();

const db = process.env.MONGODB_URI

module.exports = function() {
    mongoose.connect(db)
      .then(() => winston.info(`DB Connected Successfully!...`));
  }