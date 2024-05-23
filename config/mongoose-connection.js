const mongoose = require('mongoose');
const dbgr = require('debug')("development:mongoose");
const config = require('config');

mongoose
  .connect(`${config.get("MONGODB_URI")}/backend-project`)
  .then(() => {
     dbgr("Database connected successfully");
  })
  .catch(err => {
    dbgr("Database connection error:", err);
  });

module.exports = mongoose.connection;