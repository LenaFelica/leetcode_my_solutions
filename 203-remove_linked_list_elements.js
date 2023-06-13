//* 203. Remove Linked List Elements

// Input: head = [1,2,6,3,4,5,6], val = 6
// Output: [1,2,3,4,5]

// Example 2:
// Input: head = [], val = 1
// Output: []

// Example 3:
// Input: head = [7,7,7,7], val = 7
// Output: []

const removeElements = (head, val) => {
     let dummyNode = new ListNode(-1, head)
     let cur = dummyNode;

     while(cur.next !== null) {
      if(cur.next.val === val) {
         cur.next = cur.next.next;
      } else {
         cur = cur.next;
      }
   }
   return dummyNode.next;
}