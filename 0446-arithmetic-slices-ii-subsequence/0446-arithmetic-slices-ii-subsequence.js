/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(nums) {
    const n = nums.length;
    let totalCount = 0;  
    const dp = new Array(n).fill(null).map(() => new Map());

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            const diff = nums[i] - nums[j];

            const countJDiff = dp[j].get(diff) || 0;

            const countIDiff = dp[i].get(diff) || 0;

            totalCount += countJDiff;

            dp[i].set(diff, countIDiff + countJDiff + 1);
        }
    }

    return totalCount;
};