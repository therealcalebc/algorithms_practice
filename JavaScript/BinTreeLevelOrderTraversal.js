/**
 * Binary Tree Level Order Traversal
 *
 * Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
 *
 * Constraints:
 * The number of nodes in the tree is in the range [0, 2000].
 * -1000 <= Node.val <= 1000
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
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = (root) => {
	const output = [];
	const loRec = (clNodes) => {
		const vals = [];
		const next = [];
		for (let i = 0; i < clNodes.length; i++) {
			vals.push(clNodes[i].val);
			if (clNodes[i].left) next.push(clNodes[i].left);
			if (clNodes[i].right) next.push(clNodes[i].right);
		}
		output.push(vals);
		if (next.length) loRec(next);
	};
	if (root) loRec([root]);
	return output;
};

// const levelOrder = (root) => {
//     let output = [];
// 	if(root) {
// 		let clNodes = [root];
// 		while(clNodes.length) {
// 			const vals = [];
// 			const next = [];
// 			for(let i = 0; i < clNodes.length; i++) {
// 				vals.push(clNodes[i].val);
// 				if(clNodes[i].left) next.push(clNodes[i].left);
// 				if(clNodes[i].right) next.push(clNodes[i].right);
// 			}
// 			output.push(vals);
// 			if (next.length) clNodes = [...next];
// 			else break;
// 		}
// 	}
// 	return output;
// };
