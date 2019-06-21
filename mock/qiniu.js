const faker = require("faker");

module.exports = [
  {
    id: "content",
    expires: 7200,
    expiredAt: faker.date.future(),
    token: "a fake qiniu upload token",
  },
];
