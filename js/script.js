"use strict";

let x = Number(prompt('Please enter first parameter:', 10));
let y = Number(prompt('Please enter second parameter:', 5));

console.log(`First parameter: ${x}`);
console.log(`Second parameter: ${y}`);

let additionResult = x + y;
let deductionResult = x - y;
let multiplicationResult = x * y;
let divisionResult = x/y;
let elevationResultForFirst = x ** 2;
let elevationResultForSecond = x ** 2;

console.log(`Addition result: ${additionResult}`);
console.log(`Deduction result: ${deductionResult}`);
console.log(`Multiplication result: ${multiplicationResult}`);
console.log(`Division result: ${divisionResult}`);
console.log(`Elevation result (first parameter): ${elevationResultForFirst}`);
console.log(`Elevation result (second parameter): ${elevationResultForSecond}`);