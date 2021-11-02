/**
 * Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be 0 or negative.
 * For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5. [5, 1, 1, 5] should return 10, since we pick 5 and 5.
 * Follow-up: Can you do this in O(N) time and constant space?
 */

const largestSumNonAdjacent = (nums) => {
	if (!nums || !nums.length) return 0;
	if (nums.length === 1) return nums[0];
	// const sums = [nums[0]];
	// sums.push(nums[1] > nums[0] ? nums[1] : nums[0]);
	let sum1 = nums[0];
	let sum2 = nums[1] > nums[0] ? nums[1] : nums[0];
	for (let i = 2; i < nums.length; i++) {
		// const tempSum = sums[i - 2] + nums[i];
		// if (tempSum > sums[i - 1]) sums[i] = tempSum;
		// else sums[i] = sums[i - 1];
		const tempSum = sum1 + nums[i];
		if (tempSum > sum2) {
			sum1 = sum2;
			sum2 = tempSum;
		} else sum1 = sum2;
	}
	// return sums[nums.length - 1];
	return sum2;
};

console.log(largestSumNonAdjacent([2, 4, 6, 2, 5]));
console.log(largestSumNonAdjacent([2, 6, 2, 4, 5]));
console.log(largestSumNonAdjacent([5, 1, 1, 5]));
console.log(largestSumNonAdjacent([8, 9, 9, 9, 9, 9, 9, 9, 9, 7]));
