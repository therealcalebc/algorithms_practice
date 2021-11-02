/**
 * Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be 0 or negative.
 * For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5. [5, 1, 1, 5] should return 10, since we pick 5 and 5.
 * Follow-up: Can you do this in O(N) time and constant space?
 */

const getMaxSum = (nums, p1, p2) => {
	let sum1 = 0;
	let sum2 = 0;
	switch (p1) {
		case nums.length: {
			sum1 = 0;
			sum2 = 0;
			break;
		}
		case nums.length - 1: {
			sum1 = nums[p1];
			sum2 = 0;
			break;
		}
		case nums.length - 2: {
			sum1 = nums[p1];
			sum2 = nums[p2];
			break;
		}
		default: {
			sum1 = nums[p1] + getMaxSum(nums, p1 + 2, p1 + 3);
			sum2 = nums[p2] + getMaxSum(nums, p2 + 2, p2 + 3);
			break;
		}
	}
	return sum1 > sum2 ? sum1 : sum2;
};

const largestSumNonAdjacent = (nums) => {
	if (!nums || !nums.length) return 0;
	if (nums.length === 1) return nums[0];
	if (nums.length === 2) return nums[1] > nums[0] ? nums[1] : nums[0];
	return getMaxSum(nums, 0, 1);
};

console.log(largestSumNonAdjacent([2, 4, 6, 2, 5]));
console.log(largestSumNonAdjacent([2, 6, 2, 4, 5]));
console.log(largestSumNonAdjacent([5, 1, 1, 5]));
console.log(largestSumNonAdjacent([8, 9, 9, 9, 9, 9, 9, 9, 9, 7]));
