/**
 * We can determine how "out of order" an array A is by counting the number of inversions it has. Two elements A[i] and A[j] form an inversion if A[i] > A[j] but i < j. That is, a smaller element appears after a larger element.
 * Given an array, count the number of inversions it has. Do this faster than O(N^2) time.
 * You may assume each element in the array is distinct.
 * For example, a sorted list has zero inversions. The array [2, 4, 1, 3, 5] has three inversions: (2, 1), (4, 1), and (4, 3). The array [5, 4, 3, 2, 1] has ten inversions: every distinct pair forms an inversion.
 */

class xNode {
	constructor(val = 0) {
		this.val = val;
		this.left = null;
		this.right = null;
		this.leftCount = 0;
	}
	add(node) {
		if (node.val < this.val) {
			if (this.left === null) this.left = node;
			else this.left.add(node);
			this.leftCount++;
			if (this.right === null) return;
			else this.right.add(node);
		} else if (node.val > this.val) {
			if (this.right === null) this.right = node;
			else this.right.add(node);
		}
	}
}

const outOfOrder = (arr = []) => {
	if (arr.length < 2) return 0;
	const root = new xNode(arr[0]);
	const stack = [root];
	for (let i = 1; i < arr.length; i++) {
		const node = new xNode(arr[i]);
		root.add(node);
		stack.push(node);
	}
	let oooCount = 0;
	while (stack.length > 0) {
		const temp = stack.pop();
		oooCount += temp.leftCount;
	}
	return oooCount;
};

console.log(outOfOrder([2, 4, 1, 3, 5]));
console.log(outOfOrder([5, 4, 3, 2, 1]));
console.log(outOfOrder([1, 2, 3, 4, 5]));
console.log(outOfOrder([5, 3, 1, 4, 2]));
