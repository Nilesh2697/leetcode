/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = (nums) => {
    const seen = new Set();

    for (const num of nums) {
        if (seen.has(num)) {
            return true; // Found a duplicate
        }
        seen.add(num);
    }

    return false; // No duplicates found
    
}