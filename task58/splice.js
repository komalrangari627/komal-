//1. Delete items

let arr1 = ["apple", "banana", "cherry", "date"];
let deleted = arr1.splice(1, 2); // remove 2 items from index 1
console.log(arr1);     // ["apple", "date"]
console.log(deleted); // ["banana", "cherry"]

//2. Replace items

let arr2 = ["a", "b", "c", "d"];
let replaced = arr2.splice(1, 2, "x", "y"); 
// from index 1, remove 2 → "b", "c"
// add "x", "y"
console.log(arr2);      // ["a", "x", "y", "d"]
console.log(replaced); // ["b", "c"]

//3. Insert (create new items)

let arr3 = [1, 2, 5, 6];
arr1.splice(2, 0, 3, 4); 
// at index 2, delete 0, insert 3 & 4
console.log(arr1); // [1, 2, 3, 4, 5, 6]

//4. Add word to array

let words = ["Hello", "World"];
words.splice(words.length, 0, "JS"); // add at end
console.log(words);  // ["Hello", "World", "JS"]

words.splice(1, 0, "Awesome"); // insert at index 1
console.log(words);  // ["Hello", "Awesome", "World", "JS"]


//5. new array from splice

let arr = [1, 2, 5, 6];
let removed = arr.splice(2, 0, 3, 4); 
// from index 2, remove 0, insert 3,4
console.log(arr);     // [1, 2, 3, 4, 5, 6]
console.log(removed); // [] (nothing removed)



