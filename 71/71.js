function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  if (taskText) {
    const taskList = document.getElementById("taskList");
    const li = document.createElement("li");
    li.textContent = taskText;
    li.onclick = () => li.remove();
    taskList.appendChild(li);
    taskInput.value = "";
  }
}
