export let tasks =[]

class Task{
  constructor(obj){
    this.name = obj.name;
    this.state = obj.state||false;
    this.dueDate = null;
  }
  toggle(){
    this.state = !this.state;
  }
  getState(name){
    return this.state
  }
}

export function loadTasks(){
  tasks = tasks.map((task)=>{
    return new Task(task);
  });
  console.log(tasks);
}
export function removeTask(name){
  tasks = tasks.filter(task => {
    return task.name !== name
  });
}
export function getTaskObj(name){
  let matchingTask;
  tasks.forEach((taskObj)=>{
    if(taskObj.name === name){
      matchingTask=taskObj;
    }
  })
  return matchingTask;
}

export const appHTML = {
  html: `<section class="remaining">
        <div class="tableInfo">
          <span>Remaining Tasks <span id="count">0</span></span>
          
          <svg title="Time Left" width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 3L2 6M22 6L19 3M6 19L4 21M18 19L20 21M12 9V13L14 15M12 21C14.1217 21 16.1566 20.1571 17.6569 18.6569C19.1571 17.1566 20 15.1217 20 13C20 10.8783 19.1571 8.84344 17.6569 7.34315C16.1566 5.84285 14.1217 5 12 5C9.87827 5 7.84344 5.84285 6.34315 7.34315C4.84285 8.84344 4 10.8783 4 13C4 15.1217 4.84285 17.1566 6.34315 18.6569C7.84344 20.1571 9.87827 21 12 21Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
        <div id="js-remaining">

        </div>
      </section>
        <!-- <hr>  -->
      <section class="done">
        <p class="doneTask">Tasks Done &#9989;</p>
        <div id="task-done">
        </div>
      </section>`,
  
  remainingTasks() {return document.querySelector('#js-remaining')},
  doneTasks(){ return document.querySelector('#task-done')}
  // remainingTasks :document.querySelector('#js-remaining'),
  // doneTasks : document.querySelector('#task-done')
}

export const initial ={
    html:`<div style=" justify-content: center;  align-items: center; font-size: 30px; color: #555;">
      Your to-do list is empty.

    <p style=" justify-content: center;       align-items: center; font-size: 24px;">GitHub: Dnyanesh pise</p>

    <p style="font-size: 24px;">LinkedIn: Dnyanesh pise</p>

    </div>

  `
}