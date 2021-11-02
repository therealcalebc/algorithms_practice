/**
 * Compute the running median of a sequence of numbers. That is, given a stream of numbers, print out the median of the list so far on each new element.
 * Recall that the median of an odd-numbered list is the middle number, of an even-numbered list is the average of the two middle numbers.
 */

const runningMedian = (numsIn) => {
	if (!numsIn || !numsIn.length) return;
	const nums = [numsIn[0]];
	console.log(numsIn[0]);
	for (let i = 1; i < numsIn.length; i++) {
		let j = i;
		while (j > 0 && nums[j - 1] > numsIn[i]) {
			nums[j] = nums[j - 1];
			j--;
		}
		nums[j] = numsIn[i];
		let m = i / 2;
		if (i % 2 === 0) console.log(nums[m]);
		else console.log((nums[Math.floor(m)] + nums[Math.ceil(m)]) / 2);
	}
};
runningMedian([2, 1, 5, 7, 2, 0, 5]);
