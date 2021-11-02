/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
	const pastVals = {};
	pastVals[nums[0]] = 0;
	for (let i = 1; i < nums.length; i++) {
		const difference = target - nums[i];
		if (pastVals.hasOwnProperty(difference)) return [pastVals[difference], i];
		else pastVals[nums[i]] = i;
	}
};
