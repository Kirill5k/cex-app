class ItemController {
  constructor(itemService, cacheService) {
    this.itemService = itemService;
    this.cacheService = cacheService;
  }

  async search(req, res, next) {
    const searchQuery = req.query.q;
    const cacheKey = `search/${searchQuery}`;

    this.cacheService.get(cacheKey)
      .catch(() => this.itemService.search(searchQuery).then(items => this.cacheService.set(cacheKey, items)))
      .then(items => res.json(items))
      .catch(next)
  }

  handleError(err, req, res, next) {
    console.log(err);
    res.status(err.status || 500).json(err);
  }
}

module.exports = ItemController;