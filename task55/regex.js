const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// Usage Example:
const checkPassword = (password) => {
    if (passwordRegex.test(password)) {
        console.log("✅ Password is valid!");
    } else {
        console.log("❌ Password is invalid! Must contain min 8 chars, uppercase, lowercase, number, and special char.");
    }
};


// Test cases
checkPassword("Abc123!");       // ❌ too short
checkPassword("Abcdef12");      // ❌ missing special char
checkPassword("abcdef12@");     // ❌ missing uppercase
checkPassword("ABCDEF12@");     // ❌ missing lowercase
checkPassword("Abcd1234@");     // ✅ valid
