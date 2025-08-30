// Find the duplicate number on a given integer array

function dulicateInt(arr){
    let map = new Map();
    for(let i = 0; i<arr.length; i++){
        if(map.has(arr[i])) return arr[i];
        else map.set(arr[i])
    }
    return -1
}

console.log(dulicateInt([3, 1, 3, 4, 2]));
console.log(dulicateInt([1, 1]));
console.log(dulicateInt([2, 5, 9, 6, 9]));