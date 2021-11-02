const maxScore = (cardPoints, k) => {
	const len = cardPoints.length;
	console.log(`\nlen = ${len}`);
	if (len == 1) return cardPoints[0];
	if (k == len) return cardPoints.reduce((acc, val) => acc + val);
	if (k == 1) return cardPoints[0] > cardPoints[len - 1] ? cardPoints[0] : cardPoints[len - 1];

	let max = (m = 0);
	console.log(`max = ${max}`);
	console.log(`m = ${m}`);
	let n = k;
	console.log(`n = ${n}`);
	while (m <= k) {
		let sum = 0;
		console.log(`\nsum = ${sum}`);
		for (let i = 0; i < n; i++) sum += cardPoints[i];
		console.log(`sum = ${sum}`);
		for (let j = len - 1; j > len - 1 - m; j--) {
			console.log(`cardPoints[${j}] = ${cardPoints[j]}`);
			sum += cardPoints[j];
			console.log(`sum = ${sum}`);
		}
		if (sum > max) max = sum;
		console.log(`max = ${max}`);
		n--;
		console.log(`n = ${n}`);
		m++;
		console.log(`m = ${m}`);
	}
	return max;
};
console.log("\n  maxScore:", maxScore([100, 40, 17, 9, 73, 75], 3));

const maxScore = (cardPoints, k) => {
	const len = cardPoints.length;
	if (len == 1) return cardPoints[0];
	if (k == len) return cardPoints.reduce((acc, val) => acc + val);
	if (k == 1) return cardPoints[0] > cardPoints[len - 1] ? cardPoints[0] : cardPoints[len - 1];

	let max = (m = 0);
	let n = k;
	while (m <= k) {
		let sum = 0;
		for (let i = 0; i < n; i++) sum += cardPoints[i];
		for (let j = len - 1; j > len - 1 - m; j--) sum += cardPoints[j];
		if (sum > max) max = sum;
		n--;
		m++;
	}
	return max;
};
console.log("\n  maxScore:", maxScore([1, 2, 3, 4, 5, 6, 1], 3));
console.log("\n  maxScore:", maxScore([2, 2, 2], 2));
console.log("\n  maxScore:", maxScore([9, 7, 7, 9, 7, 7, 9], 7));
console.log("\n  maxScore:", maxScore([1, 1000, 1], 1));
console.log("\n  maxScore:", maxScore([1, 79, 80, 1, 1, 1, 200, 1], 3));
console.log("\n  maxScore:", maxScore([100, 40, 17, 9, 75, 73], 3));
console.log("\n  maxScore:", maxScore([11, 49, 100, 20, 86, 29, 72], 4));

const maxScore = (cardPoints, k) => {
	let left = [0];
	let right = [0];
	for (let x = 0; x < k; x++) {
		left[x + 1] = left[x] + cardPoints[x];
		right[x + 1] = right[x] + cardPoints[cardPoints.length - x - 1];
	}
	let max = 0;
	for (let i = 0; i <= k; i++) {
		let temp = left[k - i] + right[i];
		if (temp > max) max = temp;
	}
	return max;
};
console.log("\n  maxScore:", maxScore([1, 2, 3, 4, 5, 6, 1], 3));
console.log("\n  maxScore:", maxScore([2, 2, 2], 2));
console.log("\n  maxScore:", maxScore([9, 7, 7, 9, 7, 7, 9], 7));
console.log("\n  maxScore:", maxScore([1, 1000, 1], 1));
console.log("\n  maxScore:", maxScore([1, 79, 80, 1, 1, 1, 200, 1], 3));
console.log("\n  maxScore:", maxScore([100, 40, 17, 9, 75, 73], 3));
console.log("\n  maxScore:", maxScore([11, 49, 100, 20, 86, 29, 72], 4));

//[5,4,3,2,1]
// 0 1 2 3 4
//k = 3

//sums[] = cP[0]+cP[1]+cP[2]
//sums[] = cP[0]+cP[1]+cP[4]
//sums[] = cP[0]+cP[3]+cP[4]
//sums[] = cP[2]+cP[3]+cP[4]

var maxScore = function (cardPoints, k) {
	var left = [0];
	var right = [0];
	for (var x = 0; x < k; x++) {
		left[x + 1] = left[x] + cardPoints[x];
		right[x + 1] = right[x] + cardPoints[cardPoints.length - x - 1];
	}
	var max = 0;
	for (var i = 0; i <= k; i++) {
		var temp = left[k - i] + right[i];
		if (temp > max) max = temp;
	}
	return max;
};
console.log("\n  maxScore:", maxScore([1, 2, 3, 4, 5, 6, 1], 3));
console.log("\n  maxScore:", maxScore([100, 40, 17, 9, 75, 73], 3));

const maxScore = (cardPoints, k) => {
	const len = cardPoints.length;
	let sum = 0;
	for (let i = 0; i < k; i++) sum += cardPoints[i];
	let max = sum;
	for (let j = k - 1; j >= 0; j--) {
		sum += cardPoints[len - (k - j)] - cardPoints[j];
		if (sum > max) max = sum;
	}
	return max;
};
console.log("\n  maxScore:", maxScore([1, 2, 3, 4, 5, 6, 1], 3));
console.log("\n  maxScore:", maxScore([2, 2, 2], 2));
console.log("\n  maxScore:", maxScore([9, 7, 7, 9, 7, 7, 9], 7));
console.log("\n  maxScore:", maxScore([1, 1000, 1], 1));
console.log("\n  maxScore:", maxScore([1, 79, 80, 1, 1, 1, 200, 1], 3));
console.log("\n  maxScore:", maxScore([100, 40, 17, 9, 75, 73], 3));
console.log("\n  maxScore:", maxScore([11, 49, 100, 20, 86, 29, 72], 4));

