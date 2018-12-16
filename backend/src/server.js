const express = require('express');
const routes = require('./routes');

const app = express();
require('./middleware')(app);

app.use('/api', routes);

app.get('*', (req, res, next) => next({status: 404, message: 'not found'}));

app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500).send(err);
});

module.exports = app;