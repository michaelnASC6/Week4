/*
Odd Up, Even Down — N Times
Create a function that performs an even-odd transform to an array, n times. The input is an array of 3 integers >= 0, and an integer >= 0. Each even-odd transformation:
Adds two (+2) to each odd integer.
Subtracts two (-2) to each even integer.
Examples
console.log(evenOddTransform([3, 4, 9], 3)) //➞ [9, -2, 15] Since [3, 4, 9] ➞ [5, 2, 11] ➞ [7, 0, 13] ➞ [9, -2, 15]
console.log(evenOddTransform([0, 0, 0], 10)) //➞ [-20, -20, -20]
console.log(evenOddTransform([1, 2, 3], 1)) //➞ [3, 0, 5]
console.log(evenOddTransform([1, 2, 3], 0)) //➞ [1, 2, 3]
*/