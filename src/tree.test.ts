import { uniqueId } from "lodash";
import { convertTreeBeToFe, TreeBE, TreeFE, TreeNodeFE } from "./tree";

const treeBE: TreeBE = [
  {
    id: uniqueId(),
    value: "GrandMaster",
    children: [
      {
        id: uniqueId(),
        value: "Son",
      },
      {
        id: uniqueId(),
        value: "Giang",
        children: [
          {
            id: uniqueId(),
            value: "Giang Daughter",
            children: [
              {
                id: uniqueId(),
                value: "Giang Grand Daughter",
              },
            ],
          },
          {
            id: uniqueId(),
            value: "Giang Son",
          },
        ],
      },
      {
        id: uniqueId(),
        value: "Man",
      },
    ],
  },
];

const treeFE = convertTreeBeToFe(treeBE);

test("findRootKeys should return root keys correctly", () => {
  const findRootKeys = (treeFE: TreeFE) => {
    // TODO
  };

  const actual = findRootKeys(treeFE);
  const expected = ["GrandMaster"];
  expect(actual).toEqual(expected);
});

test("findNthLevelAbove should return data as expected", () => {
  const findNthLevelAbove = (treeFE: TreeFE, value: string, level: number) => {
    // TODO
  };

  const actual = findNthLevelAbove(treeFE, "Giang Grand Daughter", 2);
  const expected = "Giang";
  expect(actual).toEqual(expected);
});

test("collectTreeBFS should list data as bread-first order ", () => {
  const collectTreeBFS = (treeFE: TreeFE) => {
    // TODO
  };

  const actual = collectTreeBFS(treeFE);
  const expected = [
    "GrandMaster",
    "Son",
    "Giang",
    "Man",
    "Giang Daughter",
    "Giang Son",
    "Giang Grand Daughter",
  ];
  expect(actual).toEqual(expected);
});

test("getLowestCommonAncestor should return the lowest common ancestor node", () => {
  const getLowestCommonAncestor = (
    treeFE: TreeFE,
    first: string,
    second: string
  ) => {
    // TODO
  };

  const actual = getLowestCommonAncestor(
    treeFE,
    "Giang Grand Daughter",
    "Giang Son"
  );
  const expected = "Giang";
  expect(actual).toEqual(expected);
});
