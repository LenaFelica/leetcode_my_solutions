//! 9. Palindrome Number
//* Решение с ютуб канала Сергея Пузанкова
//* по времени - O(logN) - так как на каждой итерации уменьшали в 10 раз
//* напишем 3 проверки:
//
//* x < 0 return false
//* x % 10 === 0 return false
//* x < 10 return false
//* при / на 10 остаток от деления всегда будет последняя цифра в числе
//* Math.trunc обрезает всю дробную часть Math.trunc(x / 10) // 1221 /10 = 122.1 (дробь обрезается и остается 122)
//* После 1й итерации цикла x = 122 , revv = 1
//* Так как x все еще > revers, то снова заходим в цикл и итераци повторяетсяя
//* после 2й итерации относитеьно числа 1221 
//* reves * 10 = 10
//* revers += x % 10 => 10 + 2 - поклеиваем туда 2
//* значит в revers уже лежит 12
//* а от x отрезам эт двойку.
//* уже в х = 12 и revers = 12
//* выходим из цикла 
//* 
//* Теперь после цкла мы можем сравнить эти числа - если равны, то палиндром
//* return rev === x;
//
//* если исло не четное, цифра по центру на не интересуте
//* но можно напиать или Math.trunc(rev/10) - там тоже если 12 / 10 = 1.2 - откидываем дроную часть, и rev = 1 - тоже палиндром
const isPalindromeNumber = function(x) {
   if(x < 0) return false;
   if(x % 10 === 0) return false;
   // if(x < 10) return false;

   let revers = 0;

   while(x > revers) { //услови входа
      revers *= 10; // реверс изначально равен 0 * 10 = 0 (x: 1221)
      revers += x % 10; // оторвать 1 и доклеить к 0 единицу rev: 0 + 1
      x = Math.trunc(x / 10) //1221/10=122.1 -> 122 (trunc обрезает дробь)
   }

   if( x === revers || x == Math.trunc(revers / 10)) {
      return true;
   }
}
console.log(isPalindromeNumber(121)) //true
console.log(isPalindromeNumber(1221)) //true
console.log(isPalindromeNumber(-121)) //false
console.log(isPalindromeNumber(0)) //false
console.log(isPalindromeNumber(1)) //false
console.log('************************************')
//
//*
//! Моё Решение со строкой:
//
//TIME-COMPLEXITY: O(n);
//MEMORY: O(1);
//
const isPalindrome = function(x) {
   const str = x.toString();
   let left = 0;
   let right = str.length - 1;

   while(left < right) {
      if(str.charAt(left) !== str.charAt(right)) {
         return false;
      }
      left++;
      right--;
   }
   return true;
}

console.log(isPalindrome(121)) //true
console.log(isPalindrome(1221)) //true
console.log(isPalindrome(-121)) //false
console.log(isPalindrome(0)) //true
console.log(isPalindrome(1)) //true
