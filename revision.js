// Question: Find the duplicate number on a given integer array
// Answer: 
var findDuplicate = function(nums) {
    let set = new Set()
    for(let i = 0; i<nums.length; i++){
        if(set.has(nums[i])) return nums[i]
        else set.add(nums[i])
    }
    return -1
};

// Question: 3. Find the largest and smallest number in an unsorted integer array.
// Answer:
class Solution {
    getMinMax(arr) {
        // code here
        let min = arr[0], max = arr[0]
        for(let i = 0; i<arr.length; i++){
            if(arr[i] < min) min = arr[i]
            if(arr[i] > max) max = arr[i]
        }
        return [min, max]
    }
}

// Question: Find all pairs of an integer array whose sum is equal to a given number.
// Answer:
class Solution {
    countPairs(arr, target) {
        // code here
        let map = new Map(), count = 0
        for(let i = 0; i<arr.length; i++){
            let diff = target - arr[i]
            if(map.has(diff)) count+= map.get(diff) 
            map.set(arr[i], (map.get(arr[i]) || 0) + 1)
        }
        return count
    }
}

// Question:Find duplicate numbers in an array containing multiple duplicates.
// Answer:
var findDuplicates = function(nums) {
    let seen = new Set(), result = []
    for(let i = 0; i<nums.length; i++){
        if(seen.has(nums[i])) result.push(nums[i])
        else seen.add(nums[i])
    }
    return result
};

// Question: Remove duplicates from an array in place
// Answer:
