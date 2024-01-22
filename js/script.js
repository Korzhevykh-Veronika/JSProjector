"use strict";

var homework = Number(prompt('Please enter homework number:', 2))

if(homework == 1){
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
else if (homework == 2){
    // HW2
    let variable = prompt('Please enter value:', 0);

    let numberVariable = Number(variable);
    let stringVariable = String(variable);
    let boolVariable = Boolean(variable);

    console.log(`Number variable: ${numberVariable}`);
    console.log(`String variable: "${stringVariable}"`);
    console.log(`Boolean variable: ${boolVariable}`);

    // Currency Converter
    let exchangeRate = 8.5689;
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
