/**
 * A bracket is considered to be any one of the following characters: (, ), {, }, [, or ].
 * Two brackets are considered to be a matched pair if the an opening bracket (i.e., (, [, or {) occurs to the left of a closing bracket (i.e., ), ], or }) of the exact same type. There are three types of matched pairs of brackets: [], {}, and ().
 * A matching pair of brackets is not balanced if the set of brackets it encloses are not matched. For example, {[(])} is not balanced because the contents in between { and } are not balanced. The pair of square brackets encloses a single, unbalanced opening bracket, (, and the pair of parentheses encloses a single, unbalanced closing square bracket, ].
 * By this logic, we say a sequence of brackets is balanced if the following conditions are met:
 *  - It contains no unmatched brackets.
 *  - The subset of brackets enclosed within the confines of a matched pair of brackets is also a matched pair of brackets.
 * Given n strings of brackets, determine whether each sequence of brackets is balanced. If a string is balanced, return YES. Otherwise, return NO.
 * Constraints:
 * 1 <= s.length <= 10^3
 * All chracters in the sequences ∈ { {, }, (, ), [, ] }.
 */
/**
 * @param {string} s - a string of brackets
 * @returns {string} - either YES or NO
 */

import java.util.*;

class Result {

	/**
	 * @param {string} s - a string of brackets
	 * @returns {string} - either YES or NO
	 */
    public static String isBalanced(String s) {
        if(s.length() % 2 > 0) return "NO";
        Stack<Character> brackStack = new Stack<Character>();
        final int len = s.length();
        for(int i = 0; i < len; i++) {
            final char c = s.charAt(i);
            switch(c) {
                case '(': {
                    brackStack.push(c);
                    break;
                }
                case '{': {
                    brackStack.push(c);
                    break;
                }
                case '[': {
                    brackStack.push(c);
                    break;
                }
                case ')': {
                    if(brackStack.empty() || brackStack.peek() != '(') return "NO";
                    brackStack.pop();
                    break;
                }
                case '}': {
                    if(brackStack.empty() || brackStack.peek() != '{') return "NO";
                    brackStack.pop();
                    break;
                }
                case ']': {
                    if(brackStack.empty() || brackStack.peek() != '[') return "NO";
                    brackStack.pop();
                    break;
                }
            }
        }
        if(!brackStack.empty()) return "NO";
        return "YES";
    }

}
