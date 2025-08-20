

// Print hello messages
function helloMessages() {
    console.log("hello js using external script.js page!");
    window.alert("hello!");
    document.write("hello! js this side");  
}
helloMessages();

// Basic variable & logging
function variableExample() {
    let data = 123;
    console.log(data);
    document.write(data);
    window.alert(data);
}
variableExample();

// Sum of two numbers
function sumExample() {
    let num1 = 10;
    let num2 = 20;
    let sum = num1 + num2;
    console.log("Sum = " + sum);
}
sumExample();


// Assignment operators
function assignmentOperators() {
    let data = 10;
    data += 10; // 20
    console.log("+= " + data);
    data -= 5;  // 15
    console.log("-= " + data);
    data *= 2;  // 30
    console.log("*= " + data);
    data /= 3;  // 10
    console.log("/= " + data);
    data %= 4;  // 2
    console.log("%= " + data);
}
assignmentOperators();

// User interaction
function userInputExample() {
    let data = window.prompt("Enter anything!");
    console.log("You entered: " + data);
    console.log("Type: " + typeof(data));
}
userInputExample();

// String concatenation
function stringConcatExample() {
    let name = window.prompt("Enter name");
    let age = 23;
    console.log(`Hello! ${name}, your age is ${age}.`);
    console.log("100" + 200); // string + number => string
}
stringConcatExample();

// Increment / Decrement demo
function incrementDecrementExample() {
    let data = 10;
    console.log(data++); // 10
    console.log(data);   // 11
    console.log(data--); // 11
    console.log(data);   // 10
    console.log(++data); // 11
}
incrementDecrementExample();

