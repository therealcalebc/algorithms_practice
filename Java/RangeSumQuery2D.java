
/**
 * Your NumMatrix object will be instantiated and called as such:
 * NumMatrix obj = new NumMatrix(matrix);
 * int param_1 = obj.sumRegion(row1,col1,row2,col2);
 */
class NumMatrix {

    private int[][] matrix;
    private int[][] sumsMatrix;

    public NumMatrix(int[][] matrix) {
        this.matrix = matrix;
        this.sumsMatrix = new int[matrix.length+1][matrix[0].length+1];
        for(int i = 0; i < matrix.length; i++) {
            for(int j = 0; j < matrix[i].length; j++) {
                sumsMatrix[i+1][j+1] = matrix[i][j] + sumsMatrix[i+1][j] + sumsMatrix[i][j+1] - sumsMatrix[i][j];
            }
        }
    }

    public int sumRegion(int row1, int col1, int row2, int col2) {
        return sumsMatrix[row2+1][col2+1] + sumsMatrix[row1][col1] - sumsMatrix[row1][col2+1] - sumsMatrix[row2+1][col1];
    }

}
// class NumMatrix {

//     private int[][] matrix;

//     public NumMatrix(int[][] matrix) {
//         this.matrix = matrix;
//     }

//     public int sumRegion(int row1, int col1, int row2, int col2) {
//         int sum = 0;
//         for(int row = row1; row <= row2; row++) {
//             for(int col = col1; col <= col2; col++)
//                 sum += matrix[row][col];
//         }
//         return sum;
//     }
// }
