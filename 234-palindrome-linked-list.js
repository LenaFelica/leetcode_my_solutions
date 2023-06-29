//* Given the head of a singly linked list, return true if it is a palindrome or false otherwise.
//
// Input: head = [1,2,2,1]
// Output: true
//
// Input: head = [1,2]
// Output: false
//
// 
const isPalindrome = (head) => {
   let slow = head;
   let fast = head;
   const stack = [];
   while(fast) {
      if(!fast.next) {
         slow = slow.next;
         break;
      }
      stack.push(slow.val);
      slow = slow.next;
      fast = fast.next.next;
   }
   while(slow) {
      if(stack.pop() != slow.val) return false;
      slow = slow.next;
   }
   return true;
}