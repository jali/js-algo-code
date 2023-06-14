class Node {
    constructor(data, prev, next) {
        this.data = data
        this.next = next || null
        this.prev = prev || null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }
    // append
    push(val) {
        if (!this.tail) {
            this.head = this.tail = new Node(val)
        } else {
            const oldTail = this.tail
            this.tail = new Node(val)
            oldTail.next = this.tail
            this.tail.prev = oldTail
        }
        this.size += 1
        return this
    }
    // get and delete tail
    pop() {
        const oldTail = this.tail
        if (!this.tail) {
            return null
        } else {
            if(this.head === this.tail) {
                this.tail = this.head = null
            } else {
                this.tail = this.tail.prev
                this.tail.next = null
                this.size--
            }
            return oldTail.data
        }
    }
    // search node by item
    search(item) {
        if (this.size === 0) { return null }
        let curr = this.head
        while (curr) {
            if (curr.data === item) {
                return curr
            } else {
                curr = curr.next
            }
        }
        return null
    }
    // insert new data at a position of an item 
    insert(data, current) {
        let currNode = this.search(current)
        let prevNode = currNode.prev
        let newNode = new Node(data, currNode.prev, currNode.next)
        prevNode.next = newNode
        currNode.prev = newNode
        this.size += 1
        return this
    }
}

const sll = new LinkedList()
sll.push(1)
sll.push(2)
sll.push(3)
console.log(sll)

// console.log(sll)
// console.log('----------------')
// console.log(sll.pop())
// console.log('----------------')
// console.log('size ==> ', sll.size)
// console.log(sll)
// console.log('search 3 = ', sll.search(3))
// console.log('previous item from found result ==>', sll.search(3).prev)
// console.log('search 13 = ',sll.search(13))
// console.log('----------------')
// console.log('insert 23 ==> ', sll.insert(23, 2))
// sll.insert(2222, 2)
// console.log('search 2222 = ', sll.search(2222))