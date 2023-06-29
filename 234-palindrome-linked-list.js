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

//
//! Optimal solution
//* first - find midpoint
//* second - reerse tail (начиная с середины, перевернуть вторую половину)
//* third - return compare(head, tail) - сравним первую половину списка с перевернутой половиной
//* Линейна временная сложность
//* Константа пространственная сложность (зависимость количества занимаемой памяти от входных данных):
//
const findMidpoint = (head) => {
      let slow = head;
      let fast = head;
      while(fast && fast.next) {
         let slow = slow.next;
         let fast = fast.next.next;
      }
   return slow;
}

const reverse = (head) => {
   let prev = null;
   let cur = head;
   while(cur) {
      const next = cur.next;
      cur.next = prev;
      prev = cur;
      cur = next; 
   }
   return prev;
}

const compare = (list1, list2) => {
   while(list1 && list2) {
       if(list1.val !== list2.val ) return false;
         list1 = list1.next;
         list2 = list2.next;  
   }
   return true;
}

const iPalindromOpt = (head) => {
   const midpoint = findMidpoint(head);
   const tail = reverse(midpoint);
   return compare(head, tail)
}