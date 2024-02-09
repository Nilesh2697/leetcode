/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
    nums = nums.sort((x, y) => x - y);
    let p = [], m = nums.length - 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        p[i] = [1, undefined];
        for (let j = i + 1; j < nums.length; j++)
            if (nums[j] % nums[i] === 0 && p[i][0] <= p[j][0]) p[i] = [p[j][0] + 1, j];
        if (p[m][0] < p[i][0]) m = i;
    }

    let ans = [];
    for (let i = m; i !== undefined; i = p[i][1]) ans.push(nums[i]);
    return ans;
};