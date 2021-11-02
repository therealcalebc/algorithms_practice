class primeNode {
	constructor(num) {
		this.number = num;
		this.pairsWith = new Set();
	}
}

//array to hold primes
// const primes = [new primeNode(2), new primeNode(3), new primeNode(5)];
const primes = [2];
const pairs = [[0]];
//starting number for finding primes
let c = 3;
//array to hold pairs set
// const pairsSetBase = [3, 7];
const pairsSet = [];
// const pairsSetBase = [3, 7, 109, 673];
// const possiblePairsSet = [3, 7, 109, 673];
// const primesIdxOfLastBasePair = 122;

//function to find the prime factors of a number, returned as an array
// const getFactors = (n) => {
// 	let result = [];
// 	for (let i = 0; i < primes.length; i++) {
// 		while (n % primes[i] === 0) {
// 			result.push(primes[i]);
// 			n = n / primes[i];
// 		}
// 	}
// 	return result;
// };
const getUniqueFactors = (n) => {
	// console.log(`    getUniqueFactors(${n})`);
	let result = [];
	for (let i = 0; i < primes.length; i++) {
		// console.log(`      primes[${i}]: ${primes[i]}`);
		// console.log(`      ${n} % ${primes[i]} = ${n % primes[i]}`);
		if (n % primes[i] === 0) result.push(primes[i]);
		while (n % primes[i] === 0) n = n / primes[i];
		if (n < primes[i]) break;
	}
	if (n > 1) result.push(n);
	return result;
};

const powerMod = (a, m, n) => {
	let total = a;
	for (let i = 1; i < m; i++) total = (total * a) % n;
	return total;
};

const newRandomA = (n) => {
	return Math.floor(Math.random() * (n - 2)) + 2;
};

//function to perform Lucas Primality Test
const isPrime = (n) => {
	// console.log(`  isPrime(${n})?`);
	// let a = Math.round(n / 2);
	let a = 0;
	const checked = {};
	// test random numbers from 2 to n-1, all in range if necessary
	// track which have been tested so no duplicate tests
	for (let i = 2; i < n; i++) {
		do {
			a = newRandomA(n);
		} while (checked.hasOwnProperty(a));
		checked[a] = true;
		let m = n - 1;
		let test1 = powerMod(a, m, n);
		// console.log(`    a: ${a}, m: ${m}, test1 = ${test1}`);
		if (test1 != 1) return false;
		// if (Math.pow(a, m) % n != 1) return false;
		let factors = getUniqueFactors(m);
		// console.log(`    factors: [${factors}]`);
		let flag = true;
		for (let j = 0; j < factors.length; j++) {
			// if (Math.pow(a, m / factors[i]) % n == 1) return false;
			let test2 = powerMod(a, m / factors[j], n);
			// console.log(`    test2: ${test2}`);
			if (test2 == 1) {
				flag = false;
				break;
			}
		}
		if (flag) return true;
	}
	return false;
};

const haveParity = (n, p) => {
	if (!isPrime(parseInt(`${p}${n}`))) return false;
	if (!isPrime(parseInt(`${n}${p}`))) return false;
	return true;
};

const checkPairs = (pN1, pN2) => {
	const commonSets = [];
	// const commonPairs = new Set();
	if (!pN1.pairsWith.has(pN2) && haveParity(pN1.number, pN2.number)) {
		pN1.pairsWith.add(pN2);
		// commonPairs.add(pN1);
		// commonPairs.add(pN2);
		for (let subP of pN2.pairsWith) {
			let tempCommons = checkPairs(pN1, subP);
			if (tempCommons.length > 0) {
				for (const s of tempCommons) {
					const tempSet = new Set();
					tempSet.add(pN2);
					for (const t of s) {
						if (pN2.pairsWith.has(t)) tempSet.add(t);
					}
					if (tempSet.length > 1) commonSets.push(tempSet);
				}
			}
			// if (pN1.pairsWith.has(subP)) commonPairs.add(subP);
		}
	}
	return commonSets;
};

//count upwards checking if each number is a multiple of any of the prime numbers already found, add to our list of primes if it is not
// while (primes[primes.length - 1] < 3000) {
while (c < 3000) {
	let p = c;
	for (let i = 0; i < primes.length; i++) {
		if (p % primes[i] == 0) {
			c++;
			break;
		}
	}
	if (p == c) {
		console.log(p);
		primes.push(p);
		pairs.push([]);
		// const temp = new primeNode(p);
		// for (let i = 0; i < primes.length; i++) {
		// 	if (haveParity(primes[i].number, temp.number)) {
		// 		primes[i].pairsWith[primes[i].pairsWith.length] = temp;
		// 		temp.pairsWith.push(primes[i]);
		// 	}
		// }
		// primes.push(temp);
		c++;
	}
}
console.log(`last prime: ${primes[primes.length - 1]}`);

for (let i = 1; i < primes.length - 1; i++) {
	for (let j = i + 1; j < primes.length; j++) {
		if (haveParity(primes[i], primes[j])) pairs[i].push(j);
	}
}
console.log("...found all pairs...");
primes.sort********************************************

// const intersectionOf(a1, a2) {
// 	let result = [];
// 	let i = 0;
// 	let j = 0;
// 	while(i<a1.length && j < a2.length) {
// 		if(a1[i] < a2[j]) i++;
// 		else if(a1[i] > a2[j]) j++;
// 		else {
// 			result.push(a1[i]);
// 			i++;
// 			j++;
// 		}
// 	}
// 	return result;
// }

// let quintuples = [];
// for(let i = 1; i < primes.length-4; i++) {
// 	let quintuple = [];
// 	for(let j = i+1; j < primes.length-3; j++) {
// 		if(pairs[i].includes(j)) {
// 			// let commons = [primes[i], primes[j]];
// 			let commons1 = intersectionOf(pairs[i], pairs[j]);
// 			if(commons1.length < 3) break;
// 			for(let k = 0; k < commons1.length; k++) {
// 				let commons2 = intersectionOf(commons1, pairs[commons1[k]]);
// 				if(commons2.length < 2) break;
// 				for(let l = 0; l < commons2.length; l++) {
// 					let commons3 = intersectionOf(commons2, pairs[commons2[l]]);
// 					if(commons3.length < 1) break;
// 					commons[2] = primes[commons1[k]];
// 					commons[3] = primes[commons2[l]];
// 					commons[4] = primes[commons3[0]];
// 					quintuples.push([primes[i], primes[j], primes[commons1[k]], primes[commons2[l]], primes[commons3[0]]]);
// 				}
// 			}
// 			// commons = [...commons, ...commons1];
// 		}
// 	}
// }
// console.log[quintuples];

//count upwards checking if each number is a multiple of any of the prime numbers already found, add to our list of primes if it is not, then check if it can be part of the set
// while (pairsSet.length < 5) {
// 	let p = c;
// 	for (let i = 0; i < primes.length; i++) {
// 		if (p % primes[i].number == 0) {
// 			c++;
// 			break;
// 		}
// 	}
// 	if (p == c) {
// 		const temp = new primeNode(p);
// 		c++;
// 		for (let i = primes.length - 2; i > 0; i--) {
// 			let tempPairSets = checkPairs(temp, primes[i]);
// 			if (tempPairSets.length > 0) {
// 				for (const tempSet of tempPairSets) {
// 					if (tempSet.size >= 4) {
// 						let tempPairsSet = new Set();
// 						tempPairsSet.add(temp);
// 						for (const item of tempSet) {
// 							if (temp.pairsWith.has(item)) tempPairsSet.add(item);
// 						}
// 						if (tempPairsSet.size >= 5) {
// 							for (const item of tempPairsSet) pairsSet.push(item.number);
// 							break;
// 						}
// 					}
// 				}
// 				if (pairsSet.length >= 5) break;
// 			}
// 		}
// 		console.log(temp);
// 		primes.push(temp);
// 	}
// }

// console.log("last prime:");
// console.log(primes[primes.length - 1]);
// console.log(pairsSet);
// console.log(`sum: ${pairsSet.reduce((acc, curr) => acc + curr)}`);
