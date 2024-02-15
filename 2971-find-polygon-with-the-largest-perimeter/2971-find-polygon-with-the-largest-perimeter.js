/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    nums.sort((a, b) => a - b);
    let prefixSum = new Array(nums.length).fill(0);
    prefixSum[0] = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        prefixSum[i] = nums[i] + prefixSum[i - 1];
    }
    
    let result = -1;
    for (let i = 2; i < nums.length; i++) {
        if (nums[i] < prefixSum[i - 1]) {
            result = prefixSum[i];
        }
    }
    
    return result;
};