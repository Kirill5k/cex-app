const debug = require('debug')('app');
const app = require('./src/server');
const config = require('./src/config');


app.listen(config.port, () => debug(`listening on port ${config.port}`));
