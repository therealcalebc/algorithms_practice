/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * Given the root of an n-ary tree, return the preorder traversal of its nodes' values.
 * @param {Node|null} root
 * @param {number[]} output
 * @return {number[]}
 */
const preorder = (root = null, output = []) => {
	if (root !== null) {
		output.push(root.val);
		for (let i = 0; i < root.children.length; i++) {
			output = preorder(root.children[i], output);
		}
	}
	return output;
};

/**
 * Given the root of an n-ary tree, return the postorder traversal of its nodes' values.
 * @param {Node|null} root
 * @param {number[]} output
 * @return {number[]}
 */
const postorder = (root = null, output = []) => {
	if (root !== null) {
		for (let i = 0; i < root.children.length; i++) {
			output = postorder(root.children[i], output);
		}
		output.push(root.val);
	}
	return output;
};

/**
 * Given an n-ary tree, return the level order traversal of its nodes' values.
 * @param {Node|null} root
 * @return {number[][]}
 */
const levelOrder = (root) => {
	const output = [];
	const levelOrderRecursive = (currentLevel) => {
		const vals = [];
		const nextLevel = [];
		for (let i = 0; i < currentLevel.length; i++) {
			for (let j = 0; j < currentLevel[i].length; j++) {
				vals.push(currentLevel[i][j].val);
				if (currentLevel[i][j].children.length > 0)
					nextLevel.push(currentLevel[i][j].children);
			}
		}
		output.push(vals);
		if (nextLevel.length) levelOrderRecursive(nextLevel);
	};
	if (root !== null) {
		output.push([root.val]);
		if (root.children.length > 0) levelOrderRecursive([root.children]);
	}
	return output;
};

/**
 * Given a n-ary tree, find its maximum depth.
 * The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
 * @param {Node|null} root
 * @return {number}
 */
const maxDepth = (root) => {
	if (!root) return 0;
	let max = 0;
	for (let i = 0; i < root.children.length; i++) {
		const depth = maxDepth(root.children[i]);
		if (depth > max) max = depth;
	}
	return max + 1;
};
