let choice = false;

do {
    let number = Number(window.prompt("Enter a number to check palindrome:"));

    if (number == 0 || isNaN(number)) {
        console.log("Not a valid number! Please enter a positive non-zero number.");
    } else {
        let org_number = number;
        let rev = 0;

        while (number != 0) {
            let d = number % 10;
            rev = rev * 10 + d;
            number = parseInt(number / 10);
        }

        if (org_number === rev) {
            console.log(org_number + " is a palindrome!");
        } else {
            console.log(org_number + " is not a palindrome!");
        }
    }

    choice = window.confirm("Do you wish to continue? Yes/No");

} while (choice);
