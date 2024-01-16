/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
    this.elements = [];
    this.indices = new Map();
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.indices.has(val)) {
        return false; // Element already exists
    }

    this.elements.push(val);
    this.indices.set(val, this.elements.length - 1);
    return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (!this.indices.has(val)) {
        return false; // Element doesn't exist
    }

    const lastElement = this.elements[this.elements.length - 1];
    const idxToRemove = this.indices.get(val);

    this.elements[idxToRemove] = lastElement;
    this.indices.set(lastElement, idxToRemove);

    this.elements.pop();
    this.indices.delete(val);

    return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const randomIndex = Math.floor(Math.random() * this.elements.length);
    return this.elements[randomIndex];
};


