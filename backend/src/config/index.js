const config = {
  env:  process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  cexUrl: 'https://wss2.cex.uk.webuy.io/v3/boxes'
};

try {
  const envConfig = require(`./${config.env}`);
  module.exports = Object.assign(config, envConfig);
} catch (e) {
  module.exports = config;
}