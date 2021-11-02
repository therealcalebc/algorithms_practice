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

public class Solution {
    public bool IsIsomorphic(string s, string t) {
        Dictionary<char, char> dict = new Dictionary<char, char>();
		// HashSet<char> set = new HashSet<char>();
		for(int i = 0; i < s.Length; i++) {
			// if(dict.ContainsKey(s[i])) {
			// 	if(dict[s[i]] == t[i]) continue;
			// 	return false;
			// }
			// if(set.Contains(t[i])) return false;
			// set.Add(t[i]);
			// dict[s[i]] = t[i];
			char temp;
			if(dict.TryGetValue(s[i], out temp)) {
				if(temp == t[i]) continue;
				return false;
			}
			else {
				if(dict.Values.Contains(t[i])) return false;
				dict[s[i]] = t[i];
			}
		}
		return true;
    }
}
