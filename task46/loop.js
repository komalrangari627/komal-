let year = 2024; // change this to test different years

switch (true) {
    case (year % 400 === 0):
        console.log(year + " is a leap year");
        break;

    case (year % 4 === 0 && year % 100 !== 0):
        console.log(year + " is a leap year");
        break;

    default:
        console.log(year + " is NOT a leap year");
}

let result;

// Leap year rule:
// 1. Year divisible by 4 → possible leap year
// 2. But divisible by 100 → not leap year
// 3. Unless divisible by 400 → leap year
switch (true) {
    case (year % 400 === 0):
        result = `${year} is a leap year.`;
        break;
    case (year % 100 === 0):
        result = `${year} is NOT a leap year.`;
        break;
    case (year % 4 === 0):
        result = `${year} is a leap year.`;
        break;
    default:
        result = `${year} is NOT a leap year.`;
}

console.log(result);
