let num;

do {
    num = parseFloat(prompt("Enter a number (cannot be 0 or NaN):"));
} while (num === 0 || isNaN(num));

console.log("You entered:", num);
