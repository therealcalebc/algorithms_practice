/**
 * You are a waiter at a party. There is a pile of numbered plates. Create an empty answers array. At each iteration, i, remove each plate from the top of the stack in order. Determine if the number on the plate is evenly divisible by the i'th prime number. If it is, stack it in pile B. Otherwise, stack it in stack A. Store the values in B from top to bottom in answers. In the next iteration, do the same with the values in stack A. Once the required number of iterations is complete, store the remaining values in A in answers, again from top to bottom. Return the answers array.
 * Example:
 * A = [2, 3, 4, 5, 6, 7]
 * q = 3
 * answers (output) = [2, 4, 6, 3, 5, 7]
 * Constrants:
 * 1 <= n <= 5*10^4
 * 2 <= number[i] <= 10^4
 * 1 <= q <= 1200
 */

/**
 * @param {number[]} number - array (stack) of numbers (numbered plates)
 * @param {number} q - number of iterations
 * @output {number} array of answers
 */
//my first attempt, using stacks - passed
function waiter(number, q) {
	const primes = [2];
	let count = 1;
	let n = 3;
	while (count < q) {
		const x = n;
		for (let i = 0; i < count; i++) {
			if (n % primes[i] > 0) continue;
			n++;
			break;
		}
		if (x === n) {
			primes.push(x);
			count++;
			n++;
		}
	}
	let numbers = number;
	const answers = [];
	for (let i = 0; i < q; i++) {
		const a = [];
		const b = [];
		while (numbers.length > 0) {
			const n = numbers.pop();
			if (n % primes[i] > 0) a.push(n);
			else b.push(n);
		}
		while (b.length > 0) answers.push(b.pop());
		numbers = a;
	}
	while (numbers.length > 0) answers.push(numbers.pop());
	return answers;
}

console.log(waiter([2, 3, 4, 5, 6, 7], 3)); //output: [2, 4, 6, 3, 5, 7] - TC: Ex.
console.log(waiter([3, 4, 7, 6, 5], 1)); //output: [4, 6, 3, 7, 5] - TC: 0
console.log(waiter([3, 3, 4, 4, 9], 2)); //output: [4, 4, 9, 3, 3] - TC: 1

//my second attempt, a mathy solution - passed
function waiter2(number, q) {
	const primes = [2];
	let count = 1;
	let n = 3;
	while (count < q) {
		const x = n;
		for (let i = 0; i < count; i++) {
			if (n % primes[i] > 0) continue;
			n++;
			break;
		}
		if (x === n) {
			primes.push(x);
			count++;
			n++;
		}
	}
	primes.push(1);
	const lenN = number.length;
	const lenP = primes.length;
	let tempAnswers = new Array(lenP);
	for (let i = 0; i < lenP; i++) tempAnswers[i] = [];
	for (let i = 0; i < lenN; i++) {
		for (let j = 0; j < lenP; j++) {
			if (number[i] % primes[j] > 0) continue;
			tempAnswers[j].push(number[i]);
			break;
		}
	}
	let answers = tempAnswers[0];
	for (let i = 1; i < tempAnswers.length - 1; i++) {
		if (i % 2 > 0) {
			for (let j = tempAnswers[i].length - 1; j >= 0; j--) answers.push(tempAnswers[i][j]);
		} else {
			for (let j = 0; j < tempAnswers[i].length; j++) answers.push(tempAnswers[i][j]);
		}
	}
	if (q % 2 === 0) {
		for (let j = tempAnswers[q].length - 1; j >= 0; j--) answers.push(tempAnswers[q][j]);
	} else {
		for (let j = 0; j < tempAnswers[q].length; j++) answers.push(tempAnswers[q][j]);
	}
	return answers;
	// const getNextPrime = (p) => {
	// 	if(p > primes.length) {
	// 		let count = primes.length;
	// 		let n = primes[count-1]+1;
	// 		while(count < p) {
	// 			const x = n;
	// 			for(let i = 0; i < count; i++) {
	// 				if(n % primes[i] > 0) continue;
	// 				n++;
	// 				break;
	// 			}
	// 			if(x === n) {
	// 				primes.push(x);
	// 				count++;
	// 				n++;
	// 			}
	// 		}
	// 	}
	// 	return primes[p-1];
	// }
}

console.log(waiter2([2, 3, 4, 5, 6, 7], 3)); //output: [2, 4, 6, 3, 5, 7] - TC: Ex.
console.log(waiter2([3, 4, 7, 6, 5], 1)); //output: [4, 6, 3, 7, 5] - TC: 0
console.log(waiter2([3, 3, 4, 4, 9], 2)); //output: [4, 4, 9, 3, 3] - TC: 1
