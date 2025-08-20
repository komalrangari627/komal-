// Example 1: typeof() operator
const checkType = () => {
    let data = [];
    console.log("Value:", data, " | Type:", typeof(data));

    let str = "hello";
    console.log("Value:", str, " | Type:", typeof(str));

    let num = 42;
    console.log("Value:", num, " | Type:", typeof(num));
};
checkType();

// Example 2: Number → String
const numberToString = () => {
    let num = 123;
    console.log("Before:", num, " | Type:", typeof(num));

    num = num.toString();
    console.log("After (toString):", num, " | Type:", typeof(num));
};
numberToString();

// Example 3: Number → Boolean
const numberToBoolean = () => {
    let num = 0;
    console.log("Before:", num, " | Type:", typeof(num));

    let boolValue = Boolean(num); // 0 → false, any other number → true
    console.log("After:", boolValue, " | Type:", typeof(boolValue));
};
numberToBoolean();

// Example 4: String → Number
const stringToNumber = () => {
    let str = "123";
    console.log("Before:", str, " | Type:", typeof(str));

    let num = Number(str);
    console.log("After:", num, " | Type:", typeof(num));

    let badStr = "abc";
    console.log("Bad string to number:", Number(badStr)); // NaN
};
stringToNumber();

// Example 5: String → Boolean
const stringToBoolean = () => {
    let str1 = "";
    let str2 = "hello";

    console.log(`"${str1}" →`, Boolean(str1)); // false
    console.log(`"${str2}" →`, Boolean(str2)); // true
};
stringToBoolean();

// Example 6: Boolean → Number
const booleanToNumber = () => {
    let b1 = true;
    let b2 = false;

    console.log(`${b1} →`, Number(b1)); // 1
    console.log(`${b2} →`, Number(b2)); // 0
};
booleanToNumber();

// Example 7: Boolean → String
const booleanToString = () => {
    let bool = false;
    console.log("Before:", bool, " | Type:", typeof(bool));

    let str = String(bool);
    console.log("After:", str, " | Type:", typeof(str));
};
booleanToString();

// Example 8: Explicit Casting in Prompt Input
const addPromptNumbers = () => {
    let n1 = Number(window.prompt("Enter number 1"));
    let n2 = Number(window.prompt("Enter number 2"));

    console.log(`Sum = ${n1 + n2}`);
};
addPromptNumbers();







