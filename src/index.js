// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function () {
  const taskForm = document.getElementById('create-task-form');  // More explicit naming
  const taskContainer = document.getElementById('tasks');       // Slightly different name for clarity

  taskForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Stop the page from refreshing on form submit
      
      const taskInputField = document.getElementById('new-task-description'); 
      const taskText = taskInputField.value.trim(); // Trim to avoid accidental empty spaces

      if (taskText === '') {
          console.warn('No task entered. Skipping...'); // Added a basic warning for empty inputs
          return;
      }

      const newTaskItem = document.createElement('li');
      newTaskItem.textContent = taskText;

      taskContainer.appendChild(newTaskItem); // Append new task to the list

      taskInputField.value = ''; // Clear the input after adding the task
  });
});
