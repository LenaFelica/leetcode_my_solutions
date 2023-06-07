//* 287. Find the Duplicate Number
//
// Example 1:
// Input: nums = [1,3,4,2,2]
// Output: 2
//
// Example 2:
// Input: nums = [3,1,3,4,2]
// Output: 3
//
const findDuplicate =(nums) => {
   let set = new Set();
   return nums.filter((n) => set.has(n) || !set.add(n))
}
console.log(findDuplicate([1,3,4,2,2])) //[2]