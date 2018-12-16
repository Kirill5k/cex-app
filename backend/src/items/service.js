const cexClient = require('./cexClient');

class Service {
  search(queryString) {
    return cexClient.search(queryString);
  }
}

module.exports = new Service();