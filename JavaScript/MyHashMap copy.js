/**
 * Design a HashMap without using any built-in hash table libraries.
 */

/**
 * binary search tree used for storing data in buckets of the hash map
 */
class Node {
	constructor(key, val) {
		this.key = key;
		this.val = val;
		this.left = null;
		this.right = null;
	}
}
const getHeight = (node) => {
	if (!node) return 0;
	if (!node.left && !node.right) return 1;
	if (!node.left) return getHeight(node.right) + 1;
	if (!node.right) return getHeight(node.left) + 1;
	const lH = getHeight(node.left);
	const rH = getHeight(node.right);
	return lH > rH ? lH + 1 : rH + 1;
};
const getBalance = (node) => {
	return getHeight(node.left) - getHeight(node.right);
};
const getBiggest = (node) => {
	if (!node) return null;
	if (!node.right) return node;
	let runner = node;
	while (runner.right.right) runner = runner.right;
	const temp = runner.right;
	runner.right = temp.left;
	temp.left = null;
	return temp;
};
const getSmallest = (node) => {
	if (!node) return null;
	if (!node.left) return node;
	let runner = node;
	while (runner.left.left) runner = runner.left;
	const temp = runner.left;
	runner.left = temp.right;
	temp.right = null;
	return temp;
};
const rotateLeft = (root) => {
	const temp = getSmallest(root.right);
	temp.right = root.right;
	root.right = null;
	temp.left = root;
	return temp;
};
const rotateRight = (root) => {
	const temp = getBiggest(root.left);
	temp.left = root.left;
	root.left = null;
	temp.right = root;
	return temp;
};
const addNode = (root, node) => {
	if (!root) return node;
	if (root.key === node.key) {
		root.val = node.val;
		return root;
	}
	if (node.key < root.key) {
		if (!root.left) {
			root.left = node;
			return root;
		}
		root.left = addNode(root.left, node);
	} else if (node.key > root.key) {
		if (!root.right) {
			root.right = node;
			return root;
		}
		root.right = addNode(root.right, node);
	}
	const balance = getBalance(root);
	if (balance > 1) {
		//rotate right
		// if(!root.right) {
		// 	const temp = root.left;
		// 	root.left = null;
		// 	return addNode(temp, root);
		// }
		// const temp = getBiggest(root.left);
		// temp.left = root.left;
		// root.left = null;
		// temp.right = root;
		// return temp;
		return rotateRight(root);
	} else if (balance < -1) {
		//rotate left;
		// if(!root.left) {
		// 	const temp = root.right;
		// 	root.right = null;
		// 	return addNode(temp, root);
		// }
		// const temp = getSmallest(root.right);
		// temp.right = root.right;
		// root.right = null;
		// temp.left = root;
		// return temp;
		return rotateLeft(root);
	}
};
const removeNode = (root, key) => {
	if (!root) return null;
	if (key < root.key) {
		root.left = removeNode(root.left, key);
		if (getBalance(root) < -1) return rotateLeft(root);
		else return root;
	} else if (key > root.key) {
		root.right = removeNode(root.right, key);
		if (getBalance(root) > 1) return rotateRight(root);
		else return root;
	} else {
		// if(!root.left) {
		// 	const temp = root.right;
		// 	root.right = null;
		// 	return temp;
		// }
		// if(!root.right) {
		// 	const temp = root.left;
		// 	root.left = null;
		// 	return temp;
		// }
		let temp = null;
		if (getBalance(root) < 0) temp = getSmallest(root.right);
		else temp = getBiggest(root.left);
		if (temp) {
			temp.left = root.left;
			temp.right = root.right;
			root.left = null;
			root.right = null;
		}
		return temp;
	}
};

/**
 * Initialize your data structure here.
 */
var MyHashMap = function () {
	this.data = [];
};

/**
 * value will always be non-negative.
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
	const hash = this.getHash(key);
	const node = new Node(key, value);
	// if (!this.data[hash]) this.data[hash] = node;
	// else if (this.data[hash].key === key) this.data[hash].val = value;
	// else {
	// 	let runner = this.data[hash];
	// 	while (runner.next) {
	// 		if (runner.next.key === key) {
	// 			runner.next.val = value;
	// 			return;
	// 		}
	// 		runner = runner.next;
	// 	}
	// 	runner.next = node;
	// }
	this.data[hash] = addNode(this.data[hash], node);
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
	const hash = this.getHash(key);
	let runner = this.data[hash];
	while (runner) {
		if (runner.key === key) return runner.val;
		// runner = runner.next;
		if (key < runner.key) runner = runner.left;
		else if (key > runner.key) runner = runner.right;
	}
	return -1;
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
	const hash = this.getHash(key);
	// if (this.data[hash]) {
	// 	if (this.data[hash].key === key) {
	// 		this.data[hash] = this.data[hash].next;
	// 		return;
	// 	}
	// 	let runner = this.data[hash];
	// 	while (runner.next) {
	// 		if (runner.next.key === key) {
	// 			runner.next = runner.next.next;
	// 			return;
	// 		}
	// 		runner = runner.next;
	// 	}
	// }
	this.data[hash] = removeNode(this.data[hash], key);
};

/**
 * Returns hash value calculated from key
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.getHash = function (key) {
	return key % 3333;
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
