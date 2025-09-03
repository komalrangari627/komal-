// Arrow function examples

// print string
const printString = (str) => console.log(str)

printString("this is some string 1")
printString('this is some string 2')
printString(`this is some string 3`)


// concatenation
const concatStrings = (s1, s2) => console.log(s1 + s2)
concatStrings("hello ", "world")


// string length
const getLength = (str) => console.log(str.length)
getLength("hello world")


// change case
const toUpper = (str) => console.log(str.toUpperCase())
const toLower = (str) => console.log(str.toLowerCase())
toUpper("some String")
toLower("SOME STRING")


// find index
const findFirstIndex = (str, char) => console.log(str.indexOf(char))
const findLastIndex = (str, char) => console.log(str.lastIndexOf(char))
findFirstIndex("hello world", "l")
findLastIndex("hello world", "l")


// slice and substring
const sliceString = (str, start, end) => console.log(str.slice(start, end))
const substringString = (str, start, end) => console.log(str.substring(start, end))
sliceString("hello world", 0, 5)
substringString("hello world", 6, 11)


// trim
const trimString = (str) => console.log(str.trim())
trimString("   this is data   ")


// replace
const replaceFirst = (str, search, replace) => console.log(str.replace(search, replace))
const replaceAllOccur = (str, search, replace) => console.log(str.replaceAll(search, replace))
replaceFirst("this is data", "is", "was")
replaceAllOccur("this is some string is is", "is", "was")


// capitalize name
const capitalizeName = (name) => {
    name = name.replace(name.charAt(0), name.charAt(0).toUpperCase())
    let indexOfSpace = name.indexOf(" ")
    if (indexOfSpace !== -1) {
        name = name.replace(
            name.charAt(indexOfSpace + 1),
            name.charAt(indexOfSpace + 1).toUpperCase()
        )
    }
    console.log(name)
}
capitalizeName("danel smith")


// reverse string
const reverseString = (str) => {
    let reversed = ""
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]
    }
    console.log(reversed)
}
reverseString("hello")


// template literals
const greet = (name, age) => console.log(`hello ! ${name.toUpperCase()} your age is ${age} years !`)
greet("anna", 21)


// regex example
const regexMatch = (pattern, str) => console.log(str.match(pattern))
const regexTest = (pattern, str) => console.log(pattern.test(str))

let pattern = /hello/gi
regexMatch(pattern, "hi Hello hello hello")
regexTest(pattern, "hi Hello hello hello")


// password validation regex
const passwordValidation = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,15}$/

const validatePassword = (password) => console.log(passwordValidation.test(password))

validatePassword("Password123!")
validatePassword("PaSSWO$D12")
