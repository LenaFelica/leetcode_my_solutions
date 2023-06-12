//* Вариант 1 - с помощью функции helper
const isValidBST = (root) => {
   if(!root) return true;

   return helper(root, -Infinity, Infinity)
}

function helper(node, low, high) {
   if(!node) return true;
   if(node.val <= low || node.val >= high) {
       return false;
   }
   
   return helper(node.left, low, node.val) && helper(node.right, node.val, high)

}
//* Вариант 2 - через стек
// var isValidBST = function(root) {
//      let preVal = -Infinity;
//      let stack = [];

//      while(root || stack.length) {
//          while(root !== null) {
//              stack.push(root);
//              root = root.left;
//          }
//          root = stack.pop();
//          if(root.val <= preVal) return false;
//              preVal = root.val;
//              root = root.right;
//      }
//      return true;
// };
