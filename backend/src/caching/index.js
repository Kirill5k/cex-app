const index = require('redis');
const CacheService = require('./service');
const config = require('../config');
const logger = require('../logging');
const bluebird = require('bluebird');

const client = index.createClient(config.redisPort, config.redisIp);

bluebird.promisifyAll(index.RedisClient.prototype);
bluebird.promisifyAll(index.Multi.prototype);

client.on('connect', () => logger.info('redis client connected'));
client.on('error', (err) => logger.error(`unable to connect to redis ${err}`));

module.exports = new CacheService(client);