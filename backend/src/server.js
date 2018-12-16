const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const debug = require('debug')('app');
const {userIdExtractor} = require('./users/tracking');
const itemsRouter = require('./items');

const port = process.env.PORT || 7000;

const app = express();
app.use(morgan('tiny'));
app.use(cookieParser());
app.use(userIdExtractor);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({message: 'hello world', userId: req.userId});
});

app.use('/api/items', itemsRouter);

app.listen(port, () => debug(`listening on port ${port}`));
