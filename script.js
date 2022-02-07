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
const increment = (number, value=1) => number + value;
// Only change code above this line

