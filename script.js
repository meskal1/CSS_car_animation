'use strict';

const sum = 10 + 10;
const difference = 45 - 33;
const product = 8 * 10;
const quotient = 66 / 33;

let myVar = 87;
// Змініть код лише під цим рядком
myVar++;

let myVar = 87;
// Змініть код лише під цим рядком
myVar--;

function checkScope() {
	let i = 'function scope';
	if (true) {
		let i = 'block scope';
		console.log('Block scope i is: ', i);
	}
	console.log('Function scope i is: ', i);
	return i;
}

const s = [5, 7, 2];
function editInPlace() {
	// Only change code below this line
	// return s.sort((a,b)=> a-b);
	s[0] = 2;
	s[1] = 5;
	s[2] = 7;
	// Using s = [2, 5, 7] would be invalid
	// Only change code above this line
}
editInPlace();

function freezeObj() {
	const MATH_CONSTANTS = {
		PI: 3.14
	};
	// Only change code below this line
	Object.freeze(MATH_CONSTANTS);
	// Only change code above this line
	try {
		MATH_CONSTANTS.PI = 99;
	} catch (ex) {
		console.log(ex);
	}
	return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

const magic = () => new Date();

const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));

// Only change code below this line
const increment = (number, value = 1) => number + value;
// Only change code above this line

const sum = (...args) => {
	return args.reduce((a, b) => a + b, 0);
}

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
arr2 = [...arr1];  // Change this line
console.log(arr2);

const HIGH_TEMPERATURES = {
	yesterday: 75,
	today: 77,
	tomorrow: 80
};
// Only change code below this line 
const { today, tomorrow } = HIGH_TEMPERATURES;
// Only change code above this line

const HIGH_TEMPERATURES = {
	yesterday: 75,
	today: 77,
	tomorrow: 80
};
// Only change code below this line	
const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;
// Only change code above this line

const LOCAL_FORECAST = {
	yesterday: { low: 61, high: 75 },
	today: { low: 64, high: 77 },
	tomorrow: { low: 68, high: 80 }
};
// Only change code below this line
const { today: { low: lowToday, high: highToday } } = LOCAL_FORECAST;
// Only change code above this line

let a = 8, b = 6;
// Only change code below this line
[b, a] = [a, b];

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
	// Only change code below this 
	const [a, b, ...arr] = list; // Change this line
	// Only change code above this line
	return arr;
}
const arr = removeFirstTwo(source);

const stats = {
	max: 56.78,
	standard_deviation: 4.34,
	median: 34.54,
	mode: 23.87,
	min: -0.75,
	average: 35.85
};
// Only change code below this line
const half = ({ max, min }) => (max + min) / 2;
// Only change code above this line

const result = {
	success: ["max-length", "no-amd", "prefer-arrow-functions"],
	failure: ["no-var", "var-on-top", "linebreak"],
	skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
	// Only change code below this line
	const failureItems = [];
	for (let i of arr)
		failureItems.push(`<li class="text-warning">${i}</li>`);
	// Only change code above this line
	return failureItems;
}
const failuresList = makeList(result.failure);

const createPerson = (name, age, gender) => {
	// Only change code below this line
	return { name, age, gender };
	// Only change code above this line
};

// Only change code below this line
const bicycle = {
	gear: 2,
	setGear(newGear) {
		this.gear = newGear;
	}
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);