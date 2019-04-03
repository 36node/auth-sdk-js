const _ = require("lodash");

const sessionService = require("./services/session");

const users = require("./users");
const namespaces = require("./namespaces");
const providers = require("./providers");

/**
 * create db
 */
exports.createDB = function() {
  return {
    users,
    namespaces,
    providers,
    sessions: [],
  };
};

/**
 * bind router
 */
exports.bindRouter = function(options) {
  if (options.router) {
    sessionService.bind(options.router);
  } else {
    throw new Error("router is required in options");
  }
};
