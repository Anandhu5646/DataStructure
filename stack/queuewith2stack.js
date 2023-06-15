class Queue{
    constructor(){
        this.stack1=[]
        this.stack2=[]
    }
    enqueue(element){
        this.stack1.push(element)
    }

    dequeue(){
        if(this.stack1.length ===0 && this.stack2.length===0){
            console.log("empty");
        }
        if(this.stack2.length===0){
            while(this.stack1.length>0){
                this.stack2.push(this.stack1.pop())
            }

        }
        return this.stack2.pop()
    }

    peek(){
        if(this.stack2.length===0 ){
            while(this.stack1.length>0){
                this.stack2.push(this.stack1.pop())
            }
        }
        return this.stack2[this.stack2.length-1]
    }

    isEmpty(){
        return this.stack1.length===0 && this.stack2.length===0
    }
    size(){
        return this.stack1.length && this.stack2.length
    }
    print(){
       let items= [...this.stack2].reverse().concat(this.stack1)
       console.log(items.join(" "));
    }
}

let queue= new Queue()

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)
queue.print()
