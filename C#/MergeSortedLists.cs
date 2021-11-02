/**
 * Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.
 * Constraints:
 * - The number of nodes in both lists is in the range [0, 50]
 * - -100 <= Node.val <= 100
 * - Both l1 and l2 are sorted in non-decreasing order.
 */

/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int val=0, ListNode next=null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
public class Solution {
    public ListNode MergeTwoLists(ListNode l1, ListNode l2) {
        if(l1 != null && l2 != null) {
            ListNode temp;	//intermediate variable
            if(l1.val < l2.val) {
                temp = MergeTwoLists(l1.next, l2);
				//for some reason using this extra var made it run faster...
                l1.next = temp;
                return l1;
            }
            temp = MergeTwoLists(l1, l2.next);
            l2.next = temp;
            return l2;
        }
        if(l1 != null) return l1;
        if(l2 != null) return l2;
        return null;
    }
}