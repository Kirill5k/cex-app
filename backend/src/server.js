const express = require('express');
const routes = require('./routes');
const setupMiddleware = require('./middleware');
const errorHandler = require('./middleware/errorHandler');

const app = express();
setupMiddleware(app);

app.use('/api', routes);

app.get('*', (req, res, next) => next({status: 404, message: 'not found'}));

app.use(errorHandler);

module.exports = app;