const logger = require('../logging');

const rethrow = (error, message = '') => {
  if (message) {
    logger.error(message);
  }
  throw error;
};

module.exports = {
  rethrow
};