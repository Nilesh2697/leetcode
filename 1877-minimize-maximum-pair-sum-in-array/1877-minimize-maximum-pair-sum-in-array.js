/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    
    nums.sort((a, b) => a - b);

    let minMaxSum = 0;
    for (let i = 0, j = nums.length - 1; i < j; i++, j--) {
        minMaxSum = Math.max(minMaxSum, nums[i] + nums[j]);
    }

    return minMaxSum;
};