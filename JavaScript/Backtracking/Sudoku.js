/**
 * Sudoku
 * Here's the problem: solve a well-posed sudoku puzzle.
 */

const empty = 0;

// const isComplete = (board) => {
// 	for (let row of board) {
// 		for (let val of row) {
// 			if (val == empty) return false;
// 		}
// 	}
// 	return true;
// };

// const findFirstEmpty = (board) => {
// 	for (let i = 0; i < 9; i++) {
// 		for (let j = 0; j < 9; j++) {
// 			if (board[i][j] == empty) return [i, j];
// 		}
// 	}
// 	return false;
// };

// const duplicates = (arr) => {
// 	const c = new Map();
// 	for (let val of arr) {
// 		if (val !== empty) {
// 			if (c.has(val)) return true;
// 			c.set(val, true);
// 		}
// 	}
// 	return false;
// };

// const rowsValid = (board) => {
// 	for (let row of board) {
// 		if (duplicates(row)) return false;
// 	}
// 	return true;
// };

// const colsValid = (board) => {
// 	for (let i = 0; i < 9; i++) {
// 		const col = [];
// 		for (let j = 0; j < 9; j++) col.push(board[j][i]);
// 		if (duplicates(col)) return false;
// 	}
// 	return true;
// };

// const blocksValid = (board) => {
// 	for (let i = 0; i < 9; i += 3) {
// 		for (let j = 0; j < 9; j += 3) {
// 			const block = [];
// 			for (let k = 0; k < 3; k++) {
// 				for (let l = 0; l < 3; l++) block.push(board[i + k][j + l]);
// 			}
// 			if (duplicates(block)) return false;
// 		}
// 	}
// 	return true;
// };

// const validSoFar = (board) => {
// 	if (!rowsValid(board)) return false;
// 	if (!colsValid(board)) return false;
// 	if (!blocksValid(board)) return false;
// 	return true;
// };

// const sudoku = (board) => {
// 	if (!isComplete(board)) {
// 		const [r, c] = findFirstEmpty(board);
// 		for (let i = 1; i <= 9; i++) {
// 			board[r][c] = i;
// 			if (validSoFar(board)) {
// 				const result = sudoku(board);
// 				if (isComplete(result)) return result;
// 			}
// 			board[r][c] = empty;
// 		}
// 	}
// 	return board;
// };

class Cell {
	constructor(r = 0, c = 0) {
		this.r = r;
		this.c = c;
		this.sqId = Math.floor(this.r / 3) * 3 + Math.floor(this.c / 3);
	}
	getNext() {
		let r = this.r;
		let c = this.c + 1;
		if (c === 9) {
			c = 0;
			r++;
		}
		if (r === 9) return null;
		return new Cell(r, c);
	}
}

const sudoku = (board) => {
	const rowSets = [];
	const colSets = [];
	const sqSets = [];
	for (let i = 0; i < 9; i++) {
		const rowSet = new Set();
		const colSet = new Set();
		const sqSet = new Set();
		rowSets.push(rowSet);
		colSets.push(colSet);
		sqSets.push(sqSet);
	}
	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			if (board[i][j] != empty) {
				rowSets[i].add(board[i][j]);
				colSets[j].add(board[i][j]);
				const sqId = Math.floor(i / 3) * 3 + Math.floor(j / 3);
				sqSets[sqId].add(board[i][j]);
			}
		}
	}

	const findNextEmptyCell = (startCell) => {
		if (startCell !== null) {
			for (let k = startCell.c; k < 9; k++) {
				if (board[startCell.r][k] == empty) return new Cell(startCell.r, k);
			}
			for (let i = startCell.r + 1; i < 9; i++) {
				for (let j = 0; j < 9; j++) {
					if (board[i][j] == empty) return new Cell(i, j);
				}
			}
		}
		return null;
	};

	const solve = (currentCell) => {
		if (currentCell === null) return true;
		if (board[currentCell.r][currentCell.c] != empty)
			currentCell = findNextEmptyCell(currentCell.getNext());
		for (let i = 1; i < 10; i++) {
			if (
				rowSets[currentCell.r].has(i) ||
				colSets[currentCell.c].has(i) ||
				sqSets[currentCell.sqId].has(i)
			)
				continue;
			board[currentCell.r][currentCell.c] = i;
			rowSets[currentCell.r].add(i);
			colSets[currentCell.c].add(i);
			sqSets[currentCell.sqId].add(i);
			if (solve(findNextEmptyCell(currentCell.getNext()))) return true;
			else {
				board[currentCell.r][currentCell.c] = 0;
				rowSets[currentCell.r].delete(i);
				colSets[currentCell.c].delete(i);
				sqSets[currentCell.sqId].delete(i);
			}
		}
		return false;
	};

	solve(new Cell());
	return board;
};

const testBoard = [
	[5, 3, 0, 0, 7, 0, 0, 0, 0],
	[6, 0, 0, 1, 9, 5, 0, 0, 0],
	[0, 9, 8, 0, 0, 0, 0, 6, 0],
	[8, 0, 0, 0, 6, 0, 0, 0, 3],
	[4, 0, 0, 8, 0, 3, 0, 0, 1],
	[7, 0, 0, 0, 2, 0, 0, 0, 6],
	[0, 6, 0, 0, 0, 0, 2, 8, 0],
	[0, 0, 0, 4, 1, 9, 0, 0, 5],
	[0, 0, 0, 0, 8, 0, 0, 7, 9],
];
console.log(sudoku(testBoard));
