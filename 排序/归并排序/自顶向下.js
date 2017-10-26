function mergeSort(arr,lo,hi){
    if(arguments.length === 1){
        mergeSort(arr,0,arr.length-1)
    }else{
        if(hi <= lo){
            return
        }
        let mid = parseInt(lo + parseInt(hi - lo)/2)
        mergeSort(arr,lo,mid)
        mergeSort(arr,mid+1,hi)        
        merge(arr,lo,mid,hi)    
    }
    return arr
}

function merge(arr,lo,mid,hi){
    let i = lo
    let j = mid + 1
    let newArr = []
    for(let k=lo;k <= hi;k++){
        newArr[k] = arr[k]
    }
    for(let k=lo;k <= hi;k++){
        if(i>mid) {
            arr[k] = newArr[j++]
            console.log(1)
        }
        else if(j>hi) {
            arr[k] = newArr[i++]
            console.log(2)
        }
        else if(newArr[j]<newArr[i]) {
            arr[k] = newArr[j++]
            console.log(3)
        }   
        else {
            arr[k] = newArr[i++]
            console.log(4)
        }
    }
    // console.log(`${arr} + ${lo} + ${hi}`)
}

let arr = [10,8,9,2,5,6,4,1,3,7]
// let arr = [6,7,8,9,10,1,2,3,4,5]

console.log(mergeSort(arr))
// 1 2 3 4 5 6 7 8 9 10