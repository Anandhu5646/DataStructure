// function selection(arr){
//     for(let i=0;i<arr.length;i++){
//         let small=i
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[j]<arr[small]){
//                 small=j
//             }
//         }
//         let temp=arr[i]
//         arr[i]=arr[small]
//         arr[small]=temp
//     }
//     return arr
// }
// console.log(selection([77,10,1,0,1,2]));

// function selection(arr){
//     for(let i=0;i<arr.length;i++){
//         let small=i
//         for(j=i+1;j<arr.length;j++){
//             if(arr[j]<arr[small]){
//                 small=j
//             }
//             let temp=arr[i]
//             arr[i]=arr[small]
//             arr[small]=temp
//         }
//     }
//     return arr
// }



// function selection(arr){
//     for(let i=0;i<arr.length;i++){
//         let small=i
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[j]<arr[small]){
//                 small=j
//             }
//             let temp=arr[i]
//             arr[i]=arr[small]
//             arr[small]=temp
//         }
//     }
//     return arr
// }


let arr=[-2,3,-1,6]
console.log(quick(arr));