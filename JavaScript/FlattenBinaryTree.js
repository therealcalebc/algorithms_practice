/**
 * Flatten Binary Tree to Linked List
 *
 * Given the root of a binary tree, flatten the tree into a "linked list":
 * - The "linked list" should use the same TreeNode class where the right child pointer points to the next node in the list and the left child pointer is always null.
 * - The "linked list" should be in the same order as a pre-order traversal of the binary tree.
 *
 * Constraints:
 * - The number of nodes in the tree is in the range [0, 2000].
 * - -100 <= Node.val <= 100
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
	if (root == null) return;
	const flatR = (node, toBeAdded) => {
		if (node == null) return toBeAdded;
		let temp = flatR(node.right, toBeAdded);
		node.right = flatR(node.left, temp);
		node.left = null;
		return node;
	};
	root = flatR(root, null);
};

// var flatten = function (root) {
// 	if (root == null) return;
// 	const getR = (node, toBeAdded) => {
// 		if (node.right == null) node.right = toBeAdded;
// 		else node.right = getR(node.right, toBeAdded);
// 		if (node.left == null) return node;
// 		else {
// 			let temp = null;
// 			if(node.left.val < node.val) {
// 				temp = node.left;
// 				node.left = null;
// 				return getR(temp, node);
// 			}
// 			else {
// 				temp = node.right;
// 				node.right = getR(node.left, temp);
// 				node.left = null;
// 				return node;
// 			}
// 		}
// 	};
// 	let tempR = null;
// 	if (root.right != null) tempR = getR(root.right, null);
// 	root.right = getR(root.left, tempR);
// 	root.left = null;
// };

// var flatten = function (root) {
// 	if (root == null) return;
// 	// if(root == null || (root.left == null && root.right == null)) return;
// 	console.log("\n flatten: ");
// 	const getR = (node, toBeAdded) => {
// 		console.log(
// 			`  getR(${node.val}, ${toBeAdded == null ? "null" : toBeAdded.val})\n   (${
// 				node.val
// 			}).left: ${node.left == null ? "null" : node.left.val}, (${node.val}).right: ${
// 				node.right == null ? "null" : node.right.val
// 			}`
// 		);
// 		if (node.right == null) node.right = toBeAdded;
// 		else node.right = getR(node.right, toBeAdded);
// 		console.log(`   (${node.val}).right <-- ${node.right == null ? "null" : node.right.val}`);
// 		if (node.left == null) {
// 			console.log("  ---");
// 			return node;
// 		} else {
// 			let temp = node.left;
// 			node.left = null;
// 			let toBeReturned = getR(temp, node);
// 			console.log("  ---");
// 			return toBeReturned;
// 		}
// 	};
// 	let tempR = null;
// 	if (root.right != null) tempR = getR(root.right, null);
// 	root.right = getR(root.left, tempR);
// 	root.left = null;
// 	console.log(" \\\\ end of flatten \n");
// };

class TreeNode {
	constructor(val, left, right) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}

function addN(node, newNode) {
	if (newNode.val < node.val) {
		if (node.left == null) node.left = newNode;
		else addN(node.left, newNode);
	} else {
		if (node.right == null) node.right = newNode;
		else addN(node.right, newNode);
	}
}

function printAll(node) {
	// console.log(
	// 	`${node.val} - l: ${node.left == null ? "null" : node.left.val}, r: ${
	// 		node.right == null ? "null" : node.right.val
	// 	}`
	// );
	console.log(node.val);
	if (node.left == null && node.right == null) return;
	if (node.left == null) console.log("null");
	else printAll(node.left);
	if (node.right != null) printAll(node.right);
}

let rTN = new TreeNode(
	1,
	new TreeNode(2, new TreeNode(3), new TreeNode(4)),
	new TreeNode(5, null, new TreeNode(6))
);

printAll(rTN);

console.log();
flatten(rTN);
console.log();

printAll(rTN);
