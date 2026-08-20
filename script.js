'use strict';

const tasks = [];

const addButton = document.getElementById('addButton');

addButton.addEventListener('click', () => {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');

  const taskName = taskInput.value;

  if (taskName === '') {
    return;
  }

  tasks.push(taskName);

  const listItem = document.createElement('li');
  listItem.textContent = taskName;

  taskList.appendChild(listItem);

  taskInput.value = '';
});
