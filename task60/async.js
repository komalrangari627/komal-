// Print some synchronous logs first
console.log(1);
console.log(2);
console.log(3);
console.log(4);

// Start a live clock that updates every second
let timeCalc = setInterval(() => {
    document.getElementById("time").innerHTML = new Date().toLocaleTimeString();
}, 1000); // run every 1 second

// Stop the clock after 10 seconds
setTimeout(() => {
    clearInterval(timeCalc);
    document.getElementById("time").innerHTML += " ⏹ Stopped!";
    console.log("Clock stopped after 10s");
}, 10000);

console.log(5);
console.log(6);
console.log(7);
console.log(8);
