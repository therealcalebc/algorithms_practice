//array to hold primes
const primes = new Array(10001);
//primes array seed
primes[0] = 2;
//count of primes
let count = 1;
//starting number
let i = 3;
//count upwards checking if each number is a multiple of any of the prime numbers already found, add to our list of primes if it is not
while (count < 10001) {
	let p = i;
	let j = -1;
	for (let j = 0; j < count; j++) {
		if (p % primes[j] == 0) {
			i++;
			break;
		}
	}
	if (p == i) {
		primes[count] = p;
		count++;
		i++;
	}
}
console.log(`count: ${count}`);
console.log(`last prime: ${primes[count - 1]}`);
