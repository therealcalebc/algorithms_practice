let s1 = 0;
let s2 = 0;
for (let i = 1; i <= 100; i++) {
	s1 += i;
	s2 += Math.pow(i, 2);
}
s1 = Math.pow(s1, 2);
console.log(s1 - s2);
