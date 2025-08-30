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

// 3. Find the largest and smallest number in an unsorted array

function minAndMax(arr){
    let min = arr[0], max = arr[0];

    for(let i = 0; i<arr.length; i++){
        if(arr[i] < min) min = arr[i];
        else if(arr[i] > max) max = arr[i];
    }
    return [min, max]
}

console.log(minAndMax([7, 2, 9, 4]))
console.log(minAndMax([10, 10, 10]))
console.log(minAndMax([-1, -5, -3]))

// Find all pairs whose sum is equal to a given number

// function arrPair(arr, t){
//     let newArr = []
//     for (let i = 0; i<arr.length; i++){
//         for(let j = 1; j<arr.length; j++){
//             if(arr[i] + arr[j] === t){
//                 newArr.push([arr[i], arr[j]])
//             }
//         }
//     }
//     return newArr
// }

// console.log(arrPair([2, 7, 11, 15], 9))
// console.log(arrPair([3, 2, 4], 6))
// console.log(arrPair([1, 1, 1, 1], 2))

// 5. Find duplicate numbers in an array containing multiple duplicates

function duplicateNum(arr){
    let map = new Map();
    let duplicates = [];

    for(let i = 0; i<arr.length; i++){
        if(map.has(arr[i])) duplicates.push(arr[i]);
        else map.set(arr[i]);
    }
    return duplicates
}

console.log(duplicateNum([4,3,2,7,8,2,3,1]))
console.log(duplicateNum([1,1,2]))
console.log(duplicateNum([1,2,3,4]))