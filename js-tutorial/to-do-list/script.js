const addBtn = document.getElementById("add-btn");
const clearBtn = document.getElementById("clear-btn");
const inputBox = document.querySelector("#input-box");
const container = document.querySelector("#to-do-container");


addBtn.addEventListener("click", () => {
    const paragraph = document.createElement("p");
    paragraph.classList.add("paragraph-styling");
    container.appendChild(paragraph);
    paragraph.innerHTML = inputBox.value;
    inputBox.value = "";
    inputBox.focus();

    paragraph.addEventListener("click", () => {
        paragraph.style.textDecoration = "line-through";
        paragraph.style.color = "grey"
        console.log(event.target)
    })
    paragraph.addEventListener("dblclick", () => {
        paragraph.remove();
        console.log(event.target)
    })

    clearBtn.addEventListener("click", () => {
        paragraph.style.color = "red"
        console.log(event.target)
    })
})
