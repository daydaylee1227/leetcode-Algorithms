/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

// https://leetcode-cn.com/problems/validate-binary-search-tree/
// 需要验证这课树的话,需要采用的就是中序遍历


// 递归的写法
// 枚举当前的根

const isValidBST = function(root, pre = null, next = null) {
  if (!root) return true;
  if (pre && pre.val >= root.val) return false;
  if (next && next.val <= root.val) return false;
  return isValidBST(root.left, pre, root) && isValidBST(root.right, root, next);
};