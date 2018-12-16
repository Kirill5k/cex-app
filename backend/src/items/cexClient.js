const axios = require('axios');
const itemMapper = require('./mapper');
const {rethrow} = require('../utils/common');

class CexClient {
  constructor(url) {
    this.url = url;
  }

  search(queryString) {
    console.log(queryString);
    return axios.get(`${this.url}`, {params: {q: queryString}})
      .then(response => response.data)
      .then(responseBody => itemMapper.mapItems(responseBody.response.data.boxes))
      .catch(({response}) => rethrow({status: response.status, message: response.data.response.error.internal_message}));
  }
}

module.exports = new CexClient(process.env.CEX_URL);