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
 * @return {number}
 */
var pseudoPalindromicPaths  = function(root) {
    const freq = new Map();

  const isPseudoPalindrome = () => {
    let oddCount = 0;
    for (const count of freq.values()) {
      if (count % 2 !== 0) {
        oddCount++;
        if (oddCount > 1) {
          return false;
        }
      }
    }
    return true;
  };

  const dfs = (node) => {
    if (!node) {
      return 0;
    }

    freq.set(node.val, (freq.get(node.val) || 0) + 1);

    if (!node.left && !node.right) {
      const result = isPseudoPalindrome() ? 1 : 0;
      freq.set(node.val, freq.get(node.val) - 1); // Backtrack
      return result;
    }

    const result = dfs(node.left) + dfs(node.right);

    freq.set(node.val, freq.get(node.val) - 1); // Backtrack

    return result;
  };

  return dfs(root);
};