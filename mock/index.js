const users = require("./users");
const defaultNamespace = require("./namespaces");
const providers = require("./providers");
const sessions = require("./session");

const TOKEN =
  process.env["TOKEN"] ||
  "something-u-can-never-guessed-secret-password-or-key";

const createSession = (req, res, next) => {
  if (req.path === "/sessions" && req.method === "POST") {
    req.body.token = TOKEN;
  }
  next();
};

const mock = ({ namespaces = defaultNamespace }) => ({
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
  routers: [createSession],
});

module.exports = mock;
