//1. Check Driving Eligibility

function canDrive(age, license, learning_license) {
    if (age >= 18) {
        if (license) {
            return "You can drive!";
        } else {
            return "You can't drive!";
        }
    } else if (learning_license) {
        return "You can drive!";
    } else {
        return "You can't drive!";
    }
}

// Example usage
console.log(canDrive(20, true, false));  // ✅ You can drive!

//2. Find Greatest of 4 Numbers

function greatestOfFour(a, b, c, d) {
    if ((a > b) && (a > c) && (a > d)) {
        return "a is greatest!";
    } else if ((b > c) && (b > d)) {
        return "b is greatest!";
    } else if (c > d) {
        return "c is greatest!";
    } else {
        return "d is greatest!";
    }
}

// Example usage
console.log(greatestOfFour(50, 30, 80, 40));  // ✅ c is greatest!


//3. Calculator using Switch

function calculator(num1, num2, choice) {
    switch (choice) {
        case 1: return num1 + num2;
        case 2: return num1 - num2;
        case 3: return num1 * num2;
        case 4: return num1 / num2;
        case 5: return num1 % num2;
        default: return "Invalid choice (1-5 only)";
    }
}

// Example usage
console.log(calculator(10, 5, 1));  // ✅ 15

//4. Check Vowel

function isVowel(ch) {
    switch (ch.toLowerCase()) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            return true;
        default:
            return false;
    }
}

// Example usage
console.log(isVowel("a")); // ✅ true
console.log(isVowel("b")); // ❌ false


//5. Leap Year Check

function isLeapYear(year) {
    if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
        return true;
    }
    return false;
}

// Example usage
console.log(isLeapYear(2024)); // ✅ true
console.log(isLeapYear(2100)); // ❌ false
