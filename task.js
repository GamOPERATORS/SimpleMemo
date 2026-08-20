'use strict';

const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-button');
const taskList = document.getElementById('task-list');

addButton.addEventListener('click', () => {
  const taskText = taskInput.value;

  if (taskText.length === 0) {
    return;
  }

  const listItem = document.createElement('li');
  listItem.innerText = taskText;

  taskList.appendChild(listItem);

  taskInput.value = '';
});

taskInput.addEventListener('keydown', (event) => {
  if (event.code === 'Enter') {
    addButton.dispatchEvent(new Event('click'));
  }
});
