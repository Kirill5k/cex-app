const index = require('redis');
const CacheService = require('./service');
const config = require('../config');
const bluebird = require('bluebird');

const client = index.createClient(config.redisPort, config.redisIp);

bluebird.promisifyAll(index.RedisClient.prototype);
bluebird.promisifyAll(index.Multi.prototype);

client.on('connect', () => console.log('Redis client connected'));
client.on('error', (err) => console.log(`Something went wrong ${err}`));

module.exports = new CacheService(client);