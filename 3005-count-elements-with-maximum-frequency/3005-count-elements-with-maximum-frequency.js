/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
   let max = 1;
    let map = new Map();
    for (let num of nums) {
        if (!map.has(num)) {
            map.set(num, 1);
        } else {
            let temp = map.get(num) + 1;
            map.set(num, temp);
            max = Math.max(temp, max);
        }
    }
    let ans = 0;
    for (let [, value] of map) {
        if (value === max) ans += max;
    }
    return ans;
};