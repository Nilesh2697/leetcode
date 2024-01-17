/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const map = new Map();

    for (const val of arr) {
        map.set(val, (map.get(val) || 0) + 1);
    }

    const set = new Set();

    for (const val of map.values()) {
        if (!set.has(val)) {
            set.add(val);
        } else {
            return false;
        }
    }

    return true;
};