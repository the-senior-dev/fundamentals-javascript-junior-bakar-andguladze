/**
 * Returns a new array with the elements in reverse order
 * @example
 * reverseArray([1, 2, 3]) // => [3, 2, 1]
 * @param {Array} arr
 * @returns {Array}
 */
function reverseArray(arr) {
    const reversed = [];
    for(let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }

    return reversed;}

module.exports = reverseArray;