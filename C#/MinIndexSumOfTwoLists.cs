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
public class Solution {
    public string[] FindRestaurant(string[] list1, string[] list2) {
        Dictionary<String, int> map = new Dictionary<String, int>();
        for(int i = 0; i < list1.Length; i++) map[list1[i]] = i;
        List<String> result = new List<String>();
        int min = Int32.MaxValue;
        for(int i = 0; i < list2.Length; i++) {
			if(map.ContainsKey(list2[i])) {
				int sum = map[list2[i]] + i;
                if(sum > min) continue;
                if(sum < min) {
                    min = sum;
                    if(result.Count > 0) result.Clear();
                }
                result.Add(list2[i]);
			}
            // int idx;
            // if(map.TryGetValue(list2[i], out idx)) {
            //     int sum = idx + i;
            //     if(sum > min) continue;
            //     if(sum < min) {
            //         min = sum;
            //         if(result.Count > 0) result.Clear();
            //     }
            //     result.Add(list2[i]);
            // }
        }
        return result.ToArray();
    }
}