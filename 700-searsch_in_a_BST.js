// Input: root = [4,2,7,1,3], val = 2
// Output: [2,1,3]
//
// Input: root = [4,2,7,1,3], val = 5
// Output: []
//

//     2
//    / \
//   1   5
//      /
//     3
//* return subnode (Null)
//
const searchBST = (root, val) => {
   if(!root) return null; // исключение
   if(root.val === val) return root; // базовый случай дл выхода из рекурсии

   if(val > root.val) {
      return searchBST(root.right, val)
   } else {
      return searchBST(root.left, val)
   }
}
