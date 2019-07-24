const moment = require("moment");
const faker = require("faker");

module.exports = user => ({
  active: true,
  client: "app",
  createdAt: moment().toISOString(),
  device: "iphone x",
  expiredAt: moment()
    .add(7, "days")
    .toISOString(),
  id: faker.random.uuid(),
  login: user.email,
  method: "PASSWORD",
  ns: user.ns,
  profile: {
    ...user,
  },
  provider: "5cb9a4edc48ad400120d28a7",
  roles: [{ name: "ADMIN", ns: "/36node" }],
  token: "xxxxxxx",
  updatedAt: moment().toISOString(),
  user: user.id,
});
