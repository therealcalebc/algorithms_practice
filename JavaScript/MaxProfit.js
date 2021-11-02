/**
 * Given a array of numbers representing the stock prices of a company in chronological order, write a function that calculates the maximum profit you could have made from buying and selling that stock once. You must buy before you can sell it.
 * For example, given [9, 11, 8, 5, 7, 10], you should return 5, since you could buy the stock at 5 dollars and sell it at 10 dollars.
 */

class llNode {
	constructor(idx, val) {
		this.idx = idx;
		this.val = val;
		this.next = null;
		this.diffNext = 0;
	}
}

const addAsc = (root, node) => {
	if (root === null) return node;
	if (root.val > node.val) {
		node.next = root;
		node.diffNext = root.val - node.val;
		return node;
	}
	root.next = addAsc(root.next, node);
	root.diffNext = root.next.val - root.val;
	return root;
};

const addDes = (root, node) => {
	if (root === null) return node;
	if (root.val < node.val) {
		node.next = root;
		node.diffNext = node.val - root.val;
		return node;
	}
	root.next = addDes(root.next, node);
	root.diffNext = root.val - root.next.val;
	return root;
};

/**
 * @param {number} prices
 * @returns {number} profit
 */
const maxProfit = (prices = []) => {
	if (prices.length < 2) return 0;
	let buyRoot = new llNode(0, prices[0]);
	let sellRoot = new llNode(1, prices[1]);
	for (let i = 2; i < prices.length; i++) {
		const buyTemp = new llNode(i - 1, prices[i - 1]);
		const sellTemp = new llNode(i, prices[i]);
		buyRoot = addAsc(buyRoot, buyTemp);
		sellRoot = addDes(sellRoot, sellTemp);
	}
	let runB = buyRoot;
	let runS = sellRoot;
	while (runB != null && runS != null) {
		if (runB.idx < runS.idx) return runS.val - runB.val;
		if (runB.next === null && runS.next === null) return 0;
		if (runB.next === null) runS = runS.next;
		else if (runS.next === null) runB = runB.next;
		else {
			if (runB.diffNext < runS.diffNext) runB = runB.next;
			else runS = runS.next;
		}
	}
};

const maxProfitBF = (prices = []) => {
	let max = 0;
	for (let i = 0; i < prices.length - 1; i++) {
		for (let j = i + 1; j < prices.length; j++) {
			const diff = prices[j] - prices[i];
			if (diff > max) max = diff;
		}
	}
	return max;
};

console.log(maxProfit([20, 9, 11, 8, 5, 7, 10, 12, 15, 13, 1]));
console.log(maxProfitBF([20, 9, 11, 8, 5, 7, 10, 12, 15, 13, 1]));
