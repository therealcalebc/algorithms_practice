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
class Solution {
    public boolean isIsomorphic(String s, String t) {
        // if(s.length() != t.length()) return false;
		HashMap<Character, Character> sMap = new HashMap<Character, Character>();
		HashSet<Character> tSet = new HashSet<Character>();
		final int len = s.length();
		for(int i = 0; i < len; i++) {
			final char sC = s.charAt(i);
			final char tC = t.charAt(i);
			if(sMap.containsKey(sC)) {
				if(sMap.get(sC) == tC) continue;
				return false;
			}
			if(tSet.contains(tC)) return false;
			tSet.add(tC);
			sMap.put(sC, tC);
		}
		return true;
    }
}
