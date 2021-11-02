let x = 0;
let y = 0;
let z = 600851475143 / 2;
let i = 2;
const isPrime = (p) => {
	if (p <= 1) return false;
	if (p === 2) return true;
	if (p % 2 === 0) return false;
	for (let i = 3; i < Math.sqrt(p); i += 2) if (p % i === 0) return false;
	return true;
};
const findLargestPrimeFactor = (n) => {
	while (i <= z) {
		x = n / i;
		y = Math.floor(x);
		if (x === y) {
			if (isPrime(x)) return x;
		}
		i++;
	}
	return -1;
};
console.log(findLargestPrimeFactor(600851475143));
