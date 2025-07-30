let taskList = document.getElementById("taskList");

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskDateTime = document.getElementById("taskDateTime");

  const taskText = taskInput.value.trim();
  const taskTime = taskDateTime.value;

  if (!taskText || !taskTime) {
    alert("Please enter task and date/time!");
    return;
  }

  const li = document.createElement("li");
  li.className = "task-item";

  const span = document.createElement("span");
  span.innerHTML = `<strong>${taskText}</strong><br><small>${new Date(taskTime).toLocaleString()}</small>`;

  const actions = document.createElement("div");
  actions.className = "task-actions";

  // Complete Button
  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✔";
  completeBtn.onclick = () => {
    li.classList.toggle("completed");
  };

  // Edit Button
  const editBtn = document.createElement("button");
  editBtn.textContent = "✏";
  editBtn.onclick = () => {
    const newText = prompt("Edit task:", taskText);
    if (newText) {
      span.innerHTML = `<strong>${newText}</strong><br><small>${new Date(taskTime).toLocaleString()}</small>`;
    }
  };

  // Delete Button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑";
  deleteBtn.onclick = () => {
    taskList.removeChild(li);
  };

  actions.appendChild(completeBtn);
  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(actions);
  taskList.appendChild(li);

  // Clear input
  taskInput.value = "";
  taskDateTime.value = "";
}
