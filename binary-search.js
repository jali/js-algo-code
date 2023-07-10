const binarySearch = (arr, target) => {
    let lower = 0
    let upper = arr.length - 1
    while (lower <= upper) {
        const mid = lower + Math.floor((upper-lower)/2)
        if (arr[mid] === target) {
            return mid
        } 
        if (target < arr[mid]) {
            upper = mid - 1
        } else {
            lower = mid + 1
        }
    }
    return -1
}

// recursive
const bs = (array, target, left, right) => {
    console.log('left', left)
    console.log('right', right)
    
    if (left > right) {
        return -1
    }
    const mid = Math.floor((left + right) / 2)
    if (array[mid] === target) { 
        return mid
    }
    if (target < array[mid]) {
        return bs(array, target, left, mid-1)
    }
    return bs(array, target, mid+1, right)
}

const a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
console.log('found at index', binarySearch(a, 17))
console.log('found at index recursively', bs(a, 17, 0, a.length-1))
