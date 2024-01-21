"use strict";

let firstParameter,
secondParameter,
additionResult,
deductionResult,
multiplicationResult,
divisionResult,
elevationResultForFirst,
elevationResultForSecond;

firstParameter = Number(prompt('Please enter first parameter:', 10));
secondParameter = Number(prompt('Please enter second parameter:', 5));

console.log(`First parameter: ${firstParameter}`);
console.log(`Second parameter: ${secondParameter}`);

additionResult = firstParameter + secondParameter;
deductionResult = firstParameter - secondParameter;
multiplicationResult = firstParameter * secondParameter;
divisionResult = firstParameter/secondParameter;
elevationResultForFirst = firstParameter ** 2;
elevationResultForSecond = secondParameter ** 2;

console.log(`Addition result: ${additionResult}`);
console.log(`Deduction result: ${deductionResult}`);
console.log(`Multiplication result: ${multiplicationResult}`);
console.log(`Division result: ${divisionResult}`);
console.log(`Elevation result (first parameter): ${elevationResultForFirst}`);
console.log(`Elevation result (second parameter): ${elevationResultForSecond}`);