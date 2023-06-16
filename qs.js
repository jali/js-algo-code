const quicksort = (arr) => {
    if (arr.length === 0) {
        return arr
    }
    const leftArr = []
    const rightArr = []
    let pivot = arr[arr.length - 1]
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            leftArr.push(arr[i])
        } else {
            rightArr.push(arr[i])
        }
    }
    return [...quicksort(leftArr), pivot, ...quicksort(rightArr)]
}

console.log(quicksort([4,7,99,20,1,0,33,2098,389]))
console.log(quicksort([100,1,200,50]))