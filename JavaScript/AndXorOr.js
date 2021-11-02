/**
 * Given an array A[] of N distinct elements. Let M1 and M2 be the smallest and the next smallest element in the interval [L,R] where 1<=L<=R<=N.
 * S = ((M1 AND M2) XOR (M1 OR M2)) AND (M1 XOR M2)
 * Your task is to find the maximum possible value of S.
 * PERSONAL NOTE: the above formula for S really boils down to just (M1 XOR M2).
 * Constraints:
 * 1 < N <= 10^6
 * 1 <= A[i] <= 10^9
 */

function andXorOr(a = []) {
	console.log(`\nandXorOr([${a}])`);
	// let max = a[0] ^ a[1];
	// let i = 1;
	// let j = 0;
	// while (i < a.length && j < i) {
	// 	let test = a[j] ^ a[i];
	// 	if (test > max) max = test;
	// }
	const hold = [];
	let max = a[0] ^ a[1];
	// for (let i = 0; i < a.length; i++) {
	for (let val of a) {
		// console.log("i:", i);
		// const curr = a[i];
		while (hold.length > 0) {
			const held = hold[hold.length - 1];
			const test = held ^ val;
			// console.log("test:", test);
			if (test > max) max = test;
			if (val < held) {
				hold.pop();
				// console.log(hold);
			} else break;
		}
		hold.push(val);
		// console.log(hold);
	}
	return max;
}
console.log("output:", andXorOr([7, 14]));
console.log("output:", andXorOr([7, 1, 2, 14]));
console.log("output:", andXorOr([1, 12, 14, 3]));
console.log("output:", andXorOr([1, 14, 5, 3]));
console.log("output:", andXorOr([9, 6, 3, 5, 2])); //output: 15 - TC: 0
