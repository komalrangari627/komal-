//Numbers divisible by 5 from 0 → 10000

for (let number = 0; number <= 10000; number++) {
    if (number % 5 == 0) {
        console.log(number);
    }
}

//Count all even numbers from 1000 → 0

let count = 0;

for (let number = 1000; number != 0; number--) {
    if (number % 2 == 0) {
        count++;
        console.log(number);
    }
}

console.log("From 0 to 1000 there are total " + count + " even numbers!");


//Factorials of even numbers between 1 → 10

for (let start = 1; start <= 10; start++) {
    if (start % 2 == 0) {
        let fact = 1;
        for (let number = start; number != 0; number--) {
            fact = fact * number;
        }
        console.log("Factorial of " + start + " = " + fact);
    }
}


//Leap years between 1500 → 2025

let org_start = 1500;
let end = 2025;
let countLeap = 0;

for (let year = org_start; year <= end; year++) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            countLeap++;
            console.log(year);
        }
    } else if (year % 4 == 0) {
        countLeap++;
        console.log(year);
    }
}

console.log("There are total " + countLeap + " leap years in range of " + org_start + " to " + end + " !");


//Next leap year after current year

let current_year = 2196;
let next_leap_year = current_year;

for (;;) {  // infinite loop until break
    next_leap_year++;
    let year = next_leap_year;

    if (year % 100 == 0) {
        if (year % 400 == 0) {
            break;
        }
    } else if (year % 4 == 0) {
        break;
    }
}

console.log("Next leap year after " + current_year + " is " + next_leap_year);


//Reverse number & Palindrome check

let org_number = 121;
let rev = 0;

for (let number = org_number; number != 0; number = parseInt(number / 10)) {
    let d = number % 10;
    rev = rev * 10 + d;
}

console.log("Reverse:", rev);

if (org_number == rev) {
    console.log(org_number + " is palindrome!");
} else {
    console.log(org_number + " is not a palindrome!");
}


//Odd numbers from 0 → 1000

for (let number1 = 0; number1 <= 1000; number1++) {
    if (number1 % 2 != 0) console.log(number1);
}
