const faker = require("faker");
const _ = require("lodash");
const namespaces = require("./namespaces");

const NAME = ["PASSWORD", "PHONE", "WX", "WXAPP", "WXQY", "GITHUB"];

module.exports = _.range(20).map(x => {
  return {
    id: faker.random.uuid(),
    appId: faker.random.uuid(),
    appSecret: faker.random.uuid(),
    name: faker.random.arrayElement(NAME),
    ns: faker.random.arrayElement(namespaces).id,
    updatedAt: faker.date.recent(),
  };
});
