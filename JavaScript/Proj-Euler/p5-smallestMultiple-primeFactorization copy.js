//Prime Factorization method

//array of numbers 11-20
let nums = [];
for (let i = 0; i < 10; i++) {
	nums[i] = i + 11;
}
console.log(nums);

//functions to check if a number is prime, returns boolean
const isPrime = (p) => {
	if (p <= 1) return false;
	if (p === 2) return true;
	if (p % 2 === 0) return false;
	for (let i = 3; i < Math.sqrt(p); i += 2) if (p % i === 0) return false;
	return true;
};

//function to find the factors of a number, returned as an array
const getFactors = (n) => {
	let factors = [];
	while (n % 2 === 0) {
		factors.push(2);
		n = n / 2;
	}
	while (n % 3 === 0) {
		factors.push(3);
		n = n / 3;
	}
	while (n % 5 === 0) {
		factors.push(5);
		n = n / 5;
	}
	while (n % 7 === 0) {
		factors.push(7);
		n = n / 7;
	}
	return factors;
};

//iterate through array of numbers, replace each number with array of it's factors
for (let i = 0; i < nums.length; i++) {
	if (isPrime(nums[i])) nums[i] = [nums[i]];
	else nums[i] = getFactors(nums[i]);
}

console.log(nums);

//populate object to hold the prime factors of the number set, for factors that occur more than once only include it the number of times that it appears for whichever number it appears the most times
factors = {};
for (let i = 0; i < nums.length; i++) {
	let count = 1;
	for (let j = 1; j < nums[i].length; j++) {
		if (nums[i][j] == nums[i][j - 1]) count++;
		else {
			if (!factors.hasOwnProperty(nums[i][j - 1]) || factors[nums[i][j - 1]] < count)
				factors[nums[i][j - 1]] = count;
			count = 1;
		}
	}
	if (
		!factors.hasOwnProperty(nums[i][nums[i].length - 1]) ||
		factors[nums[i][nums[i].length - 1]] < count
	)
		factors[nums[i][nums[i].length - 1]] = count;
}
console.log(factors);

//multiply all the prime factors together to get the lowest common multiple
let lcm = 1;
let keys = Object.keys(factors);
for (let i = 0; i < keys.length; i++) lcm *= Math.pow(keys[i], factors[keys[i]]);
console.log(lcm);
