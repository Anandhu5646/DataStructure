// class Queue{
//     constructor(){
//         this.items=[]
//     }

//     equeue(element){
//         this.items.push(element)
//     }

//     dequeue(){
//         return this.items.shift()
//     }

//     isEmpty(){
//         return this.items.length===0
//     }

//     peek(){
//         if(!this.isEmpty()){
//             return this.items[0]
//         }
//         return null
//     }

//     size(){
//         return this.items.length
//     }

//     print(){
//         console.log(this.items.toString());
//     }

// }

// let queue = new  Queue()
// console.log(queue.isEmpty());
// queue.equeue(10)
// queue.equeue(20)
// queue.equeue(30)
// queue.equeue(40)
// console.log(queue.size());
// queue.print()

// queue.dequeue()
// queue.print()
// console.log(queue.peek());

// class Queue{
//     constructor(){
//         this.items={}
//         this.rear=0
//         this.front=0
//     }
//     enqueue(element){
//         this.items[this.rear]= element 
//         this.rear++
//     }

//     dequeue(){
//         const item= this.items[this.front]
//         delete this.items[this.front]
//         this.front++
//         return item
//     }

//     isEmpty(){
//         return this.rear - this.front ===0

//     }
//     peek(){
//         return this.items[this.front]
//     }
//     size(){
//         return this.rear - this.front
//     }
//     print(){
//         console.log(this.items);
//     }
// }

// let queue= new Queue()

// queue.enqueue(20)
// queue.print()


// class Queue{
//     constructor(){
//         this.items={}
//         this.rear=0
//         this.front=0
//     }

//     enqueue(element){
//         this.items[this.rear]=element
//         this.rear++
//     }
//     dequeue(){
//      const item= this.items[this.front]
//      delete this.items[this.front]
//      this.front++
//      return item
//     }

//     isEmpty(){
//         return this.rear- this.front===0
//     }

//     size(){
//         return this.rear-this.front
//     }

//     peek(){
//         return this.items[this.front]
//     }

//     print(){
//         console.log(this.items);
//     }


// }

// let queue= new Queue()

// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.enqueue(40)
// queue.print()

// queue.dequeue()
// queue.print()

// queue.dequeue()
// queue.print()


class Queue{
    constructor(){
        this.items={}
        this.rear=0
        this.front=0
    }
    enqueue(element){
        this.items[this.rear]=element
        this.rear++
    }

    dequeue(){
        let item= this.items[this.front]
        delete this.items[this.front]
        this.front++
        return item
    }

    isEmpty(){
       return this.rear-this.front===0
    }
    size(){
        return this.rear-this.front
    }

    peek(){
        return this.items[this.front]
    }

    print(){
        console.log(this.items);
    }
}

let 