// 1 варик
// input [2,7,11,14] target = 9
const twoSum = (arr, target) => {
   let res = [];
   for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
          if(arr[i] + arr[j] == target && i!=j){
             return[i,j]
          }
      }   
   }
   return res[i, j]
}
console.log(twoSum([3,5,12,15], 17)); // [1,2] - инесы 2х чисел