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
      .then(responseBody => responseBody.response.data ? responseBody.response.data.boxes : [])
      .then(boxes => this.itemMapper.mapItems(boxes))
      .catch(({response}) => rethrow({status: response.status, message: response.data.response}, `error from cexclient: ${response.data}`));
  }
}

module.exports = CexClient;