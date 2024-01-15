/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
        const losses = {};
    // Dictionary to store whether a player has played at least one match
    const played = {};

    // Iterate through the matches and update the dictionaries
    for (const match of matches) {
        const [winner, loser] = match;
        played[winner] = true;  // Mark the winner as having played at least one match
        played[loser] = true;   // Mark the loser as having played at least one match

        // Update the number of losses for the loser
        if (losses[loser]) {
            losses[loser] += 1;
        } else {
            losses[loser] = 1;
        }
    }

    // Construct the answer lists
    const notLostAnyMatch = Object.keys(played).filter(player => losses[player] === undefined || losses[player] === 0);
    const lostOneMatch = Object.keys(played).filter(player => losses[player] === 1);

    // Sort the lists in increasing order
    notLostAnyMatch.sort((a, b) => a - b);
    lostOneMatch.sort((a, b) => a - b);

    return [notLostAnyMatch.map(Number), lostOneMatch.map(Number)];

};