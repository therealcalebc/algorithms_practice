//Listing Multiples method

//array of numbers 11-20
let nums = [];
let multi = [];
for (let i = 0; i < 10; i++) {
	nums[i] = i + 11;
	multi[i] = i + 11;
}
console.log(nums);
console.log(multi);

let foundLCM = false;
const lastI = multi.length - 1;
console.log(lastI);

while (!foundLCM) {
	foundLCM = true;
	multi[lastI] += nums[lastI];
	for (let i = lastI - 1; i >= 0; i--) {
		while (multi[i] < multi[i + 1]) multi[i] += nums[i];
		if (multi[i] != multi[i + 1]) foundLCM = false;
	}
}

console.log(multi);
