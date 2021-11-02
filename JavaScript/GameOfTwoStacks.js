/**
 * Alexa has two stacks of non-negative integers, stack  and stack  where index 0 denotes the top of the stack. Alexa challenges Nick to play the following game:
 *  - In each move, Nick can remove one integer from the top of either stack  or stack .
 *  - Nick keeps a running sum of the integers he removes from the two stacks.
 *  - Nick is disqualified from the game if, at any point, his running sum becomes greater than some integer  given at the beginning of the game.
 *  - Nick's final score is the total number of integers he has removed from the two stacks.
 * Given a, b, and maxSum for g games, find the maximum possible score Nick can achieve.
 * Constraints:
 * 1 <= g <= 50
 * 1 <= n, m <=10^5
 * 0 <= a[i], b[i] <= 10^6
 * 1 <= maxSum <= 10^9
 */

/**
 * @param {number} maxSum - upper limit of the sum of numbers removed from stacks before disqualification
 * @param {number[]} a - first stack of numbers
 * @param {number[]} b - second stack of numbers
 */
function twoStacks(maxSum, a = [], b = []) {
	let aSub = [0];
	let bSub = [0];
	for (let i = 0; i < a.length; i++) {
		const tempSum = aSub[i] + a[i];
		if (tempSum > maxSum) break;
		aSub[i + 1] = tempSum;
	}
	for (let i = 0; i < b.length; i++) {
		const tempSum = bSub[i] + b[i];
		if (tempSum > maxSum) break;
		bSub[i + 1] = tempSum;
	}
	console.log(aSub);
	console.log(bSub);
	let maxMoves = 0;
	let j = 0;
	console.log(`maxMoves=${maxMoves}`);
	for (let i = aSub.length - 1; i >= 0 && j < bSub.length; i--) {
		console.log(`i=${i}, j=${j}`);
		while (j < bSub.length && aSub[i] + bSub[j] <= maxSum) j++;
		const tempMoves = i + j - 1;
		if (tempMoves > maxMoves) {
			maxMoves = tempMoves;
			console.log(`maxMoves=${maxMoves}`);
		}
		// if (tempMoves > maxMoves) maxMoves = tempMoves;
	}
	return maxMoves;
}

// function twoStacks(maxSum, a = [], b = []) {
// 	let sumA = 0;
// 	let sumB = 0;
// 	let aSub = [];
// 	let bSub = [];
// 	for (let i = 0; i < a.length; i++) {
// 		const tempSum = sumA + a[i];
// 		if (tempSum > maxSum) break;
// 		sumA = tempSum;
// 		aSub[i] = a[i];
// 	}
// 	for (let i = 0; i < b.length; i++) {
// 		const tempSum = sumB + b[i];
// 		if (tempSum > maxSum) break;
// 		sumB = tempSum;
// 		bSub[i] = b[i];
// 	}
// 	let aMoves = aSub.length;
// 	let bMoves = bSub.length;
// 	// let maxMoves = aSub.length > bSub.length ? aSub.length : bSub.length;
// 	let maxMoves = aMoves > bMoves ? aMoves : bMoves;
// 	console.log(`maxSum=${maxSum}, sumA=${sumA}, sumB=${sumB}`);
// 	console.log(aSub);
// 	console.log(bSub);
// 	console.log(`aMoves=${aMoves}, bMoves=${bMoves}, maxMoves=${maxMoves}`);
// 	let tempMoves = aMoves;
// 	let sum = sumA;
// 	let j = 0;
// 	console.log(`\ntempMoves=${tempMoves}, sum=${sum}\n`);
// 	for (let i = aSub.length - 1; i >= 0; i--) {
// 		console.log(`i=${i}, j=${j}`);
// 		sum -= aSub[i];
// 		tempMoves--;
// 		console.log(`tempMoves=${tempMoves}, sum=${sum}`);
// 		while (j < bSub.length && sum + bSub[j] <= maxSum) {
// 			sum += bSub[j];
// 			tempMoves++;
// 			j++;
// 			console.log(`tempMoves=${tempMoves}, sum=${sum}, j=${j}`);
// 		}
// 		if (tempMoves > maxMoves) {
// 			maxMoves = tempMoves;
// 			console.log(`maxMoves=${maxMoves}`);
// 		}
// 		// if (tempMoves > maxMoves) maxMoves = tempMoves;
// 		if (j === bSub.length) break;
// 	}
// 	tempMoves = bMoves;
// 	sum = sumB;
// 	j = 0;
// 	console.log(`\ntempMoves=${tempMoves}, sum=${sum}\n`);
// 	for (let i = bSub.length - 1; i >= 0; i--) {
// 		console.log(`i=${i}, j=${j}`);
// 		sum -= bSub[i];
// 		tempMoves--;
// 		console.log(`tempMoves=${tempMoves}, sum=${sum}`);
// 		while (j < aSub.length && sum + aSub[j] <= maxSum) {
// 			sum += aSub[j];
// 			tempMoves++;
// 			j++;
// 			console.log(`tempMoves=${tempMoves}, sum=${sum}, j=${j}`);
// 		}
// 		if (tempMoves > maxMoves) {
// 			maxMoves = tempMoves;
// 			console.log(`maxMoves=${maxMoves}`);
// 		}
// 		// if (tempMoves > maxMoves) maxMoves = tempMoves;
// 		if (j === aSub.length) break;
// 	}
// 	return maxMoves;
// }

// function twoStacks(maxSum, a = [], b = []) {
// 	let aIdx = 0;
// 	let sum = a[aIdx];
// 	for (; aIdx < a.length - 1; aIdx++) {
// 		sum += a[aIdx + 1];
// 		if (sum > maxSum) {
// 			sum -= a[aIdx + 1];
// 			break;
// 		}
// 		if (sum === maxSum) break;
// 		aIdx++;
// 	}
// 	let maxMoves = aIdx + 1;
// 	let bIdx = 0;
// 	while (sum < maxSum && bIdx < b.length) {
// 		const tempSum = sum + b[bIdx];
// 		if (tempSum > maxSum) break;
// 		sum = tempSum;
// 		maxMoves++;
// 		bIdx++;
// 	}
// 	let moves = maxMoves;
// 	for (; aIdx >= 0; a--) {
// 		sum -= a[aIdx];
// 		moves--;
// 		while (sum < maxSum && bIdx < b.length) {
// 			const tempSum = sum + b[bIdx];
// 			if (tempSum > maxSum) break;
// 			sum = tempSum;
// 			moves++;
// 			bIdx++;
// 		}
// 		if (moves > maxMoves) maxMoves = moves;
// 	}
// 	return maxMoves;
// }

console.log(twoStacks(10, [4, 2, 4, 6, 1], [2, 1, 8, 5]));
