"use strict";

let homework = Number(prompt('Please enter homework number:', 8))

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
    case 5:
        runHW5();
        break; 
    case 6:
        runHW6();
        break;  
    case 7:
        runHW7();
        break;   
    case 8:
        runHW8();
        break;   
    default:
        console.log("Enter correct value (from 1 to 7)!")
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
    let reverseMaxValue = Number(currentMaxValue.toString().split("").reverse().join(""));
   
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

function runHW5() {
    const priceData = {
        Apples: '23.4',
        BANANAS: '48',
        oRAnGEs: '48.7584',
    };
    
    let updatedPriceData = {};

    for (let key in priceData){
        updatedPriceData[key.toLowerCase()] = Number(priceData[key]).toFixed(2);
    }

    console.log(updatedPriceData);
}

function runHW6(){
    //The task of iteration
    function iterativeOddSumTo(number) {
        let result = 0;
        for(let i = 1; i <= number; i += 2 ){
            result += i;
        }
        return result;
    };
        
    console.log(iterativeOddSumTo(1)) // 1
    console.log(iterativeOddSumTo(9)) // 25
    console.log(iterativeOddSumTo(10)) // 25

    //recursive
    function recursiveOddSumTo(number) {
        let result = 1;
        if (number === 1){
            return result;
        }
        
        if (number % 2 != 0){
            return number + recursiveOddSumTo(number - 2);
        }

        return recursiveOddSumTo(number-1);
    };
    
    console.log(recursiveOddSumTo(1)) // 1
    console.log(recursiveOddSumTo(9)) // 25
    console.log(recursiveOddSumTo(10)) // 25

    //Additional task
    const isXOEqual = (str) => {
        let allChars = str.toLowerCase().split("");
        let numberOfOChar = 0;
        let numberOfXChar = 0;

        for(let char of allChars){
            if (char == 'o'){
                numberOfOChar++;
            }
            else if(char == 'x'){
                numberOfXChar++;
            }
        }

        return numberOfOChar == numberOfXChar;
    }
    
    console.log(isXOEqual("ooxx")) // true
    console.log(isXOEqual("xooxx")) // false
    console.log(isXOEqual("ooxXm")) // true
    console.log(isXOEqual("zpzpzpp")) // коли немає 'x' та 'o' то має повертати true бо 0 = 0
    console.log(isXOEqual("zzoo")) // false
}

function runHW7(){
    //Find product
    const resultsArray = [1, 2, [3, [4]]];
    let productOfArray = resultsArray.flat(Infinity).reduce((product, currentValue) => product * currentValue, 1);
    
    console.log(productOfArray); // 24

    //Update object
    const priceData = {
        Apples: '23.4',
        BANANAS: '48',
        oRAngGEs: '48.7584',
        };
    
    function optimizer(data) {
        let entries = Object.entries(data);
        let updatedEntries = entries.map(([key, value]) => {
            return { key : key.toLowerCase(), value : Number(value).toFixed(2)}
         });

        return Object.fromEntries(updatedEntries.map(item => [item.key, item.value]));
    };
    
    let updatedPriceData = optimizer(priceData);
    
    console.log(updatedPriceData) // {apples: '23.40', bananas: '48.00', oranges: '48.76'}

    //Filter array
    const userNames = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];
    const vowelsArray = ['А', 'Е', 'О', 'У', 'І', 'И', 'Ю'];
    
    let filteredNames = userNames.filter(name => vowelsArray.includes(name[0]));
    let filteredNamesWithCycle = [];
    userNames.forEach((name) => {
        if (vowelsArray.includes(name[0])) {
            filteredNamesWithCycle.push(name);
        }
    }); 

    console.log(filteredNames); // ['Емма', 'Юстин', 'Ілля', 'Яна', 'Антон', 'Олена']
    console.log(filteredNamesWithCycle); // ['Емма', 'Юстин', 'Ілля', 'Яна', 'Антон', 'Олена']

    //Sort array
    const userFullNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];
    let initials = [];
    const copyArray = [...userFullNames];
    initials = copyArray.sort().map((fullName) => {
        return fullName.split(" ").map(name => name[0]).join(".");
    })
    
    console.log(initials); // [ "Г.П.А.", "П.О.І.", "Р.А.О."]

    //Additional task
    function sortArray(arr) {
        const copyArray = Object.assign([], arr);
        return copyArray === null || copyArray === undefined ? [] : copyArray.sort((a,b) => a - b);
    }
    
    console.log(sortArray([1, 12, 10, 50, 5])); // поверне [1,5,10,12,50]
    console.log(sortArray(null)); // поверне []
}

function runHW8(){
    //addThemAll
    console.log(addThemAll(2,4)); // 6
    console.log(addThemAll(1,2,3,4)); // 10
    console.log(addThemAll(5,5,10)); // 20

    function addThemAll(...args){
        return args.reduce((sum, currentValue) => sum + currentValue, 0)
    }

    //multiply
    console.log(multiply(5)(5))		// 25
    console.log(multiply(2)(-2))	// -4
    console.log(multiply(4)(3))		// 12

    function multiply(a) {
        return function (b) {
            return a * b;
        };
    }
}