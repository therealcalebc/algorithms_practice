const isPalindrome = (n) => {
	for (let i = 0; i <= n.length / 2; i++) if (n[i] != n[n.length - 1 - i]) return false;
	return true;
};
const findLargestPalindromeProduct = () => {
	// let i = 1000;
	// let j = 1000;
	let p = 0;
	let x = 0;
	for (let i = 999; i > 99; i--) {
		for (let j = 999; j > 99; j--) {
			p = i * j;
			if (isPalindrome(`${p}`)) if (p > x) x = p;
		}
	}
	return x;
	// while (i > 0 && j > 0) {
	// 	if (isPalindrome(`${p}`)) {
	// 		console.log(`i: ${i}, j: ${j}`);
	// 		return p;
	// 	}
	// 	i--;
	// 	p = i * j;
	// 	if (isPalindrome(`${p}`)) {
	// 		console.log(`i: ${i}, j: ${j}`);
	// 		return p;
	// 	}
	// 	j--;
	// 	p = i * j;
	// }
};
console.log(findLargestPalindromeProduct());
