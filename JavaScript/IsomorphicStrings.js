/**
 * Given two strings s and t, determine if they are isomorphic.
 * Two strings s and t are isomorphic if the characters in s can be replaced to get t.
 * All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.
 */
/**
 * Examples:
 *
 * Input: s = "egg", t = "add"
 * Output: true
 *
 * Input: s = "foo", t = "bar"
 * Output: false
 *
 * Input: s = "paper", t = "title"
 * Output: true
 */
/**
 * Constraints:
 * 1 <= s.length <= 5 * 104
 * t.length == s.length
 * s and t consist of any valid ascii character.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
	// if (s.length !== t.length) return false;
	const map = new Map();
	const set = new Set();
	for (let i = 0; i < s.length; i++) {
		if (map.has(s[i])) {
			if (map.get(s[i]) == t[i]) continue;
			return false;
		}
		if (set.has(t[i])) return false;
		set.add(t[i]);
		map.set(s[i], t[i]);
	}
	return true;
};

console.log(isIsomorphic("egg", "add"));
console.log(isIsomorphic("foo", "bar"));
console.log(isIsomorphic("paper", "title"));
console.log(isIsomorphic("babc", "baba"));
