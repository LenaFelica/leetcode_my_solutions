/*
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]

//

// Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

var setZeroes = function(matrix) {
   let zeroPos = [];

   for(let i = 0; i < matrix.length; i++) {
       for(let j = 0; j < matrix[0].length; j++) {
           if(matrix[i][j] === 0) {
               zeroPos.push([i, j]);
           }
       }
   }

   for(let i = 0; i < zeroPos.length; i++) {
       const [row, col] = zeroPos[i]; //[1, 1]

       for(let i = 0; i < matrix.length; i++) {
           matrix[i][col] = 0;
       }

       for(let i = 0; i < matrix[0].length; i++) {
           matrix[row][i] = 0;
       }
   }

};