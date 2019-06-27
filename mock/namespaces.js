const faker = require("faker");

const defaultNamespaces = [
  {
    id: "/bus",
    name: "车辆监控平台",
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
  },
  {
    id: "/bus/company1",
    name: "公司1",
    parent: "/bus",
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
  },
  {
    id: "/bus/company1/sub1",
    name: "子公司1",
    parent: "/bus/company1",
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
  },
  {
    id: "/bus/company1/sub2",
    name: "子公司2",
    parent: "/bus/company1",
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
  },
  {
    id: "/bus/company2",
    name: "公司2",
    parent: "/bus",
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
  },
];

module.exports = defaultNamespaces;
