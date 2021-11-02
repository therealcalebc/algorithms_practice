/**
 * The edit distance between two strings refers to the minimum number of character insertions, deletions, and substitutions required to change one string to the other.
 * For example, the edit distance between “kitten” and “sitting” is three: substitute the “k” for “s”, substitute the “e” for “i”, and append a “g”.
 * Given two strings, compute the edit distance between them.
 */

const computeEditDistance = (str1, str2) => {
	let sum = str1.length > str2.length ? str1.length : str2.length;
	const set1 = new Set(str1);
	const set2 = new Set(str2);
	const set3 = new Set();
	for (const c of set1) if (set2.has(c)) set3.add(c);
	const map1 = new Map();
	const map2 = new Map();
	for (const c of set3) {
		map1.set(c, 0);
		map2.set(c, 0);
	}
	for (const c of str1) if (set3.has(c)) map1.set(c, map1.get(c) + 1);
	for (const c of str2) if (set3.has(c)) map2.set(c, map2.get(c) + 1);
	for (const c of set3) {
		const count1 = map1.get(c);
		const count2 = map2.get(c);
		sum -= count1 < count2 ? count1 : count2;
	}
	return sum;
};

console.log(computeEditDistance("kitten", "sitting"));
console.log(computeEditDistance("smiles", "mile"));
