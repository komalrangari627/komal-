function bubbleSort(arr, order) {
    let steps = 0;
    let swap = true;

    for (let i = 0; i < arr.length; i++) {
        swap = false;

        for (let j = 0; j < arr.length - i - 1; j++) {
            steps++;

            if (order === "A") {
                // Ascending order
                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                    swap = true;
                }
            } else {
                // Descending order
                if (arr[j] < arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                    swap = true;
                }
            }
        }

        // Early exit if no swap happened
        if (!swap) {
            return `Sorted array is [${arr}] in ${steps} steps`;
        }
    }
    return `Sorted array is [${arr}] in ${steps} steps`;
}

console.log(bubbleSort([3, 1, 2, 10, 7, 4, 9, 8, 5, 6], "A"));
console.log(bubbleSort([3, 1, 2, 10, 7, 4, 9, 8, 5, 6], "D"));

console.log(bubbleSort(["esha", "usha", "lila", "surbi"], "A"));
console.log(bubbleSort(["esha", "usha", "lila", "surbi"], "D"));
