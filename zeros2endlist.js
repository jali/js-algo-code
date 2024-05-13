// from a list of numbers, move zero to the end of the list.
// solution must be O(N).
//
//   time complexity calculation
//   traversing => O(N)
//   pop => O(1) 
//   appending using spread operator => O(1)
//   result => O(N)
//
// recursive function
const examine = (tail=[], numbers=[], zeros=[]) => {
    if (tail.length === 0) return [...numbers, ...zeros];
    
    let head = tail.pop();
    if (head === 0) {
        return examine(tail, numbers, [...zeros, head])
    } else {
        return examine(tail, [head, ...numbers], zeros)
    }
};

let result = examine([1,0,2,0,4,6]);
console.log(result);
