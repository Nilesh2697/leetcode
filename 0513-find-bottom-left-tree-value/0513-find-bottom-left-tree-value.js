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
var findBottomLeftValue = function(root) {
    if(!root) return null;
    let queue = [root]
    let greatestLeft = []
    
    
    while(queue.length){
      let length = queue.length;
      greatestLeft = []
     
      for(let i = 0; i < length; i++){
        let curr = queue.shift()
        greatestLeft.push(curr.val)
        if(curr.left)queue.push(curr.left)
        if(curr.right) queue.push(curr.right)
    }
  }
  return greatestLeft[0];
};