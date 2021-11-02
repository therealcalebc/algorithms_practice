/**
 * Skyline Real Estate Developers is planning to demolish a number of old, unoccupied buildings and construct a shopping mall in their place. Your task is to find the largest solid area in which the mall can be constructed.
 * There are a number of buildings in a certain two-dimensional landscape. Each building has a height, given by  h[i] (where i --> [1...n]). If you join k adjacent buildings, they will form a solid rectangle of area  k x min(h[i],h[i+1],...,h[i+k-1]).
 * Example:
 * h = [3,2,3,1,4]
 * A rectangle of height h=2 and length k=3 can be constructed within the boundaries. The area formed is  h * k = 2 * 3 = 6
 * Constraints:
 * 1 <= n <= 10^5
 * 1 <= h[i] <= 10^6
 * PERSONAL NOTE: makes more sense if you think about h as representing widths of buildings not heights
 */

/**
 * @param {number[]} h - array representing the heights of adjacent buildings
 * @returns {number} - the area of the largest rectangle that can be formed within the bounds of consecutive buildings
 */
function largestRectangle(h) {
	if (h.length === 1) return h[0];
	const hLeft = [];
	const hRight = [];
	let iL = 0;
	let iR = h.length - 1;
	while (iL < iR) {
		if (h[iL] > h[iR]) {
			hLeft.push(h[iL]);
			iL++;
		} else {
			hRight.push(h[iR]);
			iR--;
		}
	}
	const area = h[iL] * h.length;
	const aLeft = hLeft.length > 0 ? largestRectangle(hLeft) : 0;
	const aRight = hRight.length > 0 ? largestRectangle(hRight) : 0;
	return Math.max(area, aLeft, aRight);
}

console.log(largestRectangle([3, 2, 3, 1, 4]));
console.log(largestRectangle([1, 2, 3, 4, 5]));
