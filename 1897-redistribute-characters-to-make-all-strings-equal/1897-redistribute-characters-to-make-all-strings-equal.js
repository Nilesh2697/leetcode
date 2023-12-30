/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function(words) {
    const charCount = Array.from(words.join('')).reduce((count, char) => {
        count[char] = (count[char] || 0) + 1;
        return count;
    }, {});

    for (const count of Object.values(charCount)) {
        if (count % words.length !== 0) {
            return false;
        }
    }

    return true;
};