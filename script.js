function addTask(){

    let taskInput = document.getElementById("taskInput");
    let date = document.getElementById("taskDate").value;
    let time = document.getElementById("taskTime").value;
    let taskText = taskInput.value;
    
    if(taskText === ""){
    alert("Please enter a task");
    return;
    }
    
    let li = document.createElement("li");
    
    li.innerHTML = `
    ${taskText} (${date} ${time})
    <button onclick="completeTask(this)">✔</button>
    <button onclick="deleteTask(this)">❌</button>
    `;
    
    document.getElementById("taskList").appendChild(li);
    
    taskInput.value="";
    }
    
    function completeTask(button){
    button.parentElement.classList.toggle("completed");
    }
    
    function deleteTask(button){
    button.parentElement.remove();
    }