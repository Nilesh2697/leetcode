/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
     const result = [];
    const stack = [];
    const nextGreater = new Map();

    for (const num of nums2) {
        while (stack.length > 0 && num > nums2[stack[stack.length - 1]]) {
            const prevIndex = stack.pop();
            nextGreater[nums2[prevIndex]] = num;
        }
        stack.push(nums2.indexOf(num));
    }

    for (const num of nums1) {
        result.push(nextGreater[num] || -1);
    }

    return result;
};