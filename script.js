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