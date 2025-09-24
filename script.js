const taskInput = document.getElementById("taskInput")
const addBtn = document.getElementById("addBtn")
const taskList = document.getElementById("taskList")


addBtn.addEventListener("click", ()=>{
    const taskText = taskInput.value.trim();
    if(taskText === ""){
        alert('please enter a task');
        return;
    };
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent =  taskText;

    const editbtn = document.createElement("button");
    editbtn.textContent = "edit";
    editbtn.addEventListener("click", ()=>{
        const newText = prompt("edit your task", span.textContent);
        if (newText !== null && newText.trim() !== ""){
            span.textContent = newText;
        }
    });
    const deletebtn = document.createElement("button");
    deletebtn.textContent = "delete";
    deletebtn.addEventListener("click", ()=>{
        taskList.removeChild(li);
    });
    li.appendChild(span);
    li.appendChild(editbtn);
    li.appendChild(deletebtn);
    taskList.appendChild(li);

    taskInput.value  = "";
})