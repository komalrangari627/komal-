// slice(start, end)
//str.slice(start, end)      

// substring(start, end)
//str.substring(start, end)  

let text = "JavaScript";

console.log(text.slice(4, -1));     // "Scrip"  (counts from end)
console.log(text.substring(4, -1)); // "Java"   (negative → 0)

let text2 = "HelloWorld";

console.log(text2.slice(7, 2));      // ""       (no swap, so empty)
console.log(text2.substring(7, 2));  // "lloWo"  (swaps → substring(2,7))
