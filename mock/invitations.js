const faker = require("faker");
const _ = require("lodash");

module.exports = _.range(10).map(() => ({
  id: faker.random.uuid(),
}));
