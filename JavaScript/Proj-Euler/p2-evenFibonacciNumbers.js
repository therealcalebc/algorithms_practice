let fib2 = 1;
let fib1 = 1;
let fib = 2;
let sum = 0;
while (fib <= 4000000) {
	if (fib % 2 === 0) sum += fib;
	fib2 = fib1;
	fib1 = fib;
	fib = fib2 + fib1;
}
console.log(sum);
