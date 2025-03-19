document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#create-task-form');
  const taskList = document.querySelector('#tasks');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // prevents the form from submitting in case the input field is blank

    // this receives the input value
    const taskInput = document.querySelector('#new-task-description');
    const taskDescription = taskInput.value;

    // Create a new list item and add the task description
    const taskItem = document.createElement('li');
    taskItem.textContent = taskDescription;

    // this adds the new task to the task list
    taskList.appendChild(taskItem);

    // this clears the input field
    taskInput.value = '';
  });
}); 