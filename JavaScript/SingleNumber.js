/**
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
 * You must implement a solution with a linear runtime complexity and use only constant extra space.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
	const numSet = new Set();
	const diffSet = new Set();
	for (let num of nums) {
		if (numSet.has(num)) diffSet.add(num);
		else numSet.add(num);
	}
	for (let num of numSet) {
		if (!diffSet.has(num)) return num;
	}
};
console.log(singleNumber([4, 1, 2, 1, 2]));
