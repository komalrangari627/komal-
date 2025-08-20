// ✅ Palindrome Checker with prompt
function isPalindrome() {
    let input = window.prompt("Enter a word or number to check palindrome:");
    
    if (!input) {
        console.log("No input provided!");
        return false;
    }

    // Convert to string and normalize (remove spaces, lowercase for case-insensitivity)
    let str = input.toString().replace(/\s+/g, "").toLowerCase();
    let reversed = str.split("").reverse().join("");

    let result = (str === reversed);

    // Show result
    if (result) {
        console.log(`"${input}" is a palindrome ✅`);
    } else {
        console.log(`"${input}" is NOT a palindrome ❌`);
    }

    return result;
}

// Example usage
let check = isPalindrome();
console.log("Palindrome check result:", check);
