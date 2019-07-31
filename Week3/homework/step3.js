'use strict';

function createBase(base) {
	let sum6 = function (add6) {
		return base + add6;
	};
	return sum6;
}

const addSix = createBase(6);

console.log(addSix(10)); // returns 16
console.log(addSix(21)); // returns 27

// Do not change or remove anything below this line
module.exports = createBase;
