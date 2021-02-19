/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

// 从根root开始递归搜索，递归搜到各个子树……
// 如果遍历到 p 或 q，比方说 p，则 LCA 要么是当前的 p（q 在 p 的子树中），要么是 p 之上的节点       （q 不在 p 的子树中），不可能是 p 之下的节点。不用继续往下遍历，返回当前的 p。

// 当遍历到 null 节点，空树不存在 p 和 q，不存在 LCA，返回 null。

// 当遍历的节点 root 不是 p 或 q 或 null，则递归搜寻 root 的左右子树：

// 如果左右子树的递归都有结果，说明 p 和 q 分居 root 的左右子树，返回 root。
// 如果只是一个子树递归调用有结果，说明 p 和 q 都在这个子树，返回该子树递归结果。
// 如果两个子树递归结果都为 null，说明 p 和 q 都不在这俩子树中，返回 null。

const lowestCommonAncestor = (root, p, q) => {
    if (root === null) return null
    if (root === p || root === q) return root
    const left = lowestCommonAncestor(root.left, p, q)
    const right = lowestCommonAncestor(root.right, p, q)
    if (left && right) return root
    if (left === null) return right
    return left
  }

// const lowestCommonAncestor = (root, p, q) => {
//   if (root == null) { // 遇到null，返回null 没有LCA
//     return null;
//   }
//   if (root === q || root === p) { // 遇到p或q，直接返回当前节点
//     return root;
//   }
//   // 非null 非q 非p，则递归左右子树
//   const left = lowestCommonAncestor(root.left, p, q);
//   const right = lowestCommonAncestor(root.right, p, q);
//   // 根据递归的结果，决定谁是LCA
//   if (left && right) {
//     return root;
//   }
//   if (left === null) {
//     return right;
//   }
//   return left;
// };
