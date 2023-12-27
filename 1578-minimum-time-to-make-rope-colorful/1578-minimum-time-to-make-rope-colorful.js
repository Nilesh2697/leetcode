/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function(colors, neededTime) {
        let totalTime = 0;
    let maxTimeForCurrentColor = neededTime[0];

    for (let i = 1; i < colors.length; ++i) {
        if (colors.charAt(i - 1) !== colors.charAt(i)) {
            maxTimeForCurrentColor = 0;
        }
        totalTime += Math.min(neededTime[i], maxTimeForCurrentColor);
        maxTimeForCurrentColor = Math.max(maxTimeForCurrentColor, neededTime[i]);
    }
    return totalTime;

};