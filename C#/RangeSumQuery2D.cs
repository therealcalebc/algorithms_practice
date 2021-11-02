
/**
 * Your NumMatrix object will be instantiated and called as such:
 * NumMatrix obj = new NumMatrix(matrix);
 * int param_1 = obj.SumRegion(row1,col1,row2,col2);
 */
public class NumMatrix {

	private int w;
	private int[] sums;

	public NumMatrix(int[][] matrix) {
		w = matrix[0].Length + 1;
		sums = new int[(matrix.Length+1)*w];
		int m, n;
		for(int i = 0; i < matrix.Length; i++) {
			m = i * w;
			n = m + w + 1;
			for(int j = 0; j < w-1; j++)
				sums[n+j] = matrix[i][j] + sums[m+w+j] + sums[m+1+j] - sums[m+j];
		}
	}

	public int SumRegion(int row1, int col1, int row2, int col2) {
		row2++;
		col2++;
		return sums[(row2 * w + col2)] + sums[(row1 * w + col1)] - sums[(row1 * w + col2)] - sums[(row2 * w + col1)];
	}

	// private int rows;
	// private int cols;
	// private int[] sums;

	// public NumMatrix(int[][] matrix) {
	// 	rows = matrix.Length + 1;
	// 	cols = matrix[0].Length + 1;
	// 	sums = new int[rows*cols];
	// 	int a;
	// 	int b;
	// 	int c;
	// 	int d;
	// 	for(int i = 0; i < rows-1; i++) {
	// 		a = i * cols;
	// 		b = a + 1;
	// 		c = a + cols;
	// 		d = c + 1;
	// 		for(int j = 0; j < cols-1; j++)
	// 			sums[d+j] = matrix[i][j] + sums[c+j] + sums[b+j] - sums[a+j];
	// 	}
	// }

	// public int SumRegion(int row1, int col1, int row2, int col2) {
	// 	row2++;
	// 	col2++;
	// 	int a = row1 * cols + col1;
	// 	int b = row1 * cols + col2;
	// 	int c = row2 * cols + col1;
	// 	int d = row2 * cols + col2;
	// 	return sums[d] + sums[a] - sums[b] - sums[c];
	// }

    // private int[][] sumsMatrix;

    // public NumMatrix(int[][] matrix) {
    //     sumsMatrix = new int[matrix.Length+1][];
    //     sumsMatrix[0] = new int[matrix[0].Length+1];
    //     int[] temp;
    //     int[] sumsTemp;
    //     for(int i = 0; i < matrix.Length; i++) {
    //         temp = matrix[i];
    //         sumsTemp = new int[temp.Length+1];
    //         for(int j = 0; j < temp.Length; j++) {
    //             sumsTemp[j+1] = temp[j] + sumsTemp[j];
    //         }
    //         sumsMatrix[i+1] = sumsTemp;
    //     }
    // }

    // public int SumRegion(int row1, int col1, int row2, int col2) {
    //     int sum = 0;
    //     for(int i = row1+1; i <= row2+1; i++) sum += (sumsMatrix[i][col2+1] - sumsMatrix[i][col1]);
    //     return sum;
    // }

    // private int[][] sumsMatrix;

    // public NumMatrix(int[][] matrix) {
    //     sumsMatrix = new int[matrix.Length+1][];
    //     sumsMatrix[0] = new int[matrix[0].Length+1];
    //     int[] temp;
    //     int[] sumsTemp;
    //     for(int i = 0; i < matrix.Length; i++) {
    //         temp = matrix[i];
    //         sumsTemp = new int[temp.Length+1];
    //         for(int j = 0; j < temp.Length; j++) {
    //             sumsMatrix[i+1][j+1] = matrix[i][j] + sumsMatrix[i+1][j] + sumsMatrix[i][j+1] - sumsMatrix[i][j];
    //         }
    //         sumsMatrix[i+1] = sumsTemp;
    //     }
    // }

    // public int SumRegion(int row1, int col1, int row2, int col2) {
    //     return sumsMatrix[row2+1][col2+1] + sumsMatrix[row1][col1] - sumsMatrix[row1][col2+1] - sumsMatrix[row2+1][col1];
    // }
}
