'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
	const numbers = [];

	for (let i = startIndex; i <= stopIndex; i++) {
		numbers.push(i);

		if (i % 3 === 0) {
			threeCallback(numbers);
		} if (i % 5 === 0) {
			fiveCallback(numbers);
		} if (i % 3 === 0 && i % 5 === 0) {
			threeCallback(numbers);
			fiveCallback(numbers);
		}
	}
}

function sayThree(number) {
	// Replace this comment and the next line with your code
	console.log(`This ${number} is divisible by 3`);
}

function sayFive(number) {
	// Replace this comment and the next line with your code
	console.log(`This ${number} is divisible by 5`);
}

threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
module.exports = threeFive;
