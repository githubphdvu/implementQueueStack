//npm init (be sure to have package.json, or create empty jest.config.js)
///////////////////////////////////////////////////
class queueNode {//queue node
    constructor(val) {
        this.val = val
        this.next = null
    }
}
class Queue {//implement queue using LL
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }
    isEmpty() {return this.size === 0}
    peek() {return this.first.val}//return 1st node
    enqueue(val) {//add to back. Returns undefined
        let node = new queueNode(val)
        if (!this.first) {//queue is empty (or this.isEmpty())
            this.first = node
            this.last = node
        } else {
            this.last.next = node
            this.last = node
        }
        this.size++
    }
    dequeue() {//remove from front and return value.Err if empty queue
        if (!this.first) throw new Error("Can't dequeue because queue is empty")
        let temp = this.first
        if (this.first == this.last)this.last = null
        this.first = this.first.next
        this.size--
        return temp.val
    }
}
// module.exports = Queue
///////////////////////////////////////////////////////////////////////
class stackNode {//stack node
    constructor(val) {
        this.val = val
        this.next = null
    }
}
class Stack {//implement stack using LL
    constructor() {
        this.first = null//top node IMPORTANT
        this.last = null
        this.size = 0
    }
    isEmpty() {return this.size === 0}
    peek() {return this.first.val}
    push(val) {//add to top. Returns undefined
        let node = new stackNode(val)
        if (!this.first) {
            this.first = node
            this.last = node
        } else {
            let tmp = this.first
            this.first = node
            this.first.next = tmp
        }
        this.size++
    }
    pop() {//remove from top. Return value. Err if stack is empty
        if (!this.first) throw new Error("Can't pop from an empty stack.")
        let temp = this.first
        if (this.first == this.last) this.last = null
        this.first = this.first.next
        this.size--
        return temp.val
    }
}
// module.exports = Stack
///////////////////////////////////////////////////////////////////////
// const Queue = require("./queue")
describe("test both", ()=> {   
    let Q, S
    beforeEach(()=>{
        Q = new Queue(),
        S = new Stack()
    })
    it("", ()=> {//or test()
        expect(Q.isEmpty()).toBe(true)
        expect(S.isEmpty()).toBe(true)
        expect(Q.size).toBe(0)
        expect(S.size).toBe(0)
        expect(() => Q.dequeue()).toThrow(Error)
        expect(() => S.pop()).toThrow(Error)

        expect(Q.enqueue(10)).toBe(undefined)
        Q.enqueue(100)
        expect(Q.peek()).toBe(10)
        expect(Q.first.val).toBe(10)
        expect(Q.last.val).toBe(100)
        expect(Q.dequeue()).toBe(10)

        expect(S.push(10)).toBe(undefined)
        S.push(100)
        expect(S.peek()).toBe(100)
        expect(S.first.val).toBe(100)
        expect(S.last.val).toBe(10)    
        expect(S.pop()).toBe(100)
    })
})
//using LL internally to manage queue and stack///////////////////////////////////////////////
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    isEmpty() {return this.size === 0}
    peek() {return this.head ? this.head.val : null}
    addToTail(val) {
        const newNode = new ListNode(val)
        if (!this.head) this.head = newNode
        else this.tail.next = newNode
        this.tail = newNode
        this.size++
    }
    removeFromHead() {
        if (!this.head) return null
        const val = this.head.val
        this.head = this.head.next
        if (!this.head) this.tail = null
        this.size--
        return val
    }
}
class Queue1{
    constructor() {
        this.list = new LinkedList()
        this.size = 0
    }
    isEmpty() {return this.size === 0}
    peek() {return this.list.peek()}
    enqueue(val) {
        this.list.addToTail(val)
        this.size++
    }
    dequeue() {
        if (this.isEmpty()) throw new Error("Can't dequeue because queue is empty")
        const dequeuedVal = this.list.removeFromHead()
        this.size--
        return dequeuedVal
    }
}
class Stack1{
    constructor() {
        this.list = new LinkedList()
        this.size = 0
    }
    isEmpty() {return this.size === 0}
    peek() {return this.list.isEmpty() ? null : this.list.tail.val}
    push(val) {
        this.list.addToTail(val)
        this.size++
    }
    pop() {
        if (this.isEmpty()) throw new Error('Cannot pop empty stack')
        const poppedVal = this.list.removeFromHead()
        this.size--
        return poppedVal
    }
}
//////////////////////////////////////////////////////////////
describe('Test both', () => {
    let Q,S
    beforeEach(() => {
        Q = new Queue1()
        S = new Stack1()
    })
    it('', () => {
        expect(Q.isEmpty()).toBe(true)
        expect(S.isEmpty()).toBe(true)
        expect(Q.size).toBe(0)
        expect(S.size).toBe(0)
        expect(()=>Q.dequeue()).toThrow(Error)
        expect(()=>S.pop()).toThrow(Error)
        
        Q.enqueue(10)
        Q.enqueue(20)
        expect(Q.peek()).toBe(10)
        S.push(10)
        S.push(20)
        expect(S.peek()).toBe(20)

        expect(Q.size).toBe(2)
        expect(S.size).toBe(2) 

        Q.dequeue()
        S.pop()
    })
})
