const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const logger = require('../logging');
const userIdExtractor = require('./userIdExtractor');

module.exports = (app) => {
  app.use(morgan('combined', {stream: logger.stream}));
  app.use(cookieParser());
  app.use(userIdExtractor);
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
};