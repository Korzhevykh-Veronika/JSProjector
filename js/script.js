"use strict";

let homework = Number(prompt('Please enter homework number:', 16))

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
    case 15:
        runHW15();
        break;
    case 16:
        runHW16();
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
    
    const editTaskFromStorage = (index, newValue) => {
        const tasks = getTasksFromStorage();
      
        tasks.splice(index, 1, newValue);
      
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
      const index = [...taskList.children].indexOf(li);
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
        
        const li = event.target.closest("li");
        let newValue = (prompt("Введіть нове значення:", li.firstChild.textContent.trim())).toString().trim();
        if (newValue.length === 0 || newValue === null) {
          return;
        }
      
        li.firstChild.textContent = `${newValue} `;
        const index = [...taskList.children].indexOf(li);

        const editedTask = li.textContent.trim();
        editTaskFromStorage(index, newValue);
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

function runHW15(){
    class Publication {
        #format;

        constructor(author, publicationDate, length, format) {
            this.author = author;
            this.publicationDate = publicationDate;
            this.length = length;
            this.#format = format;
        }
    
        getInfo() {
            return`This publication was written by ${this.author} on ${this.publicationDate}. It contains ${this.length} pages. You can find it ${this.#format}.`;
        }
    
        dateValidation() {
            const minDate = new Date('2010-01-01');
            const pubDate = new Date(this.publicationDate);
            return pubDate <= minDate ? "Oh. Looks like this one's pretty old by now." : "Lucky you, you'll be the first one to get it.";
        }
    }
    
    class Book extends Publication {
        #chapterCount;

        constructor(author, publicationDate, length, format, chapterCount, title) {
            super(author, publicationDate, length, format);
            this.#chapterCount = chapterCount;
            this.title = title;
        }
    
        getTitleWithChapterCount() {
            return `${this.title} (with ${this.#chapterCount} chapters)`;
        }
    
        isLongBook() {
            return this.length > 500;
        }
    }
    
    class Magazine extends Publication {
        #advertisingCount;

        constructor(author, publicationDate, length, format, advertisingCount, readersCount) {
            super(author, publicationDate, length, format);
            this.#advertisingCount = advertisingCount;
            this.readersCount = readersCount;
        }
    
        getAdvertisingPercentage() {
            return (this.advertisingCount / this.length) * 100;
        }
    
        isPopularMagazine() {
            return this.readersCount >= 100;
        }
    }
    
    class Textbook extends Book {
        #classInfo;

        constructor(author, publicationDate, length, format, chapterCount, title, classInfo, subject) {
            super(author, publicationDate, length, format, chapterCount, title);
            this.#classInfo = classInfo;
            this.subject = subject;
        }
    
        getClassInfoWithSubject() {
            return `${this.#classInfo} - ${this.subject}`;
        }
    
        isScienceBook() {
            return this.subject === "Science";
        }
    }
    
    class FairyTale extends Book {
        #ageLimitation;

        constructor(author, publicationDate, length, format, chapterCount, title, ageLimitation, mainCharacter) {
            super(author, publicationDate, length, format, chapterCount, title);
            this.#ageLimitation = ageLimitation;
            this.mainCharacter = mainCharacter;
        }
    
        getMainCharacterIntroduction() {
            return `The main character of this fairy tale is ${this.mainCharacter}.`;
        }
    
        isSuitableForAge(age) {
            return age >= 6 && age <= this.#ageLimitation;
        }
    }
    
    class Forbes extends Magazine {     
        #issueNumber;

        constructor(author, publicationDate, length, format, advertisingCount, readersCount, issueNumber) {
            super(author, publicationDate, length, format, advertisingCount, readersCount);
            this.#issueNumber = issueNumber;
        }
    
        getReadersPerIssue() {
            return Math.round(this.readersCount / this.#issueNumber);
        }
    
        isWidelyRead() {
            return this.readersCount >= 1000000;
        }
    }
    
    class Vogue extends Magazine {
        constructor(author, publicationDate, length, format, advertisingCount, readersCount, fashionTheme) {
            super(author, publicationDate, length, format, advertisingCount, readersCount);
            this.fashionTheme = fashionTheme;
        }
    
        getFashionThemeWithLength() {
            return `${this.fashionTheme} - ${this.length} pages`;
        }
    
        isFashionableMagazine() {
            return this.fashionTheme === "Fashion Trends";
        }
    }    
    
    let textBook = new Textbook("John Doe", "2004-03-01", 800, "offline", 20, "Mathematics bases", "Grade 10", "Mathematics");
    console.log(textBook.getInfo());
    console.log(textBook.dateValidation());
    console.log("Book Title:", textBook.getTitleWithChapterCount());
    console.log("Is Long Book:", textBook.isLongBook());
    console.log(textBook.getClassInfoWithSubject());
    console.log("Is Science Book:", textBook.isScienceBook());
    console.log("---------------------------------------------");
    
    let fairyTale = new FairyTale("Kate Simson", "2023-05-15", 50, "online", 10, "Alice wonderland", 8, "Alice");
    console.log(fairyTale.getInfo());
    console.log("Introduction:", fairyTale.getMainCharacterIntroduction());
    console.log("Is Suitable for Age 7:", fairyTale.isSuitableForAge(7));
    console.log("---------------------------------------------");
    
    let forbes = new Forbes("Some Author", "2022-01-01", 100, "online", 50, 50000000000, 1000000);
    console.log(forbes.getInfo());
    console.log("Is popular magazine:", forbes.isPopularMagazine());
    console.log("Readers Per Issue:", forbes.getReadersPerIssue());
    console.log("Is Widely Read:", forbes.isWidelyRead());
    console.log("---------------------------------------------");
    
    let vogue = new Vogue("Another Author", "2022-02-01", 80, "online", 40, 60, "Fashion Trends");
    console.log(vogue.dateValidation());
    console.log("Advertising percentage:", vogue.getAdvertisingPercentage());
    console.log("Fashion Theme:", vogue.getFashionThemeWithLength());
    console.log("Is Fashionable Magazine:", vogue.isFashionableMagazine());
    console.log("---------------------------------------------");   
}

function runHW16(){
    //выводит слово start
    console.log('start');

    //Создаёт новый Promise, который сразу же выполняется и выводится в консоль число 1
    //потом вызывается функция resolve с аргументом 2.
    const promise1 = new Promise((resolve, reject) => {
        console.log(1);
        resolve(2);
    })

    //Добавляет обработчик успешного выполнения (then) к Promise promise1.
    //Когда promise1 выполнится успешно, то есть когда будет вызван resolve, будет выведено в консоль значение 2.
    promise1.then(res => {
        console.log(res);
    })

    //выводит слово end
    console.log('end');

    // Результат: 
    //start
    // 1
    // 2
    // end

// создает Promise, которое сразу выполняется со значением 1
    Promise.resolve(1)
        // добавляет обработчик, который прибавляет 1 к значению 1 и передает результат в следующий обработчик (2)
		.then((x) => x + 1)
        // добавляет обработчик, который бросает ошибку
		.then((x) => { throw new Error('My Error') })
        // добавляет обработчик для перехвата ошибки, который возвращает значение 1
		.catch(() => 1)
        // добавляет обработчик, который прибавляет 1 к значению 1 (возвращенному из предыдущего обработчика) (2)
		.then((x) => x + 1)
        // добавляет обработчик для вывода значения в консоль
		.then((x) => console.log(x))
        // добавляет обработчик для перехвата любых ошибок и вывода их в консоль
		.catch(console.error)

        //Результат: 2


        // создается promise, которое сразу же завершается успешно с результатом 2
        const promise = new Promise(res => res(2));
        promise.then(v => {
                // выводит 2 в консоль
                console.log(v);
                // делает умножение, результат 4
                return v * 2;
            })
            .then(v => {
                // выводит 4 в консоль
                console.log(v);
                // умножает (8)
                return v * 2;
            })
            .finally(v => {
                // Метод finally вызывается всегда, независимо от успешного или неуспешного завершения обещания.
                // но лн не получает аргументов, и его обратный вызов не возвращает никакого значения
                // выводит undefined в консоль
                console.log(v);
                return v * 2;
            })
            .then(v => {
                // выводит 8 в консоль
                console.log(v);
            });

            // Результат:
            // 2
            // 4
            // undefined
            // 8
}