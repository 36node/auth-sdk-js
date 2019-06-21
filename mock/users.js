const faker = require("faker");
const _ = require("lodash");
const namespaces = require("./namespaces");

module.exports = _.range(1000).map(x => {
  const id = faker.random.uuid();
  const nsId = faker.random.arrayElement(namespaces).id;
  return {
    id,
    user: id,
    name: faker.name.findName(),
    username: faker.name.findName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
    ns: [nsId],
    active: faker.random.boolean(),
    createdAt: faker.date.recent(),
    updateAt: faker.date.recent(),
    gender: faker.random.arrayElement(["UNKOWN", "MALE", "FEMALE", "OTHER"]),
    roles: [
      {
        ns: nsId,
        name: faker.random.arrayElement([
          "ADMIN",
          "MONITOR",
          "CATLMONITOR",
          "COMPANYMONITOR",
          "OPERATIONMONITOR",
        ]),
      },
    ],
  };
});
