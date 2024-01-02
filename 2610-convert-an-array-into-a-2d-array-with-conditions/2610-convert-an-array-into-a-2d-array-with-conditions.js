/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
     const freq = new Array(nums.length + 1).fill(0);
        
        const ans = [];
        for (const c of nums) {
            if (freq[c] >= ans.length) {
                ans.push([]);
            }
            
            // Store the integer in the list corresponding to its current frequency.
            ans[freq[c]].push(c);
            freq[c]++;
        }
        
        return ans;
    }