/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
    // Check if the lengths of the strings are different
    if (s.length !== t.length) {
        return false;
    }

    // Create objects to store the frequency of characters in both strings
    const sFrequency = {};
    const tFrequency = {};

    // Populate frequency object for string s
    for (const char of s) {
        sFrequency[char] = (sFrequency[char] || 0) + 1;
    }

    // Populate frequency object for string t
    for (const char of t) {
        tFrequency[char] = (tFrequency[char] || 0) + 1;
    }

    // Compare the frequency of characters in both strings
    for (const char in sFrequency) {
        if (sFrequency[char] !== tFrequency[char]) {
            return false;
        }
    }

    return true;
}