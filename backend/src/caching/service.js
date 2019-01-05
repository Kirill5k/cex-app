const {rethrow} = require('../utils/common');

class CacheService {
  constructor(redisClient) {
    this.redisClient = redisClient;
  }

  set(key, data, expiryTime = 3600) {
    this.redisClient.setex(key, expiryTime, JSON.stringify(data));
    return data;
  }

  get(key) {
    return this.redisClient.getAsync(key)
      .catch(err => rethrow(err, `error getting data from cache ${err}`))
      .then(data => data ? JSON.parse(data) : rethrow(new Error('item not found')));
  }
}

module.exports = CacheService;