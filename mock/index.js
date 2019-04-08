const users = require("./users");
const namespaces = require("./namespaces");
const providers = require("./providers");
const sessions = require("./session").db;
const sessionRouter = require("./session").router;

module.exports = {
  /**
   * mock data
   */
  db: {
    users,
    namespaces,
    providers,
    sessions,
  },

  /**
   * rewrites
   */
  rewrites: {},

  /**
   * routers
   */
  routers: [sessionRouter],
};
