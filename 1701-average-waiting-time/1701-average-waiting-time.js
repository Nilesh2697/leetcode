/**
 * @param {number[][]} customers
 * @return {number}
 */
var averageWaitingTime = function(customers) {
    let currentTime = 0;
    let totalWaitingTime = 0;
    
    for (let i = 0; i < customers.length; i++) {
        let arrivalTime = customers[i][0];
        let preparationTime = customers[i][1];
        
        // If the chef is idle until the customer arrives
        if (currentTime < arrivalTime) {
            currentTime = arrivalTime;
        }
        
        // Calculate the finish time of the current customer's order
        let finishTime = currentTime + preparationTime;
        
        // Calculate the waiting time for the current customer
        let waitingTime = finishTime - arrivalTime;
        
        // Add the waiting time to the total waiting time
        totalWaitingTime += waitingTime;
        
        // Update the current time to the finish time of the current order
        currentTime = finishTime;
    }
    
    // Calculate the average waiting time
    return totalWaitingTime / customers.length;
};
