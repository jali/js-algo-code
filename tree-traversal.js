class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

let A = new Node('a')
let B = new Node('b')
let C = new Node('c')
let D = new Node('d')

A.left = B
A.right = D
B.left = C

//             A
//           /   \
//          B     D
//        /
//       C

const depthFirstPrint = (root) => {
    if (root === null) return
    console.log(root.val)
    if (root.left !== null) depthFirstPrint(root.left)
    if (root.right !== null) depthFirstPrint(root.right)
}
console.log('dfs')
depthFirstPrint(A)

const breadthFirstPrint = (root) => {
    const queue = [ root ]
    while (queue.length > 0) {
        const curr = queue.shift()
        console.log(curr.val)
        if (curr.left !== null) {
            queue.push(curr.left)
        } 
        if (curr.right !== null) {
            queue.push(curr.right)
        }
    }
}
console.log('bfs')
breadthFirstPrint(A)

const breadthFirstSearch = (root, target) => {
    const queue = [ root ]
    while (queue.length > 0) {
        const curr = queue.shift()
        if (curr.val === target) {
            return true
        }
        if (curr.left !== null) {
            queue.push(curr.left)
        } 
        if (curr.right !== null) {
            queue.push(curr.right)
        }
    }
    return false
}

console.log('find c', breadthFirstSearch(A, 'c'))
console.log('find f', breadthFirstSearch(A, 'f'))
