const axios = require('axios');
const {rethrow} = require('../utils/common');

class CexClient {
  constructor(url, itemMapper) {
    this.url = url;
    this.itemMapper = itemMapper;
  }

  search(queryString) {
    return axios.get(`${this.url}`, {params: {q: queryString}})
      .then(response => response.data)
      .then(responseBody => this.itemMapper.mapItems(responseBody.response.data.boxes))
      .catch(({response}) => rethrow({status: response.status, message: response.data.response.error.internal_message}));
  }
}

module.exports = CexClient;