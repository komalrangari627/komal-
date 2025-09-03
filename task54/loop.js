// 1. Print all even numbers from 0 to 1000
function printEvenNumbers(limit = 1000) {
    for (let i = 0; i <= limit; i++) {
        if (i % 2 === 0) console.log(i);
    }
}
printEvenNumbers();

// 2. Factorial of all even numbers in a range
function factorialOfEvens(start = 1, end = 10) {
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            let fact = 1;
            for (let j = i; j > 0; j--) {
                fact *= j;
            }
            console.log(`Factorial of ${i} = ${fact}`);
        }
    }
}
factorialOfEvens(1, 10);


// 3.  Check leap year
function isLeapYear(year) {
    if (year <= 0 || isNaN(year)) {
        return "Invalid year! Must be > 0 and not NaN.";
    }
    if (year % 100 === 0) {
        return (year % 400 === 0) ? `${year} is a leap year!` : `${year} is not a leap year!`;
    } else {
        return (year % 4 === 0) ? `${year} is a leap year!` : `${year} is not a leap year!`;
    }
}
console.log(isLeapYear(2025));   // check single leap year



// 4.  Print all leap years in range
function leapYearsInRange(start, end) {
    let count = 0;
    for (let year = start; year <= end; year++) {
        if ((year % 100 === 0 && year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0)) {
            console.log(year);
            count++;
        }
    }
    console.log(`There are total ${count} leap years between ${start} and ${end}.`);
}
leapYearsInRange(1500, 2025);    // list leap years in range



// 5.  Find next leap year from current year
function nextLeapYear(currentYear) {
    let year = currentYear;
    while (true) {
        year++;
        if ((year % 100 === 0 && year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0)) {
            return year;
        }
    }
}
console.log(nextLeapYear(2025)); // next leap year after 2025


// 6.  Reverse number & check palindrome
function isPalindromeNumber(num) {
    let original = num;
    let reversed = 0;
    while (num > 0) {
        let digit = num % 10;
        reversed = reversed * 10 + digit;
        num = Math.floor(num / 10);
    }
    return (original === reversed) ? `${original} is a palindrome!` : `${original} is not a palindrome!`;
}
console.log(isPalindromeNumber(121)); // check number palindrome



// 7.  Reverse string & check palindrome
function isPalindromeString(str) {
    let reversed = str.split("").reverse().join("");
    return (str === reversed) ? `${str} is a palindrome!` : `${str} is not a palindrome!`;
}
console.log(isPalindromeString("madam")); // check string palindrome



// 8.  Odd numbers using for loop
function printOddNumbers(limit = 1000) {
    for (let i = 1; i <= limit; i++) {
        if (i % 2 !== 0) console.log(i);
    }
}
printOddNumbers(50);             // print odd numbers up to 50



// 9.  Exponential function
function exponential(base, power) {
    return `${base}^${power} = ${base ** power}`;
}
console.log(exponential(2, 5));  // 2^5 = 32



// 10.  Password check with regex
function checkPassword(password) {
    // At least 1 lowercase, 1 uppercase, 1 digit, 1 special char, min length 8
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password) ? "Password is strong ✅" : "Password is weak ❌";
}
console.log(checkPassword("Hello@123")); // password validation


