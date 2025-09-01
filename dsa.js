// Find the duplicate number on a given integer array

function dulicateInt(arr) {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) return arr[i];
    else map.set(arr[i]);
  }
  return -1;
}

console.log(dulicateInt([3, 1, 3, 4, 2]));
console.log(dulicateInt([1, 1]));
console.log(dulicateInt([2, 5, 9, 6, 9]));

// 3. Find the largest and smallest number in an unsorted array

function minAndMax(arr) {
  let min = arr[0],
    max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
    else if (arr[i] > max) max = arr[i];
  }
  return [min, max];
}

console.log(minAndMax([7, 2, 9, 4]));
console.log(minAndMax([10, 10, 10]));
console.log(minAndMax([-1, -5, -3]));

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

function duplicateNum(arr) {
  let map = new Map();
  let duplicates = [];

  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) duplicates.push(arr[i]);
    else map.set(arr[i]);
  }
  return duplicates;
}

console.log(duplicateNum([4, 3, 2, 7, 8, 2, 3, 1]));
console.log(duplicateNum([1, 1, 2]));
console.log(duplicateNum([1, 2, 3, 4]));

// Remove duplicates from an array in place

function removeDeuplicate(arr) {
  let map = new Map(),
    newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) {
      newArr.push(arr[i]);
      map.set(arr[i]);
    }
  }
  return newArr;
}

console.log(removeDeuplicate([1, 1, 2]));
console.log(removeDeuplicate([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
console.log(removeDeuplicate([2, 2, 2]));

// Reverse an array in place

function reverse(arr) {
  let j = arr.length - 1;

  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}

console.log(reverse([1, 2, 3, 4, 5]));
console.log(reverse([7, 8, 9]));
console.log(reverse([1]));

// 8. Find the intersection of two arrays
function intersection(arr1, arr2) {
  let set = new Set(arr2),
    inter = [];

  for (let i = 0; i < arr1.length; i++) {
    if (set.has(arr1[i])) inter.push(arr1[i]);
  }
  return inter;
}

console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
console.log(intersection([1, 2, 3], [4, 5, 6]));
console.log(intersection([1, 1, 1], [1, 1]));

// 9. Find the maximum product of two integers in an array

function maxProduct(arr) {
  arr = arr.sort((a, b) => a - b);
  let product = arr[0] * arr[1];
  let lastProduct = arr[arr.length - 1] * arr[arr.length - 2];

  let max = Math.max(lastProduct, product);

  return { max };
}

console.log(maxProduct([1, 20, 3, 4, 5]), 'Max Product');

// Find the minimum value in a rotated sorted array

function minValue(arr) {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) min = arr[i];
  }
  return { min };
}
console.log(minValue([3, 4, 5, 1, 2]));

//11. Find the maximum sum subarray (Kadane’s)

function maxSum(arr) {
  let currentSum = 0,
    maxSum = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];

    if (currentSum < 0) currentSum = 0;
    if (maxSum < currentSum) maxSum = currentSum;
  }

  return { maxSum };
}

console.log(maxSum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

function rotateAnArrByK(arr, k) {
  let i = 0;

  while (i < k) {
    ans = reverse(arr);

    i++;
  }
  return { arr };
}

console.log(rotateAnArrByK([1, 2, 3, 4, 5, 6, 7], 3));

// Find the subarray with the given sum

function findSubArr(arr, sum) {
  let currentSum = 0,
    j = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];

    while (currentSum > sum) {
      currentSum -= arr[j];
      j++;
    }

    if (currentSum === sum) return arr.slice(j, i + 1);
  }
}

console.log(findSubArr([1, 4, 20, 3, 10, 5], 33));
console.log(findSubArr([1, 2, 3, 7, 5], 12)); //[2,3,7]
console.log(findSubArr([1, 2, 3], 6)); // [1,2,3]

// 14. Merge two sorted arrays
function mergeTwo(arr1, arr2) {
  debugger;
  let newArr = [],
    i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      newArr.push(arr1[i]);
      i++;
    } else {
      newArr.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    newArr.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    newArr.push(arr2[j]);
    j++;
  }

  return { newArr };
}

console.log(mergeTwo([1, 3, 5], [2, 4, 6]));
console.log(mergeTwo([10, 20], [5, 15, 25]));
console.log(mergeTwo([1, 3, 5], [2, 4, 6]));

// 15. Move all zeros to the end

