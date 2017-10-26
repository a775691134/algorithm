function selectionSort(arr){
    for(let i=0;i<arr.length;i++){
        let min = i
        for(let j=i+1;j<arr.length;j++){
            if(arr[j] < arr[min]){
                min=j
            }   
        }
        let num = arr[i]
        arr[i] = arr[min]
        arr[min] = num
    }
    return arr
}

arr = [10,8,9,2,5,6,4,1,3,7]

console.log(selectionSort(arr))
// 1 2 3 4 5 6 7 8 9 10