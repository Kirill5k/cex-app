class ItemService {
  constructor(client) {
    this.client = client;
  }

  search(queryString) {
    return this.client.search(queryString);
  }
}

module.exports = ItemService;