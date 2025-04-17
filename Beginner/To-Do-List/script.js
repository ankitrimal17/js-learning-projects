
const addTodoList = document.querySelector("#add-todo-btn");
// const checkBox = document.querySelector("#check-box");
// const enterTask = document.querySelector("#enter-task");
// const deleteTaskBtn = document.querySelector(".delete-btn");
const newTaskList = document.querySelector("#todo-lists");

const clearAllBtn = document.querySelector("#clear-all-btn");


addTodoList.addEventListener("click", () =>{

    const existingTask = document.querySelectorAll("#todo-lists input[type='text']");
    for (const input of existingTask){
        if(input.value.trim() === ""){
            window.alert("Please fill in the current task before adding the new one :)");
            input.focus();
            return;
        }
    }



    const todoItem = document.createElement("li");

    const checkBoxLabel = document.createElement("label");
    checkBoxLabel.classList.add("checkbox-wrapper");

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox"

    const checkBoxSpan = document.createElement("span");
    checkBoxSpan.classList.add("custom-checkmark")

    const enterTask = document.createElement("input");
    enterTask.type = "text";
    enterTask.placeholder = "Enter Task"

    const deleteTaskBtn = document.createElement("button");
    deleteTaskBtn.textContent = "X"
    deleteTaskBtn.classList.add("delete-btn");

    checkBox.addEventListener("change", () =>{
        enterTask.classList.toggle("completed");
    });

    enterTask.addEventListener("keydown", (e) => {
        if(e.key === "Enter"){
            enterTask.setAttribute("readonly", true);
            enterTask.blur();
        }
    });

    deleteTaskBtn.addEventListener("click", () => {
        newTaskList.removeChild(todoItem);
    });

    checkBoxLabel.append(checkBox, checkBoxSpan);
    todoItem.append(checkBoxLabel, enterTask, deleteTaskBtn);
    newTaskList.appendChild(todoItem);

});

clearAllBtn.addEventListener("click", () => {
    let clearConfirmation = window.confirm("Are you sure you want to clear all tasks?");

    if(clearConfirmation){
        newTaskList.innerHTML = "";
    }
    else {
        window.alert("Clear action cancelled.");
    }
})