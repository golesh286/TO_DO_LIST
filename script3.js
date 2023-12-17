function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskListBody = document.getElementById('taskListBody');

    if (taskInput.value.trim() !== '') {
        var newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${taskListBody.children.length + 1}</td>
            <td>${taskInput.value}</td>
            <td>Pending</td>
            <td>
                <button class="delete-button" onclick="deleteTask(this)">Delete</button>
                <button class="complete-button" onclick="completeTask(this)">Finished</button>
            </td>
        `;
        taskListBody.appendChild(newRow);

        taskInput.value = '';
    } else {
        alert('Task cannot be empty!');
    }
}

function deleteTask(button) {
    var row = button.closest('tr');
    row.cells[2].textContent = 'Deleted';
    row.style.display = 'none';
}

function completeTask(button) {
    var row = button.closest('tr');
    row.cells[2].textContent = 'Completed';
    row.style.textDecoration = 'line-through';
    row.querySelector('.complete-button').style.display = 'none';
}

// function getTasks() {
//     var taskListBody = document.getElementById('taskListBody');
//     var rows = taskListBody.getElementsByTagName('tr');

//     var searchTerm = prompt('Enter the task you want to find:').trim();

//     if (searchTerm !== null) {
//         searchTerm = searchTerm.toLowerCase();

//         var foundTasks = Array.from(rows).filter(row => {
//             var taskName = row.cells[1].textContent.toLowerCase();
//             return taskName.includes(searchTerm);
//         });

//         if (foundTasks.length > 0) {
//             var taskDetails = foundTasks.map((row, index) => {
//                 return {
//                     number: index + 1,
//                     task: row.cells[1].textContent,
//                     status: row.cells[2].textContent,
//                     actions: `
//                         <button class="delete-button" onclick="deleteTask(this)">Delete</button>
//                         <button class="complete-button" onclick="completeTask(this)">Finished</button>
//                     `
//                 };
//             });

//             displayTaskDetails(taskDetails);
//         } else {
//             alert('Task not found!');
//         }
//     }
// }
function displayTaskDetails(taskDetails) {
    var taskListBody = document.getElementById('taskListBody');
    taskListBody.innerHTML = '';

    taskDetails.forEach(task => {
        var newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${task.number}</td>
            <td>${task.task}</td>
            <td>${task.status}</td>
            <td>${task.actions}</td>
        `;
        taskListBody.appendChild(newRow);
    });
}

function quitApp() {
    if (confirm('Are you sure you want to quit?')) {
        window.close();
    }
}
