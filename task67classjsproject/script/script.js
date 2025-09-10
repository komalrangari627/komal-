let tasks = [];
let addBtn = document.querySelector("#add-notes-button"),
    popup = document.querySelector(".add-notes-pop-up"),
    closeBtn = document.querySelector("#close-pop-up"),
    form = document.querySelector("#task-form");

addBtn.onclick = () => popup.classList.add("active");
closeBtn.onclick = () => popup.classList.remove("active");

form.onmouseleave = () => document.getElementById("formSubmitButton").click();

form.onsubmit = e => {
  e.preventDefault();
  let title = e.target.title.value.trim(),
      desc = e.target.description.value.trim();
  if (!title || !desc) return alert("Please fill in both fields!");

  // Prevent duplicate titles
  if (!tasks.some(t => t.title.toLowerCase() === title.toLowerCase())) {
    tasks.push({
      title: `Task ${tasks.length + 1}`,
      description: desc,
      timeStamp: `T: ${new Date().toLocaleTimeString()} D: ${new Date().toLocaleDateString()}`
    });
    e.target.reset();
    closeBtn.click();
    displayTasks();
  } else alert("Task title already exists!");
};

function displayTasks() {
  document.querySelector('.tasks-container').innerHTML = tasks.map(t => `
    <div class="task border p-4">
      <h4 class="title">${t.title}</h4>
      <p class="description">${t.description}</p>
      <span class="timeStamp">${t.timeStamp}</span>
    </div>
  `).join("");
}
