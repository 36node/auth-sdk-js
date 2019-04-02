const faker = require("faker");
const _ = require("lodash");

function genNamespaces(
  parents = [],
  acc = [],
  level = 0,
  depth = 2,
  breadth = 5
) {
  if (level < depth) {
    const children = _.range(_.random(breadth)).map(() => {
      const parent = faker.random.arrayElement(parents);
      const prefix = parent ? parent.id : "";
      return {
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent(),
        id: prefix + "/" + faker.lorem.word(),
        name: faker.lorem.word(),
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
