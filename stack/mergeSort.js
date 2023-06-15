// function mergeSort(arr){
//      if(arr.length<2){
//         return arr
//      }

//      let mid= Math.floor(arr.length/2)
//      let left= arr.slice(0,mid)
//      let right= arr.slice(mid)

//      return merge(mergeSort(left),mergeSort(right))

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
//     return [...sortedArr,...left,...right]
// }

// let arr=[-2,-3,4,7,2,10]
// console.log(mergeSort(arr));

// function mergeSort(arr){
//     if(arr.length<2){
//         return arr
//     }

//     let mid= Math.floor(arr.length/2)
//     let leftArr= arr.slice(0,mid)
//     let rightArr= arr.slice(mid)
//     return merge(mergeSort(leftArr),mergeSort(rightArr))
// }

// function merge(leftArr,rightArr){
//     let sortedArr=[]
//     while(leftArr.length && rightArr.length){
//         if(leftArr[0]<=rightArr[0]){
//             sortedArr.push(leftArr.shift())
//         }else{
//             sortedArr.push(rightArr.shift())
//         }
//     }
// }


function mergeSort(arr){
    if(arr.length<2){
        return arr
    }
    let mid=Math.floor(arr.length/2)
    let left=arr.slice(0,mid)
    let right=arr.slice(mid)
    return merge(mergeSort(left),mergeSort(right))
}

function merge(left,right){
    let sortedArr=[]
    while(left.length && right.length){
        if(left[0]<=right[0]){
            sortedArr.push(left.shift())
        }else{
            sortedArr.push(right.shift())
        }
    }
    return [...sortedArr,...left,...right]
}

let arr=[-2,-1,4,5,3,10]
console.log(mergeSort(arr));