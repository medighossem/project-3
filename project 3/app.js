document.addEventListener('DOMContentLoaded', () => {
    // Load tasks from local storage
    loadTasks();
});

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        // Create task element
        const taskElement = document.createElement('li');
        taskElement.innerHTML = `
            <span>${taskInput.value}</span>
            <button onclick="completeTask(this)">Done</button>
            <button class="delete-button" onclick="deleteTask(this)">Delete</button>
        `;

        // Append task to the list
        taskList.appendChild(taskElement);

        // Save tasks to local storage
        saveTasks();

        // Clear input field
        taskInput.value = '';
    }
}

function completeTask(button) {
    const taskElement = button.parentNode;
    taskElement.classList.toggle('completed');

    // Save tasks to local storage
    saveTasks();
}

function deleteTask(button) {
    const taskElement = button.parentNode;
    taskElement.remove();

    // Save tasks to local storage
    saveTasks();
}

function saveTasks() {
    const taskList = document.getElementById('taskList').innerHTML;
    localStorage.setItem('tasks', taskList);
}

function loadTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = localStorage.getItem('tasks') || '';
}
