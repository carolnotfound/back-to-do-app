require('./config/database');

const server = require('./config/server');
const routes = require('./config/routes');

routes.routes(server);
