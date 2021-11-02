/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 */

class Solution {
    public int[] twoSum(int[] nums, int target) {
		Map<Integer, Integer> hashmap = new HashMap();
        for(int i = 0; i < nums.length; i++) {
            int diff = target - nums[i];
            if(hashmap.containsKey(diff)) {
                int[] result = {hashmap.get(diff), i};
                result[0] = hashmap.get(diff);
                result[1] = i;
                return result;
            }
            hashmap.put(nums[i], i);
        }
        return null;
    }
}
