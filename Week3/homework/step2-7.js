'use strict';

const x = 9;
function f1(val) {
	val = val + 1;
	return val;
}

f1(x);

console.log(x);

const y = { x: 9 };
function f2(val) {
	val.x = val.x + 1;
	return val;
}

f2(y);

console.log(y);

// Add your explanation as a comment here
// first example returns 9: x is a constant in the first example and cant change its value? 
//second example is {x: 10}: Constants cant be changed, but in this case it is an object and arrays and objects can be change when assigned to a constant.