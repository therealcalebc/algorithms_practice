/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 */

public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        Dictionary<int, int> dict = new Dictionary<int, int>();
        for(int i = 0; i < nums.Length; i++) {
            int diff = target - nums[i];
            if(dict.ContainsKey(diff)) {
                int[] result = {dict[diff], i};
                return result;
            }
            dict[nums[i]] = i;
        }
        return null;
    }
}