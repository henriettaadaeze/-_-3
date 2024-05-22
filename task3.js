function addTask() {
   
    var taskInput = document.getElementById("taskInput");
   
    var taskList = document.getElementById("taskList");

    if (taskInput.value === "") {
        alert("Please enter a task!");
        return;
    }

    var listItem = document.createElement("li");
    var taskText = document.createTextNode(taskInput.value);
    listItem.appendChild(taskText);

    var completeButton = document.createElement("button");
    completeButton.innerHTML = "Complete";
    completeButton.onclick = function() {
        completeTask(listItem);
    };
    listItem.appendChild(completeButton);

    taskList.appendChild(listItem);
    taskInput.value = "";
}

function completeTask(taskItem) {
    var completedTasks = document.getElementById("completedTasks");
    taskItem.removeChild(taskItem.childNodes[1]); // Remove the complete button
    taskItem.classList.add("completed"); // Add completed class for styling
    completedTasks.appendChild(taskItem);
}