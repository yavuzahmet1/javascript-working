const formToDo = document.querySelector(".formToDo");
const submitBtn = document.querySelector(".submitBtn");
const inputToDo = document.querySelector(".inputToDo");
const containerToDos = document.querySelector(".containerToDos");

const startConf = () => {
    //start settings
    const todos = localStorage.getItem("todos");
    if (!todos) {
        localStorage.setItem("todos", JSON.stringify([]))
    }
}
startConf();

const addToDo = (event) => {
    event.preventDefault()
    const inputValue = inputToDo.value;
    const todo = {
        text: inputValue,
        isCompleted: false,
    }
    const todos = JSON.parse(localStorage.getItem("todos"))
    todos.push(todo)

    localStorage.setItem("todos", JSON.stringify(todos))
    console.log(todos)

    const toDos = document.createElement("div")
    toDos.classList.add("todo")

    const leftToDo = document.createElement("div")
    leftToDo.classList.add("leftToDo")

    const cbToDo = document.createElement("input");
    cbToDo.type = "checkbox";
    cbToDo.checked = todo.isCompleted;
    cbToDo.classList.add("cbToDo")

    const textToDo = document.createElement("span")
    textToDo.classList.add("textToDo")
    textToDo.textContent = todo.text

    leftToDo.appendChild(cbToDo);
    leftToDo.appendChild(textToDo);

    const rightToDo = document.createElement("div")
    rightToDo.classList.add("rightToDo")

    const deleteBtn = document.createElement("button")
    deleteBtn.classList.add("deleteBtn")
    deleteBtn.textContent = "Delete"

    const editBtn = document.createElement("button")
    editBtn.classList.add("editBtn")
    editBtn.textContent = "Edit";

    rightToDo.appendChild(deleteBtn);
    rightToDo.appendChild(editBtn);

    toDos.appendChild(leftToDo)
    toDos.appendChild(rightToDo)

    containerToDos.appendChild(toDos);

}

formToDo.addEventListener("submit", addToDo)


///26.56 https://www.youtube.com/watch?v=SmUZmOZ0kDk