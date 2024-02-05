"use strict";

let homework = Number(prompt('Please enter homework number:', 4))

switch(homework){
    case 1:
        runHW1();
        break;
    case 2:
        runHW2();
        break;
    case 3:
        runHW3();
        break;  
    case 4:
        runHW4();
        break;     
}

function runHW1() {
    // HW1
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
}

function runHW2() {
    // HW2
    let variable = prompt('Please enter value:', 0);

    let numberVariable = Number(variable);
    let stringVariable = String(variable);
    let boolVariable = Boolean(variable);

    console.log(`Number variable: ${numberVariable}`);
    console.log(`String variable: "${stringVariable}"`);
    console.log(`Boolean variable: ${boolVariable}`);

    // Currency Converter
    const exchangeRate = 8.5689;
    let sumOfUAH = Number(prompt('Please enter the sum of UAH, you want to convert:', 100));

    let exchangeResult = +exchangeRate.toFixed(2) * sumOfUAH;
    console.log(`Exchange result: ${exchangeResult} UAH`);

    //Calculation of the cost of gas
    let litersAmount = Number(prompt('Please enter the amount of gas liters that you want to buy:', 10));
    let pricePerLiter = Number(prompt('Please enter the price by liter of gas(in UAH):', 35));

    if(!isNaN(litersAmount) && !isNaN(pricePerLiter)){   
        let gasCost = litersAmount * pricePerLiter;
        console.log(`Cost of gas: ${gasCost.toFixed(3)} UAH`);
    }
    else{
        console.log("Enter correct number value!")
    }

    // Additional task
    let a = Math.round(Math.random() * 100);
    let b = Math.round(Math.random() * 100);

    let binaryResult = a + b;

    console.log(`Sum of two values : ${binaryResult}`);
    console.log(`Sum of two values in binary form: ${binaryResult.toString(2)}`);
}

function runHW3() {
    let value = prompt('Please enter value:', 10);

    if(!isNaN(value)){   
        let i = 2;
        while (i < value) {
            if (i % 2 === 0){                
                console.log(`All even numbers less than ${value} (while): ${i}`);
            }
            i++;
        }

        for(let i = 2; i < value; i++){
            if (i % 2 === 0){
                console.log(`All even numbers less than ${value} (for): ${i}`);
            }
        }
    }
    else{
        console.log("Enter correct number value!")
    }

    //FizzBuzz
    let fizzBuzzResult = [];

    for(let i = 1; i <= 100; i++){
        if (i % 15 === 0){
            fizzBuzzResult.push("FizzBuzz");
        }
        else if (i % 3 === 0){
            fizzBuzzResult.push("Fizz");
        }
        else if (i % 5 === 0){
            fizzBuzzResult.push("Buzz");
        }
        else{
            fizzBuzzResult.push(i);
        }    
      }

      console.log(`FizzBuzz result: ${fizzBuzzResult}`);

    // Additional task
    let string = '42559125';
    let result = '';

    for(let i = 0; i < string.length; i++){
        string[i] < 5 ? result += 0 : result += 1;
    }

    console.log(`Additional task result: ${result}`);
}

function runHW4() {
    //A number reversal task
    const currentMaxValue = 4589;
    let reverseMaxValue;
    let arrayOfNumbers = currentMaxValue.toString().split("");
    
    arrayOfNumbers.reverse();
    reverseMaxValue = Number(arrayOfNumbers.join(""));
   
    console.log(reverseMaxValue);
    console.log(typeof reverseMaxValue);

    //product of an array of numbers
    const resultsArray = [1, 2, [3, [4]]];
    let productOfArray = 1;

    for(let result of resultsArray.flat(Infinity)){
        productOfArray *= result;
    }
    
    console.log(productOfArray);
}
