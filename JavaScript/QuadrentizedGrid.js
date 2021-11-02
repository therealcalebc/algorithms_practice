/**
 * A Function to calculate (return) the value for a given point on a square grid such that when the grid is fully populated the lowest value(s) are in the lower left and increase incrementally as you progress through the quadrents in a clockwise manner, and the values in the cells of the quadrants of any square portion of the grid follow the same pattern
 *
 * examples:
 *
 *  1 2
 *  0 3
 *
 *  5 6  9 10
 *  4 7  8 11
 *  1 2 13 14
 *  0 3 12 15
 */

// const getValue = (row, col, gridSize) => {
// 	if (gridSize == undefined) gridSize = Math.pow(2, 16);
// 	else if (gridSize === 2) {
// 		if (row === 1 && col === 1) return 0;
// 		if (row === 2 && col === 1) return 1;
// 		if (row === 2 && col === 2) return 2;
// 		if (row === 1 && col === 2) return 3;
// 	}
// 	let rOffset = 0;
// 	let cOffset = 0;
// 	const quadrantSize = gridSize / 2;
// 	if (row > quadrantSize) rOffset = quadrantSize;
// 	if (col > quadrantSize) cOffset = quadrantSize;
// 	let tempVal = getValue(row - rOffset, col - cOffset, gridSize / 2);
// 	if (!rOffset && !cOffset) return tempVal;
// 	if (rOffset && !cOffset) return tempVal + quadrantSize * quadrantSize;
// 	if (rOffset && cOffset) return tempVal + quadrantSize * quadrantSize * 2;
// 	if (!rOffset && cOffset) return tempVal + quadrantSize * quadrantSize * 3;
// };
const getValue = (row, col, gridSize) => {
	if (gridSize == undefined) gridSize = 16;
	else if (gridSize === 1) {
		if (row === 1 && col === 1) return 0;
		if (row === 2 && col === 1) return 1;
		if (row === 2 && col === 2) return 2;
		if (row === 1 && col === 2) return 3;
	}
	let rOffset = 0;
	let cOffset = 0;
	const quadrantSize = Math.pow(2, gridSize) / 2;
	if (row > quadrantSize) rOffset = quadrantSize;
	if (col > quadrantSize) cOffset = quadrantSize;
	let tempVal = getValue(row - rOffset, col - cOffset, gridSize - 1);
	if (!rOffset && !cOffset) return tempVal;
	if (rOffset && !cOffset) return tempVal + quadrantSize * quadrantSize;
	if (rOffset && cOffset) return tempVal + quadrantSize * quadrantSize * 2;
	if (!rOffset && cOffset) return tempVal + quadrantSize * quadrantSize * 3;
};

const x = 3;
const grid = new Array(Math.pow(2, x));
for (let i = 0; i < grid.length; i++) {
	const row = new Array(Math.pow(2, x));
	for (let j = 0; j < row.length; j++) {
		row[j] = getValue(i + 1, j + 1, x);
	}
	grid[i] = row;
}
for (let i = grid.length; i >= 0; i--) console.log(grid[i]);
