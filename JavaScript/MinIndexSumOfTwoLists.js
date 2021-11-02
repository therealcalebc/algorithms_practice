/**
 * Suppose Andy and Doris want to choose a restaurant for dinner, and they both have a list of favorite restaurants represented by strings.
 * You need to help them find out their common interest with the least list index sum. If there is a choice tie between answers, output all of them with no order requirement. You could assume there always exists an answer.
 *
 * Examples:
 * Input: list1 = ["KFC"], list2 = ["KFC"]
 * Output: ["KFC"]
 *
 * Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KNN", "KFC","Burger King","Tapioca Express","Shogun"]
 * Output: ["KFC","Burger King","Tapioca Express","Shogun"]
 *
 * Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
 * Output: ["Shogun"]
 * Explanation: The only restaurant they both like is "Shogun".
 *
 * Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KFC","Shogun","Burger King"]
 * Output: ["Shogun"]
 * Explanation: The restaurant they both like and have the least index sum is "Shogun" with index sum 1 (0+1).
 */

/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
	const map = new Map();
	for (let i = 0; i < list1.length; i++) map.set(list1[i], i);
	let result = [];
	let min = Infinity;
	for (let i = 0; i < list2.length; i++) {
		if (map.has(list2[i])) {
			let sum = map.get(list2[i]) + i;
			if (sum < min) {
				min = sum;
				result = [list2[i]];
			} else if (sum === min) result.push(list2[i]);
		}
	}
	return result;
};

console.log(findRestaurant(["KFC"], ["KFC"]));
console.log();
console.log(
	findRestaurant(
		["Shogun", "Tapioca Express", "Burger King", "KFC"],
		["KNN", "KFC", "Burger King", "Tapioca Express", "Shogun"]
	)
);
console.log();
console.log(
	findRestaurant(
		["Shogun", "Tapioca Express", "Burger King", "KFC"],
		["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]
	)
);
console.log();
console.log(
	findRestaurant(
		["Shogun", "Tapioca Express", "Burger King", "KFC"],
		["KFC", "Shogun", "Burger King"]
	)
);
