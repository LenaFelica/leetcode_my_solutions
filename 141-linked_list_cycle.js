//* 141. Linked List Cycle
//
//* по памяти - выдляем памть для 2х поинтеров - быстрому и медленному
//* по слоноти O(n)
//
// Input: head = [3,2,0,-4], pos = 1
// Output: true
//
// Input: head = [1,2], pos = 0
// Output: true

// * @param {ListNode} head
// * @return {boolean}
// */
var hasCycle = function(head) {
   let slow = head;
   let fast = head;

   while(fast && fast.next) {
       slow = slow.next;
       fast = fast.next.next;

       if(slow === fast) {
           return true;
       }
   } 

   return false;
};