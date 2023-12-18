/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
     let max1 = -1, max2 = -1, min1 = Infinity, min2 = Infinity;

    // Find the maximum and second maximum elements
    for (const num of nums) {
        if (num > max1) {
            max2 = max1;
            max1 = num;
        } else if (num > max2) {
            max2 = num;
        }

        // Find the minimum and second minimum elements
        if (num < min1) {
            min2 = min1;
            min1 = num;
        } else if (num < min2) {
            min2 = num;
        }
    }

    // Calculate the maximum product difference
    return (max1 * max2) - (min1 * min2);
};