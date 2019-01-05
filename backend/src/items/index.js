const express = require('express');
const config = require('../config');
const cacheService = require('../caching');
const ItemMapper = require('./mapper');
const CexClient = require('./client');
const ItemService = require('./service');
const ItemController = require('./controller');

const cexUrl = config.cexUrl;
const itemMapper = new ItemMapper();
const cexClient = new CexClient(cexUrl, itemMapper);
const itemService = new ItemService(cexClient);
const itemController = new ItemController(itemService, cacheService);

const router = express.Router();

router.get('/', (...args) => itemController.search(...args));

router.use(itemController.handleError);

module.exports = router;