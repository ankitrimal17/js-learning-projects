
const addTodoList = document.querySelector("#add-todo-btn");
// const checkBox = document.querySelector("#check-box");
// const enterTask = document.querySelector("#enter-task");
// const deleteTaskBtn = document.querySelector(".delete-btn");
const newTaskList = document.querySelector("#todo-lists");

const clearAllBtn = document.querySelector("#clear-all-btn");


const createToDoItem = (taskText = "", checked = false) => {

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
    checkBox.type = "checkbox";
    checkBox.checked = checked;

    const checkBoxSpan = document.createElement("span");
    checkBoxSpan.classList.add("custom-checkmark");

    const enterTask = document.createElement("input");
    enterTask.type = "text";
    enterTask.placeholder = "Enter Task";
    enterTask.value = taskText;

    if (checked) {
        enterTask.classList.add("completed");
    }

    const deleteTaskBtn = document.createElement("button");
    deleteTaskBtn.textContent = "X";
    deleteTaskBtn.classList.add("delete-btn");

    checkBox.addEventListener("change", () =>{
        enterTask.classList.toggle("completed");
        saveTaskToLocalStorage();
    });

    // enterTask.addEventListener("change", (event) => {
    //     enterTask.placeholder = event.target.value;
    //     saveTaskToLocalStorage();
    // });

    enterTask.addEventListener("keydown", (e) => {
        if(e.key === "Enter"){
            enterTask.setAttribute("readonly", true);
            enterTask.blur();
        }
    });

    deleteTaskBtn.addEventListener("click", () => {
        newTaskList.removeChild(todoItem);
        saveTaskToLocalStorage();
    });

    checkBoxLabel.append(checkBox, checkBoxSpan);
    todoItem.append(checkBoxLabel, enterTask, deleteTaskBtn);
    newTaskList.appendChild(todoItem);

}

clearAllBtn.addEventListener("click", () => {
    let clearConfirmation = window.confirm("Are you sure you want to clear all tasks?");

    if(clearConfirmation){
        newTaskList.innerHTML = "";
    }
    else {
        window.alert("Clear action cancelled.");
    }
});


// adding localStorage to save the list data even after tab is closed


const saveTaskToLocalStorage = () => {
    const task = [];
    const taskItem = document.querySelectorAll("li");

    taskItem.forEach(item => {
        const taskText = item.querySelector("input[type='text']").value;
        const isChecked = item.querySelector("input[type='checkbox']").checked;

        task.push({text: taskText , checked: isChecked,});
    });
    localStorage.setItem("tasks", JSON.stringify(task));
}



const loadTaskFromLocalStorage = () => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    
    tasks.forEach(task => {
        createToDoItem(task.text, task.checked);
    });



    // tasks.forEach(task => {
    //     createToDoItem(task.text);
    //     if(task.checked){
    //         const lastItem = newTaskList.lastElementChild;
    //         lastItem.querySelector("input[type='checkbox']").checked = true;
    //         lastItem.querySelector("input[type='text']").classList.add("completed");
    //     }
    // });

}


addTodoList.addEventListener("click", () =>{
    createToDoItem();
});


loadTaskFromLocalStorage();





const themeToggleBtn = document.getElementById("theme-toggle");

themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
    document.body.classList.toggle("dark");

    // Save to localStorage
    const currentTheme = document.body.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", currentTheme);
});

// Load theme from localStorage
const savedTheme = localStorage.getItem("theme") || "dark";
document.body.classList.add(savedTheme);






