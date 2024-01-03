/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(bank) {
     let prev = 0;
    let ans = 0;

    for (const row of bank) {
      let count = 0;
      for (let i = 0; i < row.length; i++) {
        if (row.charAt(i) === '1') {
          count++;
        }
      }

      if (count > 0) {
        ans += prev * count;
        prev = count;
      }
    }

    return ans;
};