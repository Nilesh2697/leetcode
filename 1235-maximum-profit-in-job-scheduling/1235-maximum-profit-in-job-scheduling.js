/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function(startTime, endTime, profit) {
    const jobs = [];
    for (let i = 0; i < startTime.length; i++) {
        jobs.push({ start: startTime[i], end: endTime[i], profit: profit[i] });
    }
    jobs.sort((a, b) => a.end - b.end);

    const dp = new Array(jobs.length).fill(0);

    dp[0] = jobs[0].profit;

    for (let i = 1; i < jobs.length; i++) {
                let j = i - 1;
        while (j >= 0 && jobs[j].end > jobs[i].start) {
            j -= 1;
        }

        dp[i] = Math.max(dp[i - 1], jobs[i].profit + (j >= 0 ? dp[j] : 0));
    }

    return dp[jobs.length - 1];
};