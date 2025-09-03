let e2 = document.getElementById("e2");
let button = document.getElementById("btn1");

function toggleBorderAndBackground() {
    if (e2.classList.contains("active")) {
        // remove styles
        e2.classList.remove("active");
        e2.style.border = "none";
        e2.style.backgroundColor = "transparent";
    } else {
        // add styles
        e2.classList.add("active");
        e2.style.border = "2px solid black";
        e2.style.backgroundColor = "lightblue";
    }
}

button.addEventListener("click", toggleBorderAndBackground);
