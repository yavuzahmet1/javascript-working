const add = document.getElementById("add-btn");
const clear = document.getElementById("clear-btn");
const inputBox = document.getElementById("input-box");
const toDoContainer = document.getElementById("to-do-container")


add.addEventListener("click", () => {
    let paragraph = document.createElement("p");
    toDoContainer.appendChild(paragraph);
    paragraph.textContent = inputBox.value
    inputBox.value = ""
})