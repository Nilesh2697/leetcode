/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findColumnWidth = function(grid) {
const ans = [];
    for (let i = 0; i < grid[0].length; i++) {
        let mx = 0;
        for (let j = 0; j < grid.length; j++) {
            mx = Math.max(mx, grid[j][i].toString().length);
        }
        ans.push(mx);
    }
    return ans;
};