//Write a function given an array arr and element alem that will look up for the elem in the array

function binarySearch(arr, elem) {
    let start = 0;
    let end = arr.length - 1;
    let midPoint = Math.floor((start + end) / 2);
    while(elem !== arr[midPoint]) {
        if (elem > arr[midPoint]) start = midPoint + 1
        else end = midPoint - 1;
        midPoint = Math.floor((start + end) / 2)
    }
    return elem === arr[midPoint] ? midPoint : -1;
}

console.log(binarySearch([1,2,4,5,6,7,12,13,15,19,20,25,30,39,45,60], 45))

//METHOD 2

function binary(array, value) {
    let guess,
        min = 0,
        max = array.length - 1;
    while (min <= max) {
        guess = Math.floor((min + max) / 2)
        if (value === array[guess]) return guess;
        else if (value > array[guess]) min = guess + 1;
        else max = guess - 1;
    }
    return -1;
}

console.log(binary([1, 2, 4, 5, 6, 7, 12, 13, 15, 19, 20, 25, 30, 39, 45, 60], 45))

//METHOD 3 A RECURSIVE BINARY SEARCH

function recursiveBinarySearch(sortedArray, searchValue, minIndex, maxIndex) {
    let currentElement;
    while (minIndex <= maxIndex) {
        let middleIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = sortedArray[middleIndex]
        if (currentElement === searchValue) {
            return middleIndex;
        }
        if (currentElement > searchValue) {
            return recursiveBinarySearch(sortedArray, searchValue, minIndex, middleIndex - 1);
        }
        if(currentElement < searchValue){
            return recursiveBinarySearch(sortedArray, searchValue, middleIndex + 1, maxIndex);
        }
    }
    
    return -1;
}

console.log(recursiveBinarySearch([1, 2, 4, 5, 6, 7, 12, 13, 15, 19, 20, 25, 30, 39, 45, 60, 70, 80, 90, 100], 45, 0, 19))