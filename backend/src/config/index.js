const config = {
  env:  process.env.NODE_ENV || config.dev,
  port: process.env.PORT || 3000,
  cexUrl: 'https://wss2.cex.uk.webuy.io/v3/boxes'
};

module.exports = Object.assign(config, require(`./${config.env}`));