// Given the root of a binary tree, return the inorder traversal of its nodes' values.

// Input: root = [1,null,2,3]
// Output: [1,3,2]
// Example 2:

// Input: root = []
// Output: []
// Example 3:

// Input: root = [1]
// Output: [1]

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
@param {TreeNode} root
@return {number[]} */

const inorderTraversal = (root) => {
     const res = [];
     const stack = [];

     while(root || stack.length) {
      if(root) {
         stack.push(root);
         root = root.left;
      } else {
         root = stack.pop();
         res.push(root.val);
         root = root.right;
      }
   }
   return res;
}
