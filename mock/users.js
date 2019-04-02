const faker = require("faker");
const _ = require("lodash");
const namespaces = require("./namespaces");

module.exports = _.range(1000).map(x => {
  const id = faker.random.uuid();
  return {
    id,
    user: id,
    name: faker.name.findName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
    ns: [faker.random.arrayElement(namespaces).id],
  };
});
