document.getElementById("submitButton").addEventListener("click", handleSubmit);

function handleSubmit(event) {
    event.preventDefault(); 
    
    function getTasks(categoryId, count = 5) {
        const tasks = [];
        for (let i = 1; i <= count; i++) {
            const value = document.getElementById(`${categoryId}${i}`).value.trim();
            if (value) tasks.push(value);
        }
        return tasks;
    }

   
    const importantUrgentTasks = getTasks("importantUrgent");
    const importantNotUrgentTasks = getTasks("importantNotUrgent");
    const urgentNotImportantTasks = getTasks("urgentNotImportant");
    const notImportantNotUrgentTasks = getTasks("notImportantNotUrgent");

    
    function generateTaskList(title, tasks) {
        if (tasks.length === 0) return ""; 

        let listHTML = `<div class="task-section"><h3>${title}</h3><ul class="task-list">`;
        tasks.forEach(task => {
            listHTML += `<li><input type="checkbox"> ${task}</li>`;
        });
        listHTML += `</ul></div>`;
        return listHTML;
    }

   
    const taskListHTML =
        generateTaskList("Urgent; Do Right Now", importantUrgentTasks) +
        generateTaskList("Schedule for Later", importantNotUrgentTasks) +
        generateTaskList("Assign to Others", urgentNotImportantTasks) +
        generateTaskList("Don't Do", notImportantNotUrgentTasks);

   
    document.getElementById("taskListContainer").innerHTML = taskListHTML;
}
