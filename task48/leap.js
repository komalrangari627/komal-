let startYear = 2000;  // change as needed
let endYear = 2025;    // change as needed

let year = startYear;

while (year <= endYear) {
    if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
        console.log(year + " is a leap year");
    } else {
        console.log(year + " is NOT a leap year");
    }
    year++;
}
