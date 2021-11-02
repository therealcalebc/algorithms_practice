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
class Solution {
    public String[] findRestaurant(String[] list1, String[] list2) {
        Map<String, Integer> map = new HashMap<String, Integer>();
		for(int i = 0; i < list1.length; i++) map.put(list1[i], i);
		List<String> result = new ArrayList<String>();
		int min = Integer.MAX_VALUE;
		for(int i = 0; i < list2.length && i <= min; i++) {
			if(map.containsKey(list2[i])) {
				int sum = i + map.get(list2[i]);
				if(sum > min) continue;
				if(sum < min) {
					min = sum;
					result.clear();
				}
				result.add(list2[i]);
			}
		}
		return result.toArray(new String[result.size()]);
    }
}