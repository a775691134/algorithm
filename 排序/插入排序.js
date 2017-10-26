function insertionSort(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i; j>0 && arr[j]<arr[j-1]; j--){
            let num = arr[j]
            arr[j] = arr[j-1]
            arr[j-1] = num
        }
    }
    return arr
}


arr = [10,8,9,2,5,6,4,1,3,7]

console.log(insertionSort(arr))
// 1 2 3 4 5 6 7 8 9 10