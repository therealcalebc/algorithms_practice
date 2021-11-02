//array to hold primes
const primes = [
	2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97,
];
//starting number for finding primes
let c = 100;
//array to hold pairs set
// const pairsSetBase = [3, 7];
const pairsSet = [];
const pairsSetBase = [3, 7, 109, 673];
const possiblePairsSet = [3, 7, 109, 673];
const primesIdxOfLastBasePair = 122;

//function to find the prime factors of a number, returned as an array
const getFactors = (n) => {
	let result = [];
	for (let i = 0; i < primes.length; i++) {
		while (n % primes[i] === 0) {
			result.push(primes[i]);
			n = n / primes[i];
		}
	}
	return result;
};
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

// const hasParity = (n) => {
// 	for (let i = 0; i < pairsSetBase.length; i++) {
// 		if (!isPrime(parseInt(`${pairsSetBase[i]}${n}`))) return false;
// 		if (!isPrime(parseInt(`${n}${pairsSetBase[i]}`))) return false;
// 	}
// 	return true;
// };

const pairingTest = (n) => {
	// console.log(`pairingCandidate(${n})`);
	let result = {
		candidate: false,
		matches: [false, false, false, false],
		matchQty: 0,
		number: n,
	};
	for (let i = 0; i < pairsSetBase.length; i++) {
		let x = parseInt(`${pairsSetBase[i]}${n}`);
		let y = parseInt(`${n}${pairsSetBase[i]}`);
		// console.log(`- x: ${x}, y: ${y}`);
		let xP = isPrime(x);
		let yP = isPrime(y);
		// console.log(`--xP: ${xP}, yP: ${yP}`);
		// if (xP && yP) return true;
		// if (isPrime(x) && isPrime(y)) return true;
		if (xP && yP) {
			result.candidate == true;
			result.matches[i] == true;
			result.matchQty += 1;
		}
	}
	// return false;
	return result;
};

const goodMatches = (p, q) => {
	if (p.matchQty > q.matchQty) return false;
	let goodMatch = true;
	for (let i = 0; i < 4; i++) {
		if ((p.matches[i] && q.matches[i]) || !p.matches[i]) continue;
		goodMatch = false;
		break;
	}
	return goodMatch;
};

// const findPairables = (x) => {
// 	const pairables = [];
// 	for(let i = x-1; i >= 0; i++) {
// 		if(haveParity(possiblePairsSet[x], possiblePairsSet[i]) )
// 	}
// }

//count upwards checking if each number is a multiple of any of the prime numbers already found, add to our list of primes if it is not, then check if it can be part of the set
while (pairsSet.length < 5) {
	// while (primes.length < 30) {
	let p = c;
	for (let i = 0; i < primes.length; i++) {
		if (p % primes[i] == 0) {
			c++;
			break;
		}
	}
	if (p == c) {
		primes.push(p);
		c++;
		if (primes.length > primesIdxOfLastBasePair) {
			// if (hasParity(p)) {
			// 	possiblePairsSet.push(p);
			// 	break;
			// }
			let primeX = pairingTest(p);
			if (primeX.candidate) {
				if (primeX.matchQty == 4) {
					pairsSet = [...pairsSetBase, p];
					break;
				}
				possiblePairsSet.push(primeX);
				if (possiblePairsSet.length >= 5 - primeX.matchQty) {
					let testSet = [];
					let foundAll = false;
					let t = 0;
					// while(pairsSet.length <= primeX.matchQty) {}
					for (let i = 0; i < possiblePairsSet.length - 1; i++) {
						if (haveParity(primeX.number, possiblePairsSet[i].number)) {
							// && primeX.matchQty <= possiblePairsSet[i].matchQty)) {
							// let goodMatch = true;
							// for(let j = 0; j < 4; j++) {
							// 	if (
							// 		(primeX.matches[j] && possiblePairsSet[i].matches[j]) ||
							// 		!primeX.matches[j]
							// 	)
							// 		continue;
							// 	goodMatch = false;
							// 	break;
							// }
							if (goodMatches(primeX, possiblePairsSet[i])) {
								if (primeX.matchQty == 3) {
									for (let j = 0; j < 4; j++)
										if (primeX.matches[j]) pairsSet.push(pairsSetBase[j]);
									pairsSet.push(possiblePairsSet[i].number);
									pairsSet.push(p);
									foundAll = true;
									break;
								} else if (primeX.matchQty == 2) {
									if (testSet.length > 0) {
										for (let j = testSet.length - 1; j >= 0; j--) {
											if (
												haveParity(
													possiblePairsSet[i].number,
													testSet[j].number
												) &&
												goodMatches(possiblePairsSet[i], testSet[j])
											) {
												for (let k = 0; k < 4; k++)
													if (primeX.matches[k])
														pairsSet.push(pairsSetBase[k]);
												pairsSet.push(testSet[j].number);
												pairsSet.push(possiblePairsSet[i].number);
												pairsSet.push(p);
												foundAll = true;
												break;
											}
										}
									}
									if (foundAll) break;
									testSet.push(possiblePairsSet[i]);
								} else {
									// primeX.matchQty == 1
									if (testSet.length > 1) {
										for (let j = testSet.length - 1; j > 0; j--) {
											if (
												haveParity(
													possiblePairsSet[i].number,
													testSet[j].number
												) &&
												goodMatches(possiblePairsSet[i], testSet[j])
											) {
												for (let l = j - 1; l >= 0; l--) {
													if (
														haveParity(
															testSet[j].number,
															testSet[l].number
														) &&
														goodMatches(testSet[j], testSet[l])
													) {
														if (
															haveParity(
																possiblePairsSet[i].number,
																testSet[l].number
															) &&
															goodMatches(
																possiblePairsSet[i],
																testSet[l]
															)
														) {
															for (let k = 0; k < 4; k++)
																if (primeX.matches[k])
																	pairsSet.push(pairsSetBase[k]);
															pairsSet.push(testSet[l].number);
															pairsSet.push(testSet[j].number);
															pairsSet.push(
																possiblePairsSet[i].number
															);
															pairsSet.push(p);
															foundAll = true;
															break;
														}
													}
												}
											}
											if (foundAll) break;
										}
									}
									if (foundAll) break;
									testSet.push(possiblePairsSet[i]);
								}
							}
						}
					}
				}
			}
			// console.log();
		}
		// if(primes.length > 5) {
		// 	const testSet = [p];
		// 	const pointers = [0,1]
		// 	// const pointers = [0,1,2,3,4]
		// 	// for(let i = 1; i < 5; i++) testSet.push(primes[pointers[i]]);
		// 	while(pointers[1] <= primes.length-5){
		// 		testSet[1] = primes[pointers[1]];
		// 		pointers[2] = pointers[1]+1;
		// 		while(pointers[2] <= primes.length-4) {
		// 			testSet[2] = primes[pointers[2]];
		// 			pointers[3] = pointers[2]+1;
		// 			while(pointers[3] <= primes.length-3) {
		// 				testSet[3] = primes[pointers[3]];
		// 				pointers[4] = pointers[3]+1;
		// 				while(pointers[4] <= primes.length-2) {
		// 					testSet[4] = primes[pointers[4]];
		// 					/*test set...*/
		// 					if(/*testSet is good*/) break;
		// 					pointers[4]++;
		// 				}
		// 				if(/*testSet is good*/) break;
		// 				pointers[3]++;
		// 			}
		// 			if(/*testSet is good*/) break;
		// 			pointers[2]++;
		// 		}
		// 		if(/*testSet is good*/) break;
		// 		pointers[1]++;
		// 	}

		// 	for(let i = 4; i > 0; i--) {
		// 		for(j = pointers[i]; j < primes.length-(5-i); j++) {
		// 			testSet[pointers[i]] = primes[j];
		// 		}
		// 	}
		// }
	}
}
console.log(primes);
console.log(`last prime: ${primes[primes.length - 1]}`);
// console.log(`sum: ${pairsSetBase.reduce((acc, curr) => acc + curr)}`);
console.log(`sum: ${possiblePairsSet.reduce((acc, curr) => acc + curr)}`);
