/**
 * N Queens Puzzle
 * The N queens puzzle is the classic backtracking problem. The question is this:
 * You have an N by N board and N queens.
 * Write a function that returns the number of possible arrangements of the board where N queens can be placed on the board without threatening each other, i.e. no two queens share the same row, column, or diagonal
 */

const nQueens = (n, board = []) => {
	if (board.length === n) return 1;
	let count = 0;
	for (let i = 0; i < n; i++) {
		board.push(i);
		if (isValid(board)) count += nQueens(n, board);
		board.pop();
	}
	return count;
};

const isValid = (board = []) => {
	if (!board.length) return false;
	let lastRow = board.length - 1;
	let lastCol = board[board.length - 1];
	// check if the last added queen can attack any previously added queen
	for (let i = 0; i < lastRow; i++) {
		if (board[i] === lastCol || Math.abs(lastCol - board[i]) === lastRow - i) return false;
	}
	return true;
};

for (let i = 0; i < 9; i++) console.log(nQueens(i));
