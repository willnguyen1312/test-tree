export type TreeNodeBE = {
  id: string;
  value: string;
  children?: TreeNodeBE[];
};

export type TreeBE = TreeNodeBE[];

export type TreeNodeFE = {
  id: string;
  value: string;
  parentId: string | null;
  childIds: string[];
};

export type TreeFE = Map<string, TreeNodeFE>;

export function convertTreeBeToFe(tree: TreeBE): TreeFE {
  const result: TreeFE = new Map();

  tree.forEach((node) => processTreeNodeBe(node, null, result));

  return result;
}

function processTreeNodeBe(
  node: TreeNodeBE,
  parentId: string | null,
  treeData: TreeFE
): void {
  const nodeId = node.id;
  let childIds: string[] = [];

  if (node.children) {
    childIds = node.children.map((child) => child.id);
    node.children.forEach((child) =>
      processTreeNodeBe(child, nodeId, treeData)
    );
  }

  const transformedData: TreeNodeFE = {
    id: nodeId,
    value: node.value,
    parentId,
    childIds,
  };

  treeData.set(nodeId, transformedData);
}
