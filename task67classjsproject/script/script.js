let tasks = JSON.parse(localStorage.getItem("data")) || [];
const addBtn = document.querySelector("#add-notes-button");
const popup = document.querySelector(".add-notes-pop-up");
const closeBtn = document.querySelector('#close-pop-up');
const form = document.querySelector("#task-form");
const searchBar = document.querySelector("#search-bar-field");
let isEdit = false, editIndex = null;

// Show/hide popup
addBtn.onclick = () => popup.classList.add("active");
closeBtn.onclick = () => popup.classList.remove("active");

// Auto-submit on mouse leave
document.querySelector(".add-notes-form").onmouseleave = () => form.querySelector("#formSubmitButton").click();

// Add/Edit task
form.onsubmit = e => {
    e.preventDefault();
    const title = form.title.value.trim();
    const desc = form.description.value.trim();
    if (!title || !desc) return console.log("Empty fields!");
    
    if (isEdit) {
        tasks[editIndex] = { ...tasks[editIndex], title, description: desc };
        isEdit = editIndex = null;
    } else {
        tasks.push({ title, description: desc, timeStamp: `T: ${new Date().toLocaleTimeString()} D: ${new Date().toLocaleDateString()}` });
    }
    
    form.reset();
    popup.classList.remove("active");
    saveAndDisplay();
};

// Display tasks
function display(tasksArr) {
    const container = document.querySelector('.tasks-container');
    document.querySelector("#task-container-title").innerText = tasksArr.length ? "Task Data !" : "No Data To Display !";
    container.innerHTML = tasksArr.map((t, i) => `
        <div class="task">
            <h4 class="title">${t.title}</h4>
            <p class="description">${t.description}</p>
            <span class="timeStamp">${t.timeStamp}</span>
            <button onclick='deleteTask(${i})' class="btn btn-sm btn-danger">Delete</button>
            <button onclick='editTask(${i})' class="btn btn-sm btn-warning">Edit</button>
        </div>
    `).join('');
}

// Delete task
window.deleteTask = i => {
    if (confirm(`Do you really want to delete task ${i}?`)) {
        tasks.splice(i, 1);
        saveAndDisplay();
    }
};

// Edit task
window.editTask = i => {
    popup.classList.add("active");
    form.title.value = tasks[i].title;
    form.description.value = tasks[i].description;
    isEdit = true;
    editIndex = i;
};

// Search
searchBar.oninput = e => display(tasks.filter(t => t.title.includes(e.target.value)));

// Save and refresh display
function saveAndDisplay() {
    localStorage.setItem("data", JSON.stringify(tasks));
    display(tasks);
}

// Initial display
display(tasks);
