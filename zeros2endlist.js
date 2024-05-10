// From a list of numbers, move zero to the end of the list.
// And the solution must be O(N)

// Using recursive function
const examine = (remainder=[], numbers=[], zeros=[]) => {
    if (remainder.length === 0) return [...numbers, ...zeros];
    
    let item = remainder.pop();
    if (item === 0) {
        return examine(remainder, numbers, [...zeros, item])
    } else {
        return examine(remainder, [item, ...numbers], zeros)
    }
}
let result = examine([1,0,2,0,4,6]);
console.log(result);
