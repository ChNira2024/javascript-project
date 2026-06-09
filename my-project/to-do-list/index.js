let todoApp = {
tasks: [],
addTask(task) {
    this.tasks.push({text: task, completed: false});
    this.renderTask();
},

toggleTask(index) {
    this.tasks[index].completed = !this.tasks[index].completed;
    this.renderTask();
},

removeCompletedTasks(){
    this.tasks = this.tasks.filter(task => !task.completed);
    this.renderTask();
},

renderTask(){
   let taskList = document.getElementById('taskList');
   taskList.innerHTML  = ''; //clear the task, elsee it will re-render all the task

   this.tasks.forEach((task,index)=>{
    const li = document.createElement('li');
    li.textContent = task.text;
    li.onclick = () => this.toggleTask(index);

    if(task.completed){
        li.classList.add('completed');
    }
    taskList.appendChild(li);
   });

}

};

document.getElementById('addTask').onclick = () => {
    alert("hi")
    let taskInput = document.getElementById('taskInput');
    todoApp.addTask(taskInput.value);
    taskInput.value='';

};


todoApp.addTask("Learn JavaScript")