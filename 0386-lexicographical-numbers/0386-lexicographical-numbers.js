/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function (n) {
    if (1 <= n <= 5 * 10 ** 4) {
        let arr = Array.from(Array(n), (_, i) => i+1)
        arr.toString();
        return arr.sort();
    }
};