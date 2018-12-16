const express = require('express');
const ItemMapper = require('./mapper');
const CexClient = require('./cexClient');
const ItemService = require('./service');
const ItemController = require('./controller');

const cexUrl = process.env.CEX_URL;
const itemMapper = new ItemMapper();
const cexClient = new CexClient(cexUrl, itemMapper);
const itemService = new ItemService(cexClient);
const itemController = new ItemController(itemService);

const router = express.Router();

router.get('/search', (...args) => itemController.search(...args));

router.use(itemController.handleError);

module.exports = router;