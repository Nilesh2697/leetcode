/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDotProduct = function(nums1, nums2) {
    const m = nums1.length;
    const n = nums2.length;

    // Initialize the dp array
    const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(Number.MIN_SAFE_INTEGER));

    // Calculate the dp array
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            dp[i][j] = Math.max(
                dp[i-1][j-1] + nums1[i-1] * nums2[j-1],
                dp[i][j-1],
                dp[i-1][j],
                nums1[i-1] * nums2[j-1]
            );
        }
    }

    // Return the result
    return dp[m][n];
};