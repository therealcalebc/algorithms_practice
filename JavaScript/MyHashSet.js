/**
 * Design a HashSet without using any built-in hash table libraries.
 */

/**
 * linkedList used for storing data in buckets of the hash map
 */
class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

/**
 * Initialize your data structure here.
 */
var MyHashSet = function () {
	this.data = [];
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
	const hash = this.getHash(key);
	const node = new Node(key);
	if (!this.data[hash]) this.data[hash] = node;
	else {
		let runner = this.data[hash];
		while (runner.next) {
			if (runner.val === key) return;
			runner = runner.next;
		}
		if (runner.val !== key) runner.next = node;
	}
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
	const hash = this.getHash(key);
	if (this.data[hash]) {
		if (this.data[hash].val === key) {
			this.data[hash] = this.data[hash].next;
			return;
		}
		let runner = this.data[hash];
		while (runner.next && runner.next.val !== key) runner = runner.next;
		if (runner.next) runner.next = runner.next.next;
	}
};

/**
 * Returns true if this set contains the specified element
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
	const hash = this.getHash(key);
	if (this.data[hash]) {
		let runner = this.data[hash];
		while (runner) {
			if (runner.val === key) return true;
			runner = runner.next;
		}
	}
	return false;
};

/**
 * Returns hash value calculated from key
 * @param {number} key
 * @return {number}
 */
MyHashSet.prototype.getHash = function (key) {
	return key % 3333;
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
