//* 26. Remove Duplicates from Sorted Array
//
// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
//
// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]

var removeDuplicates = function(nums) {
   for (let i = 0; i < nums.length; i++) {
        if(nums[i] === nums[i-1]){
         nums.splice(i, 1);
         i--;
        }
   }
   return nums; //[ 0, 1, 2, 3, 4 ]
   // return nums.length; //5 - вернуть длинну массива без дубликатов
}
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))