
console.log("hello js using external script.js page !")
window.alert("hello !")

document.write("hello ! js this side")

document.getElementById("e1").innerHTML = "hello js this side"

let data = 123

console.log(data)
document.write(data)
window.alert(data)

let num1 = 10
let num2 = 20

let sum  = num1 + num2

console.log(sum)
console.log(sum)
console.log(sum)
console.log(sum)

data = 10

data += 10 // 20
data -= 10 // 10
data *= 10 // 100
data /= 10 // 10
data %= 10 // 0

window.alert('hello')
console.log('hello')

data = window.confirm("yes or no !")

data = window.prompt("enter anything !")

console.log(data)

console.log(typeof(data))

// to contruct a string
// concatenation (joining of data with a string/s)

let name = window.prompt("enter name")
let age = 23

console.log("hello ! " + name + " your age is " + age + " .")

// string + string = string
// string + number = string
// string + boolean = string

// Number + Number = Number

console.log("100" + 200)

data = 10

console.log(data++) // 10 // 11 // 10

console.log(data)

console.log(data--) // 10

console.log(data) // 9

console.log(++data) // 11

console.log(data) // 11

// value++ / value-- -> post increment/decrement
// ++value / --value -> pre increment/decrement

let value = data++
console.log(value)
