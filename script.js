const input = document.getElementById("inputText");
const button = document.getElementById("addbutton");
const tasks = document.getElementById("taskList");


button.addEventListener("click", ()=>{
    const li = document.createElement("li");
    li.innerText=input.ariaValueMax;
    tasks.appendChild(li);
});

li.addEventListener("click",()=>{
    tasks.removeChild(li);
})