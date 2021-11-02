/**
 * Given an integer n, return all the structurally unique BST's (binary search trees), which has exactly n nodes of unique values from 1 to n. Return the answer in any order.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @param {number} lo
 * @return {TreeNode[]}
 */
const generateTrees = (n, lo) => {
	if (lo === undefined) lo = 1;
	if (n === 0 || n === 9 || n < lo) return [];
	if (n === lo) return [new TreeNode(n)];
	const toReturn = [];
	const left = generateTrees(n - 1, lo);
	const right = generateTrees(n, lo + 1);
	while (left.length > 0) {
		const temp = new TreeNode(n);
		temp.left = left.pop();
		toReturn.push(temp);
	}
	while (right.length > 0) {
		const temp = new TreeNode(lo);
		temp.right = right.pop();
		toReturn.push(temp);
	}
	if (n - lo > 1) {
		for (let i = lo + 1; i < n; i++) {
			const left = generateTrees(i - 1, lo);
			const right = generateTrees(n, i + 1);
			for (let j = 0; j < left.length; j++) {
				for (let k = 0; k < right.length; k++) {
					const temp = new TreeNode(i);
					temp.left = left[j];
					temp.right = right[k];
					toReturn.push(temp);
				}
			}
		}
	}
	return toReturn;
};
