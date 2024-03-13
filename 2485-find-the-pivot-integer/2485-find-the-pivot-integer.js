/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
     let totalSum = (n * (n + 1)) / 2; // Sum of integers from 1 to n

    let leftSum = 0;
    for (let x = 1; x <= n; x++) {
        leftSum += x;
        let rightSum = totalSum - leftSum + x; // Adjust rightSum to include x
        if (leftSum === rightSum) {
            return x;
        }
    }
    return -1;
};