// function insertionSort(arr){
//     for(i=1;i<arr.length;i++){
//         let j=i-1
//         let NumberToInsert=arr[i]
//         while(j>=0 && arr[j]>NumberToInsert){
//             arr[j+1]=arr[j]
//             j--;
//         }
//         arr[j+1]=NumberToInsert
//     }
//     return arr
// }

// let arr=[-4,-2,5,7,2,10]
// console.log(insertionSort(arr));


function insertionSort(arr){
    for(i=1;i<arr.length;i++){
        let j=i-1
        let NtI=arr[i]
        while(j>=0 && arr[j]> NtI){
            arr[j+1]=arr[j]
            j=j-1;
        }
        arr[j+1]=NtI
    }
    return arr
}