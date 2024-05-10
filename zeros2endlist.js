// From a list of numbers, move zero to the end of the list.

// solution recursive
const examine = (orginaList=[], resultList=[], zeroList=[]) => {
    if (orginaList.length === 0) return [...resultList, ...zeroList];
    
    let niedle = orginaList.pop();
    if (niedle === 0) {
        return examine(orginaList, resultList, [...zeroList, niedle])
    } else {
        return examine(orginaList, [niedle, ...resultList], zeroList)
    }
}
let result = examine([1,0,2,0,4,6]);
console.log(result);
