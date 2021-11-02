/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
	let cache = new Set();
	let num = n;
	console.log("n=", n);
	while (!cache.has(num)) {
		cache.add(num);
		// let s = `${num}`;
		// num = 0;
		// for(let i = 0; i < s.length; i++) {
		//     num += parseInt(s[i]) * parseInt(s[i]);
		// }
		let temp = num;
		num = 0;
		let x = 10;
		let y = 1;
		while (temp > 0) {
			console.log(`  temp=${temp} num=${num}`);
			const r = temp % x;
			const d = r / y;
			num += d * d;
			temp -= r;
			// temp /= 10;
			x *= 10;
			y *= 10;
		}
	}
	console.log(`num=${num} cache:`);
	console.log(cache);
	if (num === 1) return true;
	else return false;
};
console.log(isHappy(19));
