const faker = require("faker");

const levelMap = {
  0: [
    {
      id: "bus",
      name: "车辆监控平台",
    },
  ],
  1: [
    {
      id: "company1",
      name: "公司1",
    },
    {
      id: "company2",
      name: "公司2",
    },
  ],
  2: [
    {
      id: "sub1",
      name: "子公司1",
    },
    {
      id: "sub2",
      name: "子公司2",
    },
  ],
};

function genNamespaces(
  parents = [],
  acc = [],
  level = 0,
  depth = 3,
  breadth = 5
) {
  if (level < depth) {
    const children = levelMap[level].map(item => {
      const parent = parents[0];
      const prefix = parent ? parent.id : "";
      return {
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent(),
        id: prefix + "/" + item.id,
        name: item.name,
        parent: prefix,
      };
    });

    acc = acc.concat(children);

    acc = genNamespaces(
      children,
      acc,
      level + 1,
      depth,
      breadth * children.length
    );
  }

  return acc;
}

module.exports = genNamespaces();
