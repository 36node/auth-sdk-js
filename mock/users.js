const faker = require("faker");
const _ = require("lodash");

function cookUsers(count = 100, namespaces = []) {
  const rootId = faker.random.uuid();
  const rootUser = {
    id: rootId,
    user: rootId,
    name: "root",
    username: "root",
    email: "root@36node.com",
    ns: ["/"],
    active: true,
    createdAt: faker.date.recent(),
    updateAt: faker.date.recent(),
    gender: faker.random.arrayElement(["UNKOWN", "MALE", "FEMALE", "OTHER"]),
    roles: [
      {
        ns: "/",
        name: "ADMIN",
      },
    ],
  };

  const randomUsers = _.range(count - 1).map(x => {
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

  return [rootUser, ...randomUsers];
}

module.exports = cookUsers;
