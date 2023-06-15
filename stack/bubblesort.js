// function bubbleSort(arr){
//    for(i=0;i<arr.length;i++){
//     for(j=0;j<arr.length-1-i;j++){
//         if(arr[j]>arr[j+1]){
//             [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
//         }
//     }
    
//    }
//    return arr
// }

// let arr=[-2,3,1,-8,10]
// console.log(bubbleSort(arr));

function bubbleSort(arr){
    for(i=0;i<arr.length;i++){
        for(j=0;j<arr.length-1;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
            }

        }
    }
    return arr
}


let arr=[-2,3,1,-8,10]
console.log(bubbleSort(arr));
