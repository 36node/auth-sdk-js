const faker = require("faker");

const defaultNamespaces = [
  {
    id: "/36node",
    name: "36node",
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
  },
  {
    id: "/36node/department1",
    name: "部门1",
    parent: "/36node",
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
  },
  {
    id: "/36node/department2",
    name: "部门2",
    parent: "/36node",
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
  },
];

module.exports = defaultNamespaces;
