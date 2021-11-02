/**
 * Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const canBeSummed = (nums, k) => {
	const numSet = new Set();
	for (let num of nums) {
		if (numSet.has(k - num)) return true;
		numSet.add(num);
	}
	return false;
};
console.log(canBeSummed([10, 15, 3, 7], 17));
