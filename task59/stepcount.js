function selectionSort(arr, order) {
    let steps = 0; // To count steps

    for (let i = 0; i < arr.length; i++) {
        let targetIndex = i;

        for (let j = i + 1; j < arr.length; j++) {
            steps++; // Count every comparison

            if (order === "A") {
                // Ascending
                if (arr[j] < arr[targetIndex]) targetIndex = j;
            } else {
                // Descending
                if (arr[j] > arr[targetIndex]) targetIndex = j;
            }
        }

        // Swap elements if needed
        if (targetIndex !== i) {
            [arr[i], arr[targetIndex]] = [arr[targetIndex], arr[i]];
        }
    }

    return `Sorted array is [${arr}] in ${steps} steps`;
}

// Example usage:
let numbers = [1, 5, 2, 3, 4];
console.log(selectionSort([...numbers], "A")); // Ascending
console.log(selectionSort([...numbers], "D")); // Descending
