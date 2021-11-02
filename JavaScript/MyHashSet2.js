/**
 * Design a HashSet without using any built-in hash table libraries.
 */

/**
 * binary search tree used for storing data in buckets of the hash set
 */
class Node {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
	add(node) {
		if (node.val === this.val) return;
		if (node.val < this.val) {
			if (this.left === null) this.left = node;
			else this.left.add(node);
		} else {
			if (this.right === null) this.right = node;
			else this.right.add(node);
		}
	}
	contains(val) {
		if (val === this.val) return true;
		if (val < this.val && this.left !== null) return this.left.contains(val);
		if (val > this.val && this.right !== null) return this.right.contains(val);
		return false;
	}
	remove(val) {
		if (val < this.val) {
			if (this.left !== null) this.left = this.left.remove(val);
		} else if (val > this.val) {
			if (this.right !== null) this.right = this.right.remove(val);
		} else {
			if (this.left !== null) {
				if (this.right !== null) this.left.add(this.right);
				return this.left;
			} else return this.right;
		}
	}
}

/**
 * Initialize your data structure here.
 */
class MyHashSet {
	constructor() {
		this.data = [];
	}

	/**
	 * @param {number} key
	 * @return {void}
	 */
	add(key) {
		const hash = this.getHash(key);
		const node = new Node(key);
		if (!this.data[hash]) this.data[hash] = node;
		else this.data[hash].add(node);
	}

	/**
	 * @param {number} key
	 * @return {void}
	 */
	remove(key) {
		const hash = this.getHash(key);
		if (this.data[hash]) this.data[hash] = this.data[hash].remove(key);
	}

	/**
	 * Returns true if this set contains the specified element
	 * @param {number} key
	 * @return {boolean}
	 */
	contains(key) {
		const hash = this.getHash(key);
		if (this.data[hash]) return this.data[hash].contains(key);
		return false;
	}

	/**
	 * Returns hash value calculated from key
	 * @param {number} key
	 * @return {number}
	 */
	getHash(key) {
		return key % 3333;
	}
} //end of class

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
