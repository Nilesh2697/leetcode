/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
        let result = Number.MIN_SAFE_INTEGER; 
    let sum = 0;
    
    nums.map ((n, i) => {
        sum += n 
        result = Math.max(sum, result); 
        sum = sum < 0 ? 0 : sum; 
    })
    return result
};