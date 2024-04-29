export const nodeChildCount = (node, deep = Infinity) => {
  let count = 0;

  const countNodes = (node, currentDepth) => {
    if (currentDepth >= deep) {
      return;
    }

    const childNodes = node.childNodes;
    
    count += childNodes.length;

    if (currentDepth < deep) {
      for (let i = 0; i < childNodes.length; i++) {
        countNodes(childNodes[i], currentDepth + 1);
      }
    }
  }

  countNodes(node, 0);

  return count;
}
