function shellSort(arr){
    let h = 1
    let N = arr.length
    while(h < N/3){
        h = h*3+1
    }
    while(h >= 1){
        for(let i=h;i<N;i++){
            for(let j=i; j>=h && arr[j]<arr[j-h]; j-=h){
                let num = arr[j]
                arr[j] = arr[j-h]
                arr[j-h] = num
            }
        }
        h = parseInt(h/3)
    }
    return arr
}

arr = [10,8,9,2,5,6,4,1,3,7]

console.log(shellSort(arr))
// 1 2 3 4 5 6 7 8 9 10 end.