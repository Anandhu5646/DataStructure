// stack

// class Stack{
//     constructor(){
//         this.items=[]
//     }
//     push(element){
//         this.items.push(element)
//     }
//     pop(){
//         return this.items.pop()
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

// let stack= new Stack()

// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.push(40)
// stack.print()

// stack.pop()
// stack.print()

// console.log(stack.peek());
// console.log(stack.size());
// console.log(stack.isEmpty());


//queue

// class Queue{
//     constructor(){
//         this.items={}
//         this.front=0
//         this.rear=0
//     }

//     enqueue(element){
//         this.items[this.rear]=element
//         this.rear++
//     }
//     dequeue(){
//         let item = this.items[this.front]
//         delete this.items[this.front]
//         this.front++
//         return item
//     }

//     isEmpty(){
//         return this.rear-this.front===0
//     }

//     size(){
//         return this.rear-this.front
//     }
//     peek(){
//         return this.items[this.front]

//     }
//     print(){
//        console.log(this.items);
//     }
// }

// let queue= new Queue()

// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.print()

// queue.dequeue()
// queue.print()

// console.log(queue.peek());

//bubblesort

// function bubblesort(arr){
//     for(i=0;i<arr.length;i++){
//         for(j=0;j<arr.length-1-i;j++){
//             if(arr[j]>arr[j+1]){
//                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
//             }
//         }
//     }
//     return arr
// }
// let arr=[-2,-6,6,3,9,1]
// console.log(bubblesort(arr));

//insertion sort

// function insertion(arr){
//     for(i=1;i<arr.length;i++){
//         let j=i-1
//         let NumberTOInsert=arr[i]
//         while(j>=0 && arr[j]>NumberTOInsert){
//             arr[j+1]=arr[j]
//             j--
//         }
//         arr[j+1]=NumberTOInsert
//     }
//     return arr
// }

// let arr=[-2,-5,7,2,4,1,8]
// console.log(insertion(arr));

//quick sort

// function quickSort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     let pivot= arr[arr.length-1]
//     let left=[]
//     let right=[]
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]<pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return arr

    
// }

// let arr=[-3,-5,2,5,1,3]
// console.log(quickSort(arr));

//merge sort

// function mergeSort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     let mid= Math.floor(arr.length/2)
//     let left=arr.slice(0,mid)
//     let right=arr.slice(mid)
//     return merge(mergeSort(left),mergeSort(right))
// }

// function merge(left,right){
//     let sortedArr=[]
//     while(left.length && right.length){
//         if(left[0]<=right[0]){
//             sortedArr.push(left.shift())
//         }else{
//             sortedArr.push(right.shift())
//         }
//     }
//     return [...sortedArr,...left, ...right]
// }

// let arr=[-2,-5,5,3,1,8]
// console.log(mergeSort(arr));

//kashtable

// class  hashTable{
//     constructor(size){
//         this.table=new Array(size)
//         this.size=size
//     }
//     hash(key){
//         let total=0
//         for(i=0;i<key.length;i++){
//             total += key.charCodeAt(i)
//         }
//         return total % this.size
//     }

//     set(key,value){
//         const index= this.hash(key)
//         this.table[index]= value
//     }
//     get(key){
//         const index= this.hash(key)
//         return this.table[index]
//     }
//     remove(key){
//         const index=this.hash(key)
//         this.table[index]=undefined
//     }
//     display(){
//         for(i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i, this.table[i]);
//             }
//         }
//     }
// }


// let table = new hashTable(50)

//mergesort

function mergeSort(arr){
    if(arr.length<2){
        return arr
    }

    let mid= Math.floor(arr.length/2)
    let leftarr= arr.slice(0,mid)
    let rightarr=arr.slice(mid)
    return merge(mergeSort(leftarr),mergeSort(rightarr))
}
function merge(leftarr,rightarr){
    let sortarr=[]
    while(leftarr.length && rightarr.length){
        if(leftarr[0]<= rightarr[0]){
            sortarr.push(leftarr.shift())
        }else{
            sortarr.push(rightarr.shift())
        }
    }
    return [...sortarr, ...leftarr,...rightarr]
}

let arr=[-3,-5,2,66,434]
console.log(mergeSort(arr));