const calcC = (x, y) => {
	return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
};

let a = 100;
let b = 101;
let c = calcC(a, b);

while (a + b + c < 1000) {
	do {
		b++;
		c = calcC(a, b);
	} while (c != Math.floor(c) && a + b + c < 1000);
	if (a + b + c > 1000) {
		a++;
		b = a + 1;
		c = calcC(a, b);
	}
	console.log(a, b, c, "sum:", a + b + c);
}

console.log(a, b, c);
console.log(a + b + c);
console.log(a * b * c);
