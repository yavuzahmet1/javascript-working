const taskInput = document.getElementById("taskInput");
const addTask = document.getElementById("addTask");
const taskList = document.getElementById("taskList");
const header = document.querySelector(".header")

addTask.addEventListener("click", () => {
    const task = taskInput.value.trim()
    if (!task) {
        taskInput.value = ""
        header.textContent = "Not valid"
    } else {

        const lists = document.createElement("li");
        lists.classList.add("listsStyling")

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "delete"
        taskList.appendChild(lists);
        taskList.appendChild(deleteBtn);

        lists.textContent = taskInput.value
        taskInput.focus();
        taskInput.value = ""
    }
})