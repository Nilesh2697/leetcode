/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
     const isValid = (arr) => {
        const seen = new Set();
        for (const num of arr) {
            if (num !== '.' && seen.has(num)) {
                return false;
            }
            seen.add(num);
        }
        return true;
    };

    // Check rows
    for (let i = 0; i < 9; i++) {
        if (!isValid(board[i])) {
            return false;
        }
    }

    // Check columns
    for (let j = 0; j < 9; j++) {
        const column = [];
        for (let i = 0; i < 9; i++) {
            column.push(board[i][j]);
        }
        if (!isValid(column)) {
            return false;
        }
    }

    // Check sub-boxes
    for (let i = 0; i < 9; i += 3) {
        for (let j = 0; j < 9; j += 3) {
            const subBox = [];
            for (let x = i; x < i + 3; x++) {
                for (let y = j; y < j + 3; y++) {
                    subBox.push(board[x][y]);
                }
            }
            if (!isValid(subBox)) {
                return false;
            }
        }
    }

    return true;
};