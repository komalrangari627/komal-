
let add_notes_button = document.querySelector("#add-notes-button")

add_notes_button.addEventListener('click',(event)=>{
    
})

document.addEventListener("DOMContentLoaded", () => {
    const addBtn = document.getElementById("add-notes-button");
    const popup = document.querySelector(".add-notes-pop-up");
    const closeBtn = document.querySelector(".add-notes-form .close");

    // Show popup
    addBtn.addEventListener("click", () => {
        popup.classList.add("active");
    });

    // Hide popup
    closeBtn.addEventListener("click", () => {
        popup.classList.remove("active");
    });
});
