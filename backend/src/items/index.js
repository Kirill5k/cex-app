const express = require('express');
const itemController = require('./controller');

const router = express.Router();

router.get('/search', itemController.search);

router.use(itemController.handleError);

module.exports = router;