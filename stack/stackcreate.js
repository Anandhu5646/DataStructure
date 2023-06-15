// class Stack{
//     constructor(){
//         this.items= []
//     }

//     push(element){
//         this.items.push(element)
//     }

//     pop(){
//      return   this.items.pop()
//     }

//     peek(){
//         return this.items[this.items.length-1]
//     }

//     isEmpty(){
//         return this.items.length===0
//     }

//     size(){
//         return this.items.length
//     }

//     print(){
//         console.log(this.items.toString());
//     }
// }

// const stack= new Stack()

// console.log(stack.isEmpty());

// stack.push(20)
// stack.push(30)
// stack.push(40)
// stack.push(50)
// console.log(stack.peek());
// console.log(stack.size());

// stack.print()

// class Stack{
//     constructor(){
//         this.items=[]
//     }

//     push(element){
//         this.items.push(element)
//     }

//     pop(){
//       return  this.items.pop()
//     }

//     peek(){
//         return this.items[this.items.length-1]
//     }
//     isEmpty(){
//         return this.items.length===0
//     }

//     size(){
//         return this.items.length
//     }

//     print(){
//         console.log(this.items.toString());
//     }

// }

// const stack= new Stack()

// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.push(40)
// stack.push(50)

// stack.print()

// stack.pop()
// stack.print()
// console.log(stack.peek);


class Stack{
    constructor(){
        this.items=[]
    }

    push(element){
        this.items.push(element)
    }

    pop(){
        return this.items.pop()
    }

    peek(){
        return this.items[this.items.length-1]
    }
    isEmpty(){
        return this.items.length===0
    }

    size(){
        return this.items.length
    }
    print(){
        console.log(this.items.toString());
    }
    deleteMiddle(){
        let tempArr=[]
        let size= this.items.length
        let mid=Math.floor(size/2)
        
        for(let i=0; i<mid;i++){
            tempArr.push(this.items.pop())
        }

        this.items.pop()

        while(tempArr.length>0){
            this.items.push(tempArr.pop())
        }
    }
}

let stack= new Stack()
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.push(50)
stack.print()

stack.deleteMiddle()
stack.print()