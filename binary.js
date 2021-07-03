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
    console.log(midPoint)
    return elem === arr[midPoint] ? midPoint : -1;
}

console.log(binarySearch([1,2,4,5,6,7,12,13,15,19,20,25,30,39,45,60], 45))
