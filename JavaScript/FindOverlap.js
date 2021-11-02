const calcHash = (line) => {
	console.log("*caclHash(line):");
	console.log(line);
	let hash = 0;
	for (let i = 0; i < line.length; i++) {
		hash += line[i] * 31;
	}
	console.log(`returning hash=${hash}`);
	return hash;
};

const findOverlap = (firstScreenshot, secondScreenshot) => {
	console.log(firstScreenshot);
	console.log(secondScreenshot);
	const hashCache1 = [];
	const hashCache2 = [calcHash(secondScreenshot[0])];
	let max = 0;
	for (let i = firstScreenshot.length - 1; i >= 0; i--) {
		console.log(`i=${i}`);
		hashCache1[firstScreenshot.length - 1 - i] = calcHash(firstScreenshot[i]);
		console.log(hashCache1);
		console.log(hashCache2);
		if (hashCache1[firstScreenshot.length - 1 - i] === hashCache2[0]) {
			console.log("!!found initial match");
			let match = true;
			for (let j = i + 1; j < firstScreenshot.length; j++) {
				console.log(`j=${j}`);
				if (hashCache2.length <= j - i)
					hashCache2[j - i] = calcHash(secondScreenshot[j - i]);
				console.log(hashCache1);
				console.log(hashCache2);
				if (hashCache1[firstScreenshot.length - 1 - j] !== hashCache2[j - i]) {
					match = false;
					break;
				}
			}
			if (match) {
				let offset = firstScreenshot.length - i;
				max = offset > max ? offset : max;
			}
			console.log(`max=${max}`);
		}
	}
	return max;
};

const first = [
	[1, 1, 1, 1],
	[2, 2, 2, 2],
	[3, 3, 3, 3],
	[4, 4, 4, 4],
	[3, 3, 3, 3],
];
const second = [
	[3, 3, 3, 3],
	[4, 4, 4, 4],
	[3, 3, 3, 3],
	[5, 5, 5, 5],
	[6, 6, 6, 6],
];
console.log(findOverlap(first, second));
