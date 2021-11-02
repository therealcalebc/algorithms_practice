//array to hold primes
const primes = [2];
//variable to hold sum
let sum = 2;
//starting number
let i = 3;
//count upwards checking if each number is a multiple of any of the prime numbers already found, add to our list of primes if it is not, add to sum
while (i < 2000000) {
	let p = i;
	for (let j = 0; j < primes.length; j++) {
		if (p % primes[j] == 0) {
			i++;
			break;
		}
	}
	if (p == i) {
		primes.push(p);
		sum += p;
		i++;
	}
}
console.log(`last prime: ${primes[primes.length - 1]}`);
console.log(`sum: ${sum}`);