var maxScore = function (cardPoints, k, l, r) {
	// if (k < 1) return 0;
	if (l == undefined) l = 0;
	if (r == undefined) r = cardPoints.length - 1;
	if (k == 1) return cardPoints[l] > cardPoints[r] ? cardPoints[l] : cardPoints[r];
	var j = k - 1;
	var t1 = cardPoints[l] + maxScore(cardPoints, j, l + 1, r);
	var t2 = cardPoints[r] + maxScore(cardPoints, j, l, r - 1);
	return t1 > t2 ? t1 : t2;
};
console.log("\n  maxScore:", maxScore([1, 2, 3, 4, 5, 6, 1], 3));
console.log("\n  maxScore:", maxScore([100, 40, 17, 9, 75, 73], 3));

var maxScore = function (cardPoints, k) {
	var len = cardPoints.length;
	if (len == 1) return cardPoints[0];
	if (k == len) return cardPoints.reduce((acc, val) => acc + val);
	var mSR = function (cP, n, l, r) {
		if (n == 1) return cP[l] > cP[r] ? cP[l] : cP[r];
		var m = n - 1;
		var t1 = cP[l] + mSR(cP, m, l + 1, r);
		var t2 = cP[r] + mSR(cP, m, l, r - 1);
		return t1 > t2 ? t1 : t2;
	};
	return mSR(cardPoints, k, 0, len - 1);
};
console.log("\n  maxScore:", maxScore([1, 2, 3, 4, 5, 6, 1], 3));
console.log("\n  maxScore:", maxScore([100, 40, 17, 9, 75, 73], 3));

const maxScore = (cardPoints, k) => {
	const len = cardPoints.length;
	if (len == 1) return cardPoints[0];
	if (k == len) return cardPoints.reduce((acc, val) => acc + val);
	const mSR = (cP, n, l, r) => {
		if (n == 1) return cP[l] > cP[r] ? cP[l] : cP[r];
		const m = n - 1;
		const t1 = cP[l] + mSR(cP, m, l + 1, r);
		const t2 = cP[r] + mSR(cP, m, l, r - 1);
		return t1 > t2 ? t1 : t2;
	};
	return mSR(cardPoints, k, 0, len - 1);
};
console.log("\n  maxScore:", maxScore([1, 2, 3, 4, 5, 6, 1], 3));
console.log("\n  maxScore:", maxScore([2, 2, 2], 2));
console.log("\n  maxScore:", maxScore([9, 7, 7, 9, 7, 7, 9], 7));
console.log("\n  maxScore:", maxScore([1, 1000, 1], 1));
console.log("\n  maxScore:", maxScore([1, 79, 80, 1, 1, 1, 200, 1], 3));
console.log("\n  maxScore:", maxScore([100, 40, 17, 9, 75, 73], 3));
console.log("\n  maxScore:", maxScore([11, 49, 100, 20, 86, 29, 72], 4));

const maxScore = (cardPoints, k) => {
	const len = cardPoints.length;
	let lp = k - 1;
	let ls = cardPoints[lp];
	let rc = 0;
	let rs = 0;
	let rsa = [0];
	let max = ls;
	for (let i = 1; i < k; i++) {
		rs += cardPoints[len - i];
		rsa[i] = rs;
		if (rs > ls + rsa[rc]) {
			rc = i;
			ls = 0;
		}
		lp--;
		ls += cardPoints[lp];
		max = ls + rsa[rc];
	}
	rs += cardPoints[len - k];
	return rs > max ? rs : max;
};
console.log("\n  maxScore:", maxScore([1, 2, 3, 4, 5, 6, 1], 3));
console.log("\n  maxScore:", maxScore([2, 2, 2], 2));
console.log("\n  maxScore:", maxScore([9, 7, 7, 9, 7, 7, 9], 7));
console.log("\n  maxScore:", maxScore([1, 1000, 1], 1));
console.log("\n  maxScore:", maxScore([1, 79, 80, 1, 1, 1, 200, 1], 3));
console.log("\n  maxScore:", maxScore([100, 40, 17, 9, 75, 73], 3));
console.log("\n  maxScore:", maxScore([11, 49, 100, 20, 86, 29, 72], 4));

const maxScore = (cardPoints, k) => {
	const len = cardPoints.length;
	const part = len - k;
	let total = cardPoints[0];
	for (let i = 1; i < part; i++) total += cardPoints[i];
	let sub = total;
	let min = sub;
	let j = 0;
	for (let i = part; i < len; i++) {
		total += cardPoints[i];
		sub += cardPoints[i] - cardPoints[j];
		j++;
		if (sub < min) min = sub;
	}
	return total - min;
};
console.log("\n  maxScore:", maxScore([1, 2, 3, 4, 5, 6, 1], 3));
console.log("\n  maxScore:", maxScore([2, 2, 2], 2));
console.log("\n  maxScore:", maxScore([9, 7, 7, 9, 7, 7, 9], 7));
console.log("\n  maxScore:", maxScore([1, 1000, 1], 1));
console.log("\n  maxScore:", maxScore([1, 79, 80, 1, 1, 1, 200, 1], 3));
console.log("\n  maxScore:", maxScore([100, 40, 17, 9, 75, 73], 3));
console.log("\n  maxScore:", maxScore([11, 49, 100, 20, 86, 29, 72], 4));
