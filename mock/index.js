const cookUsers = require("./users");
const defaultNamespace = require("./namespaces");
const providers = require("./providers");
const genSession = require("./session");

const mock = ({ namespaces = defaultNamespace, users }) => {
  if (!users) {
    users = cookUsers(100, namespaces);
  }

  const createSession = (req, res, next) => {
    if (req.path === "/sessions" && req.method === "POST") {
      const { username } = req.body;

      if (!username) {
        return res.status(400).send("Username should in body");
      }

      const user = users.find(
        u =>
          u.phone === username ||
          u.email === username ||
          u.username === username
      );

      if (!user) {
        return res.status(400).send("Username or password not exist");
      }

      const session = genSession(user);

      req.body = { ...session };
      delete req.body.id;
    }
    next();
  };

  return {
    /**
     * mock data
     */
    db: {
      users,
      namespaces,
      providers,
      sessions: [],
    },

    /**
     * rewrites
     */
    rewrites: {},

    /**
     * routers
     */
    routers: [createSession],
  };
};

module.exports = mock;
