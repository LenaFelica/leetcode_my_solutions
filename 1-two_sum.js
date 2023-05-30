// 1 варик
// input: [2,7,11,14] target = 9
// otput: [0, 1] - index
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
