/**
 * Implement a simple text editor. The editor initially contains an empty string, S . Perform  operations of the following Q types:
 * append(W) - Append string W to the end of S.
 * delete(k) - Delete the last k characters of S.
 * print(k) - Print the kth character of S.
 * undo() - Undo the last (not previously undone) operation of type 1 or 2, reverting S to the state it was in prior to that operation.
 * Constraints:
 * 1 <= Q <= 10^6
 * 1 <= k <= |S|
 * The sum of the lengths of all W in the input <= 10^6.
 * The sum of k over all delete operations <= 2 * 10^6.
 * All input characters are lowercase English letters.
 * It is guaranteed that the sequence of operations given as input is possible to perform.
 * PERSONAL NOTE: The test program on HackerRank fed the input data to the function as one long, multi-line string directly from stdin, not on array of single-line strings for the individual operations like was shown in the example, so I had to modify the function to work right.
 */

/**
 * @param {string[]} input - list of operations to perform
 * @returns {undefined} nothing returned but each operation of type 3 must print the kth character on a new line.
 */
function processData(data) {
	const input = data.split("\n");
	var S = "";
	const undo = [];
	for (let i = 0; i < input.length; i++) {
		const op = input[i][0];
		let arg = "";
		if (input[i].length > 2) arg = input[i].substring(2);
		switch (op) {
			case "1": {
				S += arg;
				undo.push("6 " + arg.length);
				break;
			}
			case "2": {
				undo.push("5 " + S.substring(S.length - op[1]));
				S = S.substring(0, S.length - op[1]);
				break;
			}
			case "3": {
				console.log(S[arg - 1]);
				break;
			}
			case "4": {
				if (undo.length > 0) {
					input[i] = undo.pop();
					i--;
				}
				break;
			}
			case "5": {
				S += arg;
				break;
			}
			case "6": {
				S = S.substring(0, S.length - arg);
				break;
			}
		}
	}
}

// processData(["1 abcde", "1 fg", "3 6", "2 5", "4", "3 7", "4", "3 4"]);
processData("1 abcde\n1 fg\n3 6\n2 5\n4\n3 7\n4\n3 4");
