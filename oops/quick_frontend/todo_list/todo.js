const form = document.querySelector('form');
const input = document.querySelector('#new-task');
const taskList = document.querySelector('#task-list');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const task = input.value.trim();
  if (task !== '') {
    const li = document.createElement('li');
    li.innerHTML = `
      <span class="task">${task}</span>
      <span class="delete" aria-label="Delete task">×</span>
    `;
    taskList.appendChild(li);
    input.value = '';
  }
});

taskList.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete')) {
    event.target.parentElement.remove();
  }
});