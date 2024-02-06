/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map();

  for (let i = 0; i < strs.length; i++) {
    const str = strs[i];
    const counts = new Array(26).fill(0);

    for (let j = 0; j < str.length; j++) {
      const char = str[j];
      counts[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    const key = counts.join();

    if (map.has(key)) {
      map.get(key).push(str);
    } else {
      map.set(key, [str]);
    }
  }

  return Array.from(map.values());
};