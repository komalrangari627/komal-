let tasks = [];

let add_notes_button = document.querySelector("#add-notes-button");
let targetElement = document.querySelector(".add-notes-pop-up");
let closeButton = document.querySelector('#close-pop-up');
let taskForm = document.querySelector("#task-form");
let addNotesFormContainer = document.querySelector(".add-notes-form");

let editingIndex = null; // track edit state

add_notes_button.addEventListener('click', () => {
    targetElement.classList.add("active");
});

closeButton.addEventListener('click', () => {
    targetElement.classList.remove("active");
    editingIndex = null; // reset edit mode when closing
    taskForm.reset();
});

addNotesFormContainer.addEventListener("mouseleave", () => {
    document.getElementById("formSubmitButton").click();
});

taskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    try {
        let title = event.target["title"].value.trim();
        let desc = event.target["description"].value.trim();

        if (!title || !desc) throw ("empty fields!");

        if (editingIndex !== null) {
            // update existing task
            tasks[editingIndex].title = title;
            tasks[editingIndex].description = desc;
            tasks[editingIndex].timeStamp = `T: ${new Date().toLocaleTimeString()} D: ${new Date().toLocaleDateString()}`;
            editingIndex = null;
        } else {
            // add new task
            tasks.push({
                title,
                description: desc,
                timeStamp: `T: ${new Date().toLocaleTimeString()} D: ${new Date().toLocaleDateString()}`
            });
        }

        taskForm.reset();
        closeButton.click();
        displayTask();

    } catch (err) {
        console.log("please add task data before submitting! : ", err);
    }
});

function displayTask() {
    document.querySelector('.tasks-container').innerHTML = "";
    tasks.forEach((task, index) => {
        let singleTask = document.createElement("div");
        singleTask.classList.value = "task border p-4";
        singleTask.innerHTML = `
            <h4 class="title">${task.title}</h4>
            <p class="description">${task.description}</p>
            <span class="timeStamp">${task.timeStamp}</span>
            <button class="btn btn-sm btn-danger" onClick='deleteTask(${index})'>Delete</button>
            <button class="btn btn-sm btn-warning" onClick='editTask(${index})'>Edit</button>
        `;
        document.querySelector('.tasks-container').appendChild(singleTask);
    });
}

function deleteTask(deleteIndex) {
    tasks = tasks.filter((_, index) => index !== deleteIndex);
    displayTask();
}

function editTask(editIndex) {
    targetElement.classList.add("active"); // open popup
    taskForm["title"].value = tasks[editIndex].title;
    taskForm["description"].value = tasks[editIndex].description;
    editingIndex = editIndex; // mark which task is being edited
}
