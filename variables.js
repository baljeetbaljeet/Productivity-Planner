document.getElementById("submitButton").addEventListener("click", handleSubmit);

function handleSubmit(event) {
    event.preventDefault(); // Prevent form submission behavior

    // Function to retrieve tasks from inputs
    function getTasks(categoryId, count = 5) {
        const tasks = [];
        for (let i = 1; i <= count; i++) {
            const value = document.getElementById(`${categoryId}${i}`).value.trim();
            if (value) tasks.push(value);
        }
        return tasks;
    }

    // Retrieve all user inputs
    const importantUrgentTasks = getTasks("importantUrgent");
    const importantNotUrgentTasks = getTasks("importantNotUrgent");
    const urgentNotImportantTasks = getTasks("urgentNotImportant");
    const notImportantNotUrgentTasks = getTasks("notImportantNotUrgent");

    // Function to generate the task list with checkboxes
    function generateTaskList(title, tasks) {
        if (tasks.length === 0) return ""; // Skip if no tasks in this category

        let listHTML = `<div class="task-section"><h3>${title}</h3><ul class="task-list">`;
        tasks.forEach(task => {
            listHTML += `<li><input type="checkbox"> ${task}</li>`;
        });
        listHTML += `</ul></div>`;
        return listHTML;
    }

    // Generate the final task list display
    const taskListHTML =
        generateTaskList("Urgent; Do Right Now", importantUrgentTasks) +
        generateTaskList("Schedule for Later", importantNotUrgentTasks) +
        generateTaskList("Assign to Others", urgentNotImportantTasks) +
        generateTaskList("Don't Do", notImportantNotUrgentTasks);

    // Display the task list in the grid container
    document.getElementById("taskListContainer").innerHTML = taskListHTML;
}
