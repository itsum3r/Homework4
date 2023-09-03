"use strict";
//Write a program that uses filter to remove all negative numbers from an array of numbers
//Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array where each number is multiplied by 2.
//Given an array of strings ["apple", "banana", "cherry", "date", "grape"], use the filter method to create a new array containing only the fruits with more than 5 characters.
//Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods together to create a new array containing the squares of even numbers.
//Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a new array where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32.
//Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to create a new array containing the doubled values of odd numbers.
//Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], use the forEach method to log each name with an exclamation mark at the end, e.g., "Alice!".
console.log("Q1");
console.log("Write a program that uses filter to remove all negative numbers from an array of numbers");
function remover(nums) {
    return nums.filter(x => x < 0);
}
const nums = [1, -2, 3, -4, 5];
console.log(remover(nums));
console.log("Q2");
console.log("Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array where each number is multiplied by 2.");
let num$ = [2, 4, 6, 8, 10];
let upd = num$.map((num$) => {
    if (num$ <= 100)
        return num$ * 2;
});
console.log(upd);
console.log("Q3");
console.log("Given an array of strings [apple, banana, cherry, date, grape], use the filter method to create a new array containing only the fruits with more than 5 characters");
const fruits = ["apple", "banana", "cherry", "date", "grape"];
const MtF = fruits.filter(fruits => fruits.length < 5);
console.log(MtF);
console.log("Q4");
console.log("Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods together to create a new array containing the squares of even numbers");
const numbers$ = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sn = numbers$.filter(number => number % 2 === 0).map(number => number * number);
console.log(sn);
console.log("Q5");
console.log("/Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a new array where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32.");
const tic = [0, 10, 20, 30, 40];
const tif = tic.map(celsius => (celsius * 9 / 5) + 32);
console.log(tif);
console.log("Q6");
console.log("Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to create a new array containing the doubled values of odd numbers.");
const numb$ = [3, 6, 9, 12, 15, 18];
const doubledOddNumbers = numb$.filter(number => number % 2 !== 0).map(number => number * 2);
console.log(doubledOddNumbers);
console.log("Q7");
console.log("/Given an array of names [Alice, Bob, Charlie, David, Emily], use the forEach method to log each name with an exclamation mark at the end, e.g., Alice!");
const nam$ = ["Alice", "Bob", "Charlie", "David", "Emily"];
nam$.forEach(nam$ => console.log(`${nam$}!`));
