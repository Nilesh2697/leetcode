/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length <= 1) return intervals; 
    intervals.sort((a, b) => a[0] - b[0]);
    
    const mergedIntervals = [intervals[0]]; 
    
    for (let i = 1; i < intervals.length; i++) {
        const currInterval = intervals[i];
        const lastMerged = mergedIntervals[mergedIntervals.length - 1];
        
        if (currInterval[0] <= lastMerged[1]) {
            lastMerged[1] = Math.max(lastMerged[1], currInterval[1]);
        } else {
            mergedIntervals.push(currInterval);
        }
    }
    
    return mergedIntervals;
};