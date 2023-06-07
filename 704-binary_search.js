// Example 1:
// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
//
// Example 2:
// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1


const binarySearch = (arr, target) => {
   let start = 0;
   let end = arr.length;

   while(start <= end) {
      let mid = Math.floor((start + end)/2)

      if(arr[mid] === target) {
         target = mid;
         return target;
      } 
      if(target < arr[mid]) {
         end = mid - 1;
      } else {
         start = mid + 1;
      }
   }
   return -1;
}
console.log(binarySearch([-1,0,3,5,9,12], 9)) //4
console.log(binarySearch([-1,0,3,5,9,12], 2)) //-1