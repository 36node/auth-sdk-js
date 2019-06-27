const users = require("./users");
const defaultNamespace = require("./namespaces");
const providers = require("./providers");
const genSession = require("./session");

const session = genSession(users[0].id);
const createSession = (req, res, next) => {
  if (req.path === "/sessions" && req.method === "POST") {
    req.body = { ...session };
    delete req.body.id;
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
    sessions: [session],
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
