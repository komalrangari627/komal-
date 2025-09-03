// Linear Search Algorithm
function linearSearch(arr, search) {
    let flag = false;
    let steps = 0;

    for (let index = 0; index < arr.length; index++) {
        steps++;
        if (arr[index] === search) {
            flag = true;
        }
        if (flag) {
            return `Element ${search} found at position ${index + 1} in ${steps} steps`;
        }
    }
    return `Element ${search} not found at any position in ${steps} steps`;
}

// Binary Search Algorithm
function binarySearch(arr, search) {
    let ub = arr.length - 1;
    let lb = 0;
    let steps = 0;

    while (lb <= ub) {
        steps++;
        let midpoint = Math.floor((ub + lb) / 2);

        if (arr[midpoint] === search) {
            return `Element ${search} found at position ${midpoint + 1} in ${steps} steps`;
        }

        if (arr[midpoint] < search) {
            lb = midpoint + 1;
        } else {
            ub = midpoint - 1;
        }
    }
    return `Element ${search} not found at any position in ${steps} steps`;
}

// Testing
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let names = ["sachin", "sourabh", "priyanka", "kajal", "priya", "suman"];

console.log(linearSearch(numbers, 10));       // Best/worst cases
console.log(binarySearch(numbers, 5));        // Sorted array
console.log(binarySearch(names, "sachin"));    // Works with strings
