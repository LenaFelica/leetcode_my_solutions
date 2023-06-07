//* 442. Find All Duplicates in an Array
//

//example 1:
//input nums = [4,3,2,7,8,2,3,1]
//output: [2,3]

//example 2:
//input nums = [1,1,2]
//output: [1]

//example 3:
//input nums = [1]
//output: []

// const duplic = (nums) => {
//    здесь const = [] - мы присваиваем условно ссылку константе на массив будущий, можем менять только данные, а сама константа не меняется(ссылку мы не меняем)
//    const res = []
//    const hash = {}
//    for (let i = 0; i < nums.length; i++) {
//         let cur = nums[i];
//         hash[cur] ? hash[cur] += 1 : hash[cur] = 1
//    }
//    for(key in hash) {
//       if(hash[key] === 2) {
//          res.push(key)
//       }
//    }
//    return res;
// }
// console.log(duplic([4,3,2,7,8,2,3,1])) // ['2', '3']

const duplic = (nums) => {
   //здесь const = [] - мы присваиваем условно ссылку константе на массив будущий, можем менять только данные, а сама константа не меняется(ссылку мы не меняем)
   const res = []
   const hash = {}
   for (let i = 0; i < nums.length; i++) {
        let cur = nums[i];
        hash[cur] ? res.push(cur) : hash[cur] = 1;
   }
   return res;
}
console.log(duplic([4,3,2,7,8,2,3,1])) //[2, 3]
//
//********************************************* */
//* отсортировать массив за O(n*log(n)) 
//* и пройтись по отсортированному массиву за O(n),
//* выбирая дублирующиеся элементы.
//
//* Простое решение 1: sort
let num = [4,3,2,7,8,2,3,1]
const newArr = num.sort().filter((item, index) => item === num[index + 1] && item !== num[index - 1])
console.log(newArr); //[2,3]
//
//* Простое решение 2: filter
function findDub(num) {
   const set = new Set();
   return num.filter((n) => set.has(n) || !set.add(n));
 }
 console.log(findDub(num))// [2,3]
 console.log(findDub([1,1,1]))// [1,1]

 