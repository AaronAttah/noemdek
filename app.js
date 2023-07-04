const express = require("express");
const morgan = require("morgan");
const winston = require("winston");

const {notFound, errorHandler}= require("./middleware/errorHandler")

const app = express();
require("dotenv").config()
app.use(morgan("tiny"));

require("./startup/logging")();
require("./startup/cors.js")(app);
require("./startup/routes")(app);
require("./startup/db")();

const port = process.env.PORT;



/**
 * errorHandler
 */
app.use(notFound);
app.use(errorHandler);

const server = app.listen(port, () =>
  winston.info(`Listening on port ${port}...`)
);

module.exports = server;