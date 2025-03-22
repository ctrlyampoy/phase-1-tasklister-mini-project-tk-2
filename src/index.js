document.addEventListener('DOMContentLoaded', () => {
  // gather the form and task list items.
  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');
  
  // event listener for the form's submission
  form.addEventListener('submit', (e) => {
    e.preventDefault(); // prevent the form from refreshing the page 

    // receive the value of the new task description input
    const taskDescription = document.getElementById('new-task-description').value;

    if (taskDescription.trim() !== '') {
      addTask(taskDescription); // new task added to the list
      form.reset(); // reset the form fields to blank
    } else {
      alert('Task description cannot be empty!');
    }
  });

  // addTask function 
  function addTask(description) {
    const li = document.createElement('li'); // a new item is listed
    li.textContent = description; // assigns the textContent to "description" variable

    // make a delete button for the task
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'x';
    

    // event listener for the delete button
    deleteButton.addEventListener('click', () => {
      li.remove(); // task is removed when the x is clicked
    });

    li.appendChild(deleteButton); // delete button is added through the "li" tag in html
    taskList.appendChild(li); // appendChild adds elements below the <ul id="tasks"> which is the parent element
  }
});
