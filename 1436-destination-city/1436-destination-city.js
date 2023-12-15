/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
   const outgoingCities = new Set(paths.map(path => path[0]));
    return paths.find(path => !outgoingCities.has(path[1]))[1]; 
};