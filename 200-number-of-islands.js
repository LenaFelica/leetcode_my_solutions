// Input: grid = [
//    ["1","1","1","1","0"],
//    ["1","1","0","1","0"],
//    ["1","1","0","0","0"],
//    ["0","0","0","0","0"]
//  ]
//  Output: 1

// Input: grid = [
//    ["1","1","0","0","0"],
//    ["1","1","0","0","0"],
//    ["0","0","1","0","0"],
//    ["0","0","0","1","1"]
//  ]
//  Output: 3

var numIslands = function(grid) {
   let count = 0;
   let rows = grid.length;
   let cols = grid[0].length;
   if(!grid) return 0;
   
   const neib = (R, C, grid) => {
       grid[R][C] = '6';
   
       if(grid[R][C - 1] === '1') {neib(R, C-1, grid)}
       if(grid[R][C + 1] === '1') {neib(R, C+1, grid)}
       if(grid?.[R - 1]?.[C] === '1') {neib(R-1, C, grid)}
       if(grid?.[R + 1]?.[C] === '1') {neib(R+1, C, grid)}
   
   }
   
   for(let R = 0; R < rows; R++) {
       for(let C = 0; C < cols; C++) {
           if(grid[R][C] === '1') {
               count += 1;
               neib(R, C, grid)
           }
       }
   }
   return count;
   };