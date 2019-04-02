const express = require("express");
const TOKEN =
  process.env["TOKEN"] ||
  "something-u-can-never-guessed-secret-password-or-key";

class Service {
  bind(router) {
    this.router = express.Router();
    this.db = router.db;

    router.use("/sessions", this.router);

    this.router.route("/").post(this.create.bind(this));
    this.router.route("/:id").get(this.get.bind(this));
  }

  create(req, res) {
    const session = res.locals.data;

    session.token = TOKEN;
    session.user = this.db.get("users").value()[0];
  }

  get(req, res) {
    const id = req.params.id;
    const session = this.db
      .get("sessions")
      .getById(id)
      .value();
    if (session) {
      session.token = TOKEN;
      session.user = this.db.get("users").value()[0];
      res.locals.data = session;
    } else {
      return (res.locals.data = null);
    }
  }
}

module.exports = new Service();
