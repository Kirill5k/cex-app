class ItemService {
  constructor(cexClient) {
    this.cexClient = cexClient;
  }

  search(queryString) {
    return this.cexClient.search(queryString);
  }
}

module.exports = ItemService;