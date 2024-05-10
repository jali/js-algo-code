// From a list of numbers, move zero to the end of the list.

// solution recursive
const examine = (remainder=[], numbers=[], zeros=[]) => {
    if (remainder.length === 0) return [...numbers, ...zeros];
    
    let niedle = remainder.pop();
    if (niedle === 0) {
        return examine(remainder, numbers, [...zeros, niedle])
    } else {
        return examine(remainder, [niedle, ...numbers], zeros)
    }
}
let result = examine([1,0,2,0,4,6]);
console.log(result);
