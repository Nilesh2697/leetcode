/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];

    for (const token of tokens) {
        if (isOperator(token)) {
            const operand2 = stack.pop();
            const operand1 = stack.pop();
            const result = operate(operand1, operand2, token);
            stack.push(result);
        } else {
            stack.push(parseInt(token, 10));
        }
    }

    return stack.pop();
};

/**
 * Check if a token is an operator
 * @param {string} token
 * @return {boolean}
 */
function isOperator(token) {
    return token === '+' || token === '-' || token === '*' || token === '/';
}

/**
 * Perform arithmetic operation based on the operator
 * @param {number} operand1
 * @param {number} operand2
 * @param {string} operator
 * @return {number}
 */
function operate(operand1, operand2, operator) {
    switch (operator) {
        case '+':
            return operand1 + operand2;
        case '-':
            return operand1 - operand2;
        case '*':
            return operand1 * operand2;
        case '/':
            // Division truncates toward zero
            return Math.trunc(operand1 / operand2);
    }
}


