import { uniqueId } from "lodash";
import { convertTreeBeToFe, TreeBE, TreeFE } from "./tree";

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

test("findTwoLevelAbove should return data as expected", () => {
  const findTwoLevelAbove = (treeFE: TreeFE, value: string) => {
    // TODO
  };

  const expected = ["Son", "Giang", "Man"];

  expect(findTwoLevelAbove(treeFE, "Giang Grand Daughter")).toEqual(expected);
});

test("getLowestCommonAncestor should list data as bread-first order ", () => {
  const getLowestCommonAncestor = (
    treeFE: TreeFE,
    first: string,
    second: string
  ) => {
    // TODO
  };

  const expected = "Giang";

  expect(
    getLowestCommonAncestor(treeFE, "Giang Grand Daughter", "Giang Son")
  ).toEqual(expected);
});
