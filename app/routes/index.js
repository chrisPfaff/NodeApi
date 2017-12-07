const nodeRoutes = require('./node_routes');

module.exports = (app, db) => {
  nodeRoutes(app, db);
}
