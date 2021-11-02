/**
 * Given an integer n, return all the structurally unique BST's (binary search trees), which has exactly n nodes of unique values from 1 to n. Return the answer in any order.
 */

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
public class Solution {
    public IList<TreeNode> GenerateTrees(int n) {
        return GenerateTrees(n, 1);
    }
    public List<TreeNode> GenerateTrees(int n, int lo) {
        List<TreeNode> toReturn = new List<TreeNode>();
        if(n == lo) {
            toReturn.Add(new TreeNode(n));
            return toReturn;
        }
        TreeNode temp = null;
        List<TreeNode> left = GenerateTrees(n - 1, lo);
        List<TreeNode> right = GenerateTrees(n, lo + 1);
        foreach(TreeNode node in left) {
            temp = new TreeNode(n);
            temp.left = node;
            toReturn.Add(temp);
        }
        foreach(TreeNode node in right) {
            temp = new TreeNode(lo);
            temp.right = node;
            toReturn.Add(temp);
        }
        if(n - lo > 1) {
            for(int i = lo + 1; i < n; i++) {
                left = GenerateTrees(i - 1, lo);
                right = GenerateTrees(n, i + 1);
                for(int j = 0; j < left.Count; j++) {
                    for(int k = 0; k < right.Count; k++) {
                        temp = new TreeNode(i);
                        temp.left = left[j];
                        temp.right = right[k];
                        toReturn.Add(temp);
                    }
                }
            }
        }
        return toReturn;
    }
}