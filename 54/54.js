const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

let dragSrcEl = null;

addBtn.addEventListener('click', addTask);

function addTask() {
  const text = taskInput.value.trim();
  if (!text) return;

  const li = document.createElement('li');
  li.textContent = text;
  li.setAttribute('draggable', true);

  li.addEventListener('dragstart', handleDragStart);
  li.addEventListener('dragover', handleDragOver);
  li.addEventListener('drop', handleDrop);
  li.addEventListener('dragend', handleDragEnd);

  taskList.appendChild(li);
  taskInput.value = '';
}

function handleDragStart(e) {
  dragSrcEl = this;
  this.classList.add('dragging');
  e.dataTransfer.effectAllowed = 'move';
}

function handleDragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
  return false;
}

function handleDrop(e) {
  e.stopPropagation();
  if (dragSrcEl !== this) {
    taskList.insertBefore(dragSrcEl, this.nextSibling);
  }
  return false;
}

function handleDragEnd() {
  this.classList.remove('dragging');
}
