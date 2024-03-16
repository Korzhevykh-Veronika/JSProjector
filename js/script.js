"use strict";

let homework = Number(prompt('Please enter homework number:', 14))

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
    case 9:
        runHW9();
        break;  
    case 10:
        runHW10();
        break;   
    case 11:
        runHW11();
        break;
    case 12:
        runHW12();
        break;
    case 13:
        runHW13();
        break;
    case 14:
        runHW14();
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
        if(arr === null){
           return [];
        }
        
        const copyArray = [...arr];
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

function runHW9(){

detonatorTimerInterval(3);

function detonatorTimerInterval(delay) {
    const timer = setInterval(() => {
        if (delay > 0) {
            console.log(delay);
            delay--;
        } else {
            clearInterval(timer);
            console.log('BOOM!');
        }
    }, 1000);
}

detonatorTimerTimeout(3);

function detonatorTimerTimeout(delay) {
    function timeout() {
        if (delay > 0) {
            console.log(delay);
            delay--;
            setTimeout(timeout, 1000);
        } else {
            console.log('BOOM!');
        }
    }

    setTimeout(timeout, 1000);
}

let me = {
	firstName: 'Veronika ',
	lastName: 'Korzhevykh',
	city: 'Kyiv',
	age: 23,
	hobby: 'hot yoga',
	currentJob: 'back-end developer',
	futureJob: 'full-stack developer',
	introduce() {
		console.log(`My name is ${this.firstName + this.lastName}, I'm ${this.age} y.o. and I live in ${this.city}`);
	},
	describeMyJob(){
		console.log(`Now I'm ${this.currentJob}, but in future I want to be ${this.futureJob}`);
	},
    describeMyHobby(){
		console.log(`In my spare time I mostly spend it with my friends or go to ${this.hobby} classes`);
	},
}

me.introduce();
me.describeMyHobby();
me.describeMyJob();

let securedSelfIntroduce = me.introduce.bind(me);
let securedSelfDescribeMyJob = me.describeMyJob.bind(me);
let securedSelfDescribeMyHobby = me.describeMyHobby.bind(me);

setTimeout(securedSelfIntroduce, 1000); 
setTimeout(securedSelfDescribeMyJob, 2000); 
setTimeout(securedSelfDescribeMyHobby, 3000);
}

