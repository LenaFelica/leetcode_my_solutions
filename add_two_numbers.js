// 2. Add Two Numbers
//
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
//
var addTwoNumbers = function(l1, l2) {
   let carry = 0;
   let prevNode = new ListNode(0);
   const headNode = prevNode;
   while(l1 || l2 || carry) {
       let val1 = 0;
       let val2 = 0;
       if(l1) {
           val1 = l1.val;
           l1 = l1.next;
       }
       if(l2) {
           val2 = l2.val;
           l2 = l2.next;
       }
       let sum = val1 + val2 + carry;
       carry = Math.floor(sum / 10)
       let digit = sum % 10;
       const curNode = new ListNode(digit);
       prevNode.next = curNode;
       prevNode = curNode;
   
   }
   return headNode.next;
   };