'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

function flattenArray2d(arr) {
	//	let arr2Flat = [].concat.apply([], arr2d);
	let arr2Flat = arr2d.flat();
	return arr2Flat;
}

function flattenArray3d(arr) {
	const newArr3 = [];
	// let arr3Flat = [].concat(...arr3d); Why is this not working?
	for (let i = 0; i < arr3d.length; i++) {
		for (let j = 0; j < arr3d[i].length; j++) {
			for (let k = 0; k < arr3d[i][j].length; k++) {
				newArr3.push(arr3d[i][j][k]);

			}
		}
	}
	return newArr3;

}

console.log(flattenArray2d(arr2d)); // -> [1, 2, 3, 4, 5, 6]
console.log(flattenArray3d(arr3d)); // -> [1, 2, 3, 4, 5, 6, 7, 8]

// Do not change or remove anything below this line
module.exports = {
	flattenArray2d,
	flattenArray3d,
};
