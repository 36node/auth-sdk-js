const jsonServer = require("json-server");
const express = require("express");
const _ = require("lodash");

const sessionService = require("./services/session");

const users = require("./users");
const namespaces = require("./namespaces");
const providers = require("./providers");

const defaultOptions = {
  placeholder: "PLACEHOLDER",
};

module.exports = function(options = defaultOptions) {
  const opts = _.merge({}, defaultOptions, options);
  /**
   * mock data
   */
  const db = {
    users,
    namespaces,
    providers,
    sessions: [],
  };

  /**
   * router
   */
  const router = jsonServer.router(db, { foreignKeySuffix: "" });
  const defaultRender = router.render;

  const extendedRouter = express.Router();
  extendedRouter.db = router.db;

  sessionService.bind(extendedRouter);

  router.render = (req, res) => {
    extendedRouter(req, res, err => {
      if (err) {
        console.error(err);
        res.status(500).send(err.stack);
      }
    });

    if (res.locals.data === opts.placeholder) {
      res.locals.data = null;
    }

    if (!res.headersSent) {
      if (!res.locals.data) {
        res.status(404);
        res.locals.data = {};
      }

      defaultRender(req, res);
    }
  };

  return {
    db,
    router,
  };
};
