// Input: root = [4,2,7,1,3], val = 2
// Output: [2,1,3]
//
// Input: root = [4,2,7,1,3], val = 5
// Output: []
//
const searchBST = (root, val) => {
   if(!root) return null;
   if(root.val === val) return root;

   if(val > root.val) {
      return searchBST(root.right, val)
   } else {
      return searchBST(root.left, val)
   }
}