function runHW10(){

    function timeDifference(startDate = '01 Jan 2023', endDate = '01 Jan 2024', dimensionality = 'days'){
        const MILLISEONDS_IN_SECOND = 1000;
        const MILLISEONDS_IN_MINUTE = 60000;
        const MINUTES_IN_HOUR = 3600;
        const MINUTES_IN_DAY = 1440;
        let durationBetweenDates = Math.abs(Date.parse(endDate) - Date.parse(startDate));

        switch (dimensionality){
            case 'days':
                return `${durationBetweenDates / MILLISEONDS_IN_MINUTE / MINUTES_IN_DAY} ${dimensionality}`;
            case 'hours':
                return `${durationBetweenDates / MILLISEONDS_IN_MINUTE / MINUTES_IN_HOUR} ${dimensionality}`;
            case 'minutes':
                return `${durationBetweenDates / MILLISEONDS_IN_MINUTE} ${dimensionality}`;
            case 'seconds':
                return `${durationBetweenDates / MILLISEONDS_IN_SECOND} ${dimensionality}`;
            default:
                return 'Enter correct value!';            
        }
    }

    console.log(timeDifference('02 Aug 1985', '03 Aug 1985', 'seconds')); // поверне '86400 seconds'
    console.log(timeDifference('31 Jan 2022', '03 Feb 2021', 'days')); // поверне '362 days'
    console.log(timeDifference()); // поверне '365 days'
    console.log(timeDifference('02 Aug 1985', '03 Aug 1985', 'sec')); // поверне помилку


    const userNames = ['Петро', 'Емма', 'Петро', 'Емма', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена', 'Емма'];

    function filterUnique(array) {
        return [...new Set(array)];
    }

    console.log(filterUnique(userNames)); // ['Петро', 'Емма', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];    
}

function runHW11(){

    const movies = [
        {
            movieName: 'The Thing',
            releaseYear: 1982,
            directedBy: 'Carpenter',
            runningTimeInMinutes: 109,
        },
        {
            movieName: 'Aliens',
            releaseYear: 1986,
            directedBy: 'Cameron',
            runningTimeInMinutes: 137,
        },
        {
            movieName: 'Men in Black',
            releaseYear: 1997,
            directedBy: 'Sonnenfeld',
            runningTimeInMinutes: 98,
        },
        {
            movieName: 'Predator',
            releaseYear: 1987,
            directedBy: 'McTiernan',
            runningTimeInMinutes: 107,
        },
    ];
    
    console.log([...movies].sort(byProperty('releaseYear', '>'))); 
    // виведе масив фільмів посортованих по року випуску, від старішого до новішого
    console.log([...movies].sort(byProperty('runningTimeInMinutes', '<'))); 
    // виведе масив фільмів посортованих по їх тривалості, від найдовшого до найкоротшого
    console.log([...movies].sort(byProperty('movieName', '>'))); 
    // виведе масив фільмів посортованих по назві, в алфавітному порядку
    
    function byProperty (property = 'releaseYear', direction = '>') {

        switch (direction){
            case '>':
                return (a, b) => (a[property] > b[property] ? 1 : -1);
            case '<':
                return (a, b) => (a[property] < b[property] ? 1 : -1);
        }
    }

    function someFunction(firstName, secondName){
         return `Hi ${firstName} ${secondName}, lets start your work`;
    }

    function slower(func, seconds) {
        return function(...args){
            console.log(`Chill out, you will get you result in ${seconds} seconds`);
            setTimeout(() => {
                const result = func(...args);
                console.log(result);
            }, seconds * 1000);
        };
    }

    let slowedSomeFunction = slower(someFunction, 5);
    slowedSomeFunction('Veronika', 'Korzhevykh');
}

function runHW12(){
    let headerTwo = document.querySelector('h2#headerTwo');
    let sectionTag = document.querySelector('section');
    let listWithText = document.querySelector('ul li:nth-of-type(5)');
    let spanWithClass = document.querySelector('.hatredLevelCounter');

    console.log(headerTwo);
    console.log(sectionTag);
    console.log(listWithText);
    console.log(spanWithClass);
}

function runHW13(){
    const TURN_OFF_STATE = "Turn Off";
    const TURN_ON_STATE = "Turn On";
    var bodyElement = document.body;

    const newButton = document.querySelector(".newButton");    
    
    if (localStorage.getItem("theme") != null){
        newButton.textContent = localStorage.getItem("theme");
        if (newButton.textContent == TURN_OFF_STATE) {
            bodyElement.classList.remove('dark-background');
            bodyElement.classList.add('light-background');
            
         } else {
            bodyElement.classList.remove('light-background');
            bodyElement.classList.add('dark-background');
         }
        
        let value = localStorage.getItem("lastDate");;            
        appendSpan(value);
    }

    newButton.addEventListener("click", () =>  {       
        let existingSpan = document.querySelector("span");        
        let dateNow = getCurrentDateTime();

        if (newButton.textContent == TURN_OFF_STATE) {
            newButton.textContent = TURN_ON_STATE;
            bodyElement.classList.remove('light-background');
            bodyElement.classList.add('dark-background');          
         } else {
            newButton.textContent = TURN_OFF_STATE;
            bodyElement.classList.remove('dark-background');
            bodyElement.classList.add('light-background');
         }
        
        if (existingSpan != null){
            existingSpan.remove();
        }
        
        let value;
        if (newButton.textContent == TURN_OFF_STATE) {
            value =  `Last turn off: ${dateNow}`;
         } else {
            value =  `Last  turn on: ${dateNow}`;
         }

        appendSpan(value);
        
        localStorage.setItem("theme", newButton.textContent);
        localStorage.setItem("lastDate", value);
    });

    function appendSpan(value){
        let newSpan = document.createElement('span'); 
        newSpan.innerHTML = value;            
        newButton.after(newSpan);
    }

    function getCurrentDateTime() {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
    
        return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
    }
}

function runHW14(){
    // const
    const TASKS_STORAGE_KEY = "tasks";
    
    // DOM variables
    const form = document.querySelector(".create-task-form");
    const taskInput = document.querySelector(".task-input");
    const taskList = document.querySelector(".collection");
    const clearButton = document.querySelector(".clear-tasks");
    const filterInput = document.querySelector(".filter-input");
    
    // "storage" functions
    const getTasksFromStorage = () => {
      return JSON.parse(localStorage.getItem(TASKS_STORAGE_KEY)) || [];
    };
    
    const storeTaskInStorage = (newTask) => {
      const tasks = getTasksFromStorage();
      tasks.push(newTask);
    
      localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
    };
    
    const clearTasksFromStorage = () => {
      localStorage.removeItem(TASKS_STORAGE_KEY);
    };

    const removeTaskFromStorage = (index) => {
        const tasks = getTasksFromStorage();
      
        tasks.splice(index, 1);
      
        localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
    };
    
    const editTaskFromStorage = (editTask, newValue) => {
        const tasks = getTasksFromStorage();
      
        const editedIndex = tasks.findIndex((task) => task === editTask);
        tasks.splice(editTask, 1, newValue);
      
        localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
      };
    
    // "tasks" functions
    const appendLi = (value) => {
      // Create and add LI element
      const li = document.createElement("li");
      // li.textContent = value; // Значення яке ввів користувач
      li.innerHTML = `${value} <i class="fa fa-edit edit-item"></i> <i class="fa fa-remove delete-item"></i>`;
      taskList.append(li);
    };
    
    const addTask = (event) => {
      event.preventDefault();
    
      // Перевірка на пусте значення
      const value = taskInput.value.trim();
      if (value === "") {
        return;
      }
      
      appendLi(value);
    
      // Очистити форму
      // 1 - скидає значення у input'a taskInput
      taskInput.value = "";
      // 2 - скидає всі значення форми
      // form.reset();
    
      // Фокусуємось на input
      taskInput.focus();
    
      // Зберігаємо елемент у localStorage
      storeTaskInStorage(value);
    };
    
    const clearTasks = () => {
      taskList.innerHTML = "";
      clearTasksFromStorage();
    };
    
    const removeTask = (event) => {
      const isDeleteButton = event.target.classList.contains("delete-item");
      if (!isDeleteButton) {
        return;
      }
    
      const isConfirmed = confirm("Ви впевнені що хочете видалити це завдання?");
      if (!isConfirmed) {
        return;
      }
    
      const li = event.target.closest("li");
      const index = Array.from(taskList.children).indexOf(li);
      li.remove();
    
      // Видалити зі сховища
      const deletedTask = li.textContent.trim();
      removeTaskFromStorage(index);
    };

    const editTask = (event) => {
        const isEditButton = event.target.classList.contains("edit-item");
        if (!isEditButton) {
          return;
        }
      
        let newValue = (prompt("Введіть нове значення:")).toString().trim();
        if (newValue.length === 0 || newValue === null) {
          return;
        }
      
        const li = event.target.closest("li");
        li.innerHTML = `${newValue} <i class="fa fa-edit edit-item"></i> <i class="fa fa-remove delete-item"></i>`;

        const editedTask = li.textContent.trim();
        editTaskFromStorage(editedTask, newValue);
      };
    
    const filterTasks = ({ target: { value } }) => {
      const text = value.toLowerCase();
      const list = taskList.querySelectorAll("li"); // []
    
      list.forEach((li) => {
        const liText = li.textContent.trim().toLowerCase();
    
        // if (liText.includes(text)) {
        //   li.hidden = false;
        // } else {
        //   li.hidden = true;
        // }
        li.hidden = !liText.includes(text);
      });
    };
    
    const initTasks = () => {
      const tasks = getTasksFromStorage();
      // tasks.forEach((task) => appendLi(task));
      tasks.forEach(appendLi);
    };
    
    // Init
    initTasks();
    
    // Event listeners
    // onsubmit
    form.addEventListener("submit", addTask);
    
    clearButton.addEventListener("click", clearTasks);
    
    taskList.addEventListener("click", removeTask);

    taskList.addEventListener("click", editTask);
    
    filterInput.addEventListener("input", filterTasks);
}