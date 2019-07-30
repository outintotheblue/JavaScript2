'use strict';

/* function doubleOddNumbers(numbers) {
  // Replace this comment and the next line with your code
  console.log(numbers);
}

const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers));

// Do not change or remove anything below this line
module.exports = {
  myNumbers,
  doubleOddNumbers,
}; */


function doubleOddNumbers(numbers) {
	const oddNumbers = numbers.filter(num => num % 2 !== 0);
	const doubleNumbers = oddNumbers.map(num => num * 2);
	return doubleNumbers;
}

const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers));

// Do not change or remove anything below this line
module.exports = {
	myNumbers,
	doubleOddNumbers,
}; 