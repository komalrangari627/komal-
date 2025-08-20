// switch case
// switch case is used to check multiple conditions
// it is used to check a variable against multiple values

// logical oprators in coditional statements

let a = 50;
let b = 50;
let c = 50;
let d = 50;

if (a === b && b === c && c === d) {
    console.log("All numbers are equal!");
} else if (a >= b && a >= c && a >= d) {
    console.log("a is the greatest!");
} else if (b >= a && b >= c && b >= d) {
    console.log("b is the greatest!");
} else if (c >= a && c >= b && c >= d) {
    console.log("c is the greatest!");
} else {
    console.log("d is the greatest!");
}

// switch case example to check if a character is a vowel or consonant

// vowels ( a e i o u)

 let charch = prompt("enter char !")

 switch(charch){
         case "a" : 
   case "e" : 
     case "i" : 
     case "o" : 
     case "u" :  
         console.log("is a vowel") 
         break;
     default: console.log("is  a consonant !")
 }
