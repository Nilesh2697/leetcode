/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
     let left = 0; // Pointer for 0
    let right = nums.length - 1; // Pointer for 2
    let curr = 0; // Pointer for traversal
    
    // One-pass algorithm
    while (curr <= right) {
        if (nums[curr] === 0) {
            // If current element is 0, swap it with element at left pointer
            [nums[curr], nums[left]] = [nums[left], nums[curr]];
            left++;
            curr++;
        } else if (nums[curr] === 2) {
            // If current element is 2, swap it with element at right pointer
            [nums[curr], nums[right]] = [nums[right], nums[curr]];
            right--;
        } else {
            // If current element is 1, move to next element
            curr++;
        }
    }
};