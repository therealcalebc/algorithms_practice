const getFactor = (n) => {
	// console.log(`    getFactor(${n})`);
	let s = Math.sqrt(n);
	let q = Math.floor(s);
	let r = Math.ceil(s);
	// console.log(`    getFactor: s = ${s}, r = ${r}, q = ${q}`);
	if (q === r) return q;
	while (q >= 2 && r <= n / 2) {
		if (n % q === 0) return q;
		if (n % r === 0) return r;
		q--;
		r++;
		// console.log(`    getFactor: r = ${r}, q = ${q}`);
	}
	return n;
};
const powHelper = (x, n, acc) => {
	console.log(`  powHelper(${x}, ${n}, ${acc})`);
	if (acc === 0) return 0;
	if (n === 1) return acc;
	if (n < 4) return powHelper(x, n - 1, acc * x);
	const y = getFactor(n);
	// console.log(`  powHelper: y = ${y}`);
	if (y === n) return powHelper(x, n - 1, acc * x);
	const z = powHelper(x, y, x);
	if (z === 0) return 0;
	console.log(`  powHelper: z = ${z}`);
	const result = powHelper(z, n / y, z) * (acc / x);
	// console.log(`  powHelper: result = ${result}`);
	return result;
};
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const myPow = (x, n) => {
	// console.log(`myPow(${x}, ${n})`);
	if (x === 0) return 0;
	if (n === 0) return 1;
	if (n < 0) {
		n = -1 * n;
		x = 1 / x;
	}
	return powHelper(x, n, x);
};
console.log(myPow(0.00001, 2147483647)); // 0
// console.log(myPow(3, 6)); // 729
// console.log(myPow(3, 7)); // 2187
// console.log(myPow(1.72777, 7)); // 45.96227
// console.log(myPow(1.99364, 11)); // 1977.48922
