const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: {service: 'user-service'},
  exitOnError: false,
  transports: [
    new winston.transports.Console({format: winston.format.simple()})
  ]
});

logger.stream = {
  write: message => logger.info(message)
};

module.exports = logger;