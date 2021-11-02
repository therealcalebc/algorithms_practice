
class Solution {
    public int maxScore(int[] cardPoints, int k) {

		int part = cardPoints.length - k;
		int total = cardPoints[0];
		for (int i = 1; i < part; i++)
			total += cardPoints[i];
		int sub = total;
		int min = sub;
		int j = 0;
		for (int i = part; i < cardPoints.length; i++) {
			total += cardPoints[i];
			sub += cardPoints[i] - cardPoints[j];
			j++;
			if (sub < min) min = sub;
		}
		return total - min;

        // int sum = 0;
        // for (int i = 0; i < k; i++)
        //     sum += cardPoints[i];
        // int max = sum;
        // for (int j = k - 1; j >= 0; j--) {
        //     sum += cardPoints[cardPoints.length - (k - j)] - cardPoints[j];
        //     if (sum > max) max = sum;
        // }
        // return max;

		// int[] left = new int[k+1];
		// int[] right = new int[k+1];
		// left[0] = 0;
		// right[0] = 0;
		// for (int x = 0; x < k; x++) {
		// 	left[x + 1] = left[x] + cardPoints[x];
		// 	right[x + 1] = right[x] + cardPoints[cardPoints.length - x - 1];
		// }
		// int max = 0;
		// for (int i = 0; i <= k; i++) {
		// 	int temp = left[k - i] + right[i];
		// 	if (temp > max) max = temp;
		// }
		// return max;

    }
}
