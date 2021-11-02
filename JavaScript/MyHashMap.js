/**
 * Design a HashMap without using any built-in hash table libraries.
 */

/**
 * linkedList used for storing data in buckets of the hash map
 */
class Node {
	constructor(key, val) {
		this.key = key;
		this.val = val;
		this.next = null;
	}
}

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
	if (!this.data[hash]) this.data[hash] = node;
	else if (this.data[hash].key === key) this.data[hash].val = value;
	else {
		let runner = this.data[hash];
		while (runner.next) {
			if (runner.next.key === key) {
				runner.next.val = value;
				return;
			}
			runner = runner.next;
		}
		runner.next = node;
	}
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
		runner = runner.next;
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
	if (this.data[hash]) {
		if (this.data[hash].key === key) {
			this.data[hash] = this.data[hash].next;
			return;
		}
		let runner = this.data[hash];
		while (runner.next) {
			if (runner.next.key === key) {
				runner.next = runner.next.next;
				return;
			}
			runner = runner.next;
		}
	}
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