function moveAllZerosToEnd(arr) {
  let zeros = 0,
    j = 0,
    newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeros++;
    } else {
      newArr.push(arr[i]);
    }
  }

  while (j < zeros) {
    newArr.push(0);
    j++;
  }
  return { ZerosArr: newArr };
}
console.log(moveAllZerosToEnd([0, 0, 1]));
console.log(moveAllZerosToEnd([1, 2, 3]));
console.log(moveAllZerosToEnd([0, 0, 0]));

// 16. Find the majority element (Boyer-Moore)

function majorityElement(arr) {
  let candidate = null;
  sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (sum === 0) candidate = arr[i];
    sum += candidate === arr[i] ? 1 : -1;
  }

  sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === candidate) sum += 1;
  }

  if (sum > arr.length / 2) return { candidate };
  return -1;
}

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
console.log(majorityElement([1, 1, 1, 2, 3, 4, 1]));

// Function Equilibrium Index
function findEquilibriumIndex(arr) {
  const totalSum = arr.reduce((acc, curr) => (acc += curr), 0);
  let left_sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let right_sum = totalSum - left_sum - arr[i];

    if (right_sum === left_sum) return i;
    left_sum += arr[i];
  }
  return -1;
}
console.log(findEquilibriumIndex([-7, 1, 5, 2, -4, 3, 0]));
console.log(findEquilibriumIndex([1, 2, 3]));
console.log(findEquilibriumIndex([0, 0, 0, 0]));

// Rearrange array such that even index < odd index
function rearrange(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) {
      if (arr[i] < arr[i - 1]) {
        [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
      }
    } else {
      if (arr[i] > arr[i - 1]) {
        [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
      }
    }
  }
  return { Arranged: arr };
}

console.log(rearrange([1, 2, 3, 4, 5]));
console.log(rearrange([9, 6, 8, 3, 7]));
console.log(rearrange([2, 2, 2, 2]));

// 19. Largest subarray with equal 0s and 1s

function largestSubarrayWithEqualZeroOne(arr) {
  let sum = 0,
    maxLen = 0,
    map = new Map();
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i] === 0 ? -1 : 1;

    if (sum === 0) {
      maxLen = i + 1;
    }

    if (map.has(arr[i])) {
      maxLen = Math.max(maxLen, map.get(arr[i]));
    } else {
      map.set(sum, i);
    }
  }
  return maxLen;
}

console.log(largestSubarrayWithEqualZeroOne([1, 0, 1, 1, 0, 0, 1])); // 6
console.log(largestSubarrayWithEqualZeroOne([1, 1, 1, 0, 0, 0])); // 6
console.log(largestSubarrayWithEqualZeroOne([1, 1, 1, 1]));

// Reverse Words in a String

function reverseWords(str) {
  debugger;
  let word = '',
    reversed = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      word = str[i] + word;
    } else {
      reversed = reversed + word + ' ';
      word = '';
    }
  }
  reversed += word;
  return reversed;
}

console.log(reverseWords('React is awesome'));

function debounce(fn, delay) {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

function throttle(fn, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall < delay) return;
    fn(...args);
    lastCall = now;
  };
}

// 21. Reverse a string in place

function reverseString(str) {
  let newStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return { newStr };
}

console.log(reverseString('React'));

// 22. Check if two strings are anagrams

function strToObj(str) {
  let obj = {};

  for (let key of str) {
    if (!obj[key]) obj[key] = 1;
    else obj[key]++;
  }
  return obj;
}

function checkAnagrams(str1, str2) {
  let obj1 = strToObj(str1);
  let obj2 = strToObj(str2);

  for (let ch in obj1) {
    if (obj1[ch] !== obj2[ch]) return false;
  }
  return true;
}
console.log(checkAnagrams('listen', 'silent'));
console.log(checkAnagrams('anagram', 'nagaram'));
console.log(checkAnagrams('rat', 'car'));

// 23. Find all permutations of a string

function allPermutations(str) {
  if (str.length === 0) return [''];
  let result = [];
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let remaining = str.slice(0, i) + str.slice(i + 1);

    let words = allPermutations(remaining);
    for (let word of words) {
      result.push(char + word);
    }
  }

  return result;
}

console.log(allPermutations('ab'));

// 24. Find the first non-repeating character

function firstNonRepeating(str) {
  let obj = {};
  for (let key of str) {
    if (!obj[key]) obj[key] = 1;
    else obj[key]++;
  }

  for (let ch in obj) {
    if (obj[ch] === 1) return ch;
  }
  return -1;
}

console.log(firstNonRepeating('leetcode'));

// 25. Count the occurrence of a given character

function countOccurence(str, char) {
  let obj = strToObj(str);
  for (let ch in obj) {
    if (ch === char) return obj[ch];
  }

  return -1;
}
console.log(countOccurence('banana', 'a'));
