const itemService = require('./service');

class ItemController {
  search(req, res, next) {
    itemService.search(req.query.q)
      .then(items => res.json(items))
      .catch(next);
  }

  handleError(err, req, res, next) {
    res.status(err.status || 500).json(err);
  }
}

module.exports = new ItemController();