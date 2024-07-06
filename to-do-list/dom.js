import {tasks,loadTasks ,getTaskObj ,appHTML,initial,removeTask } from "./data.js";


const addBtn = document.querySelector('#add-btn');
const inputTaskEle = document.querySelector('#newTask');
const main = document.querySelector('.js-main-section');
let {html, remainingTasks, doneTasks ,countRemainingTask}=appHTML;

addBtn.addEventListener('click', addTask);

function addTask() {
  tasks.push({ name: inputTaskEle.value, state: false });
  inputTaskEle.value = '';
  renderTasks();
  loadTasks();
}

function renderTasks() {
  if(tasks.length===0){
    main.innerHTML=initial.html;
  }else{
    main.innerHTML=html;
    countRemainingTask =appHTML.countRemainingTask()
    remainingTasks =appHTML.remainingTasks();
    doneTasks = appHTML.doneTasks();
  }
  //we have to do the following and not just pass the reference;
    // remainingTasks = document.querySelector('#js-remaining');
    // doneTasks = document.querySelector('#task-done');

    let htmlRemaining = '';
    let htmlDone = '';

    tasks.forEach((task) => {
      if (task.state) {
        htmlDone += `
          <div class="items todoDone" data-name="${task.name}">
            <input type="checkbox" checked data-name="${task.name}">
            <span>${task.name}</span>
            <button class="deleteBtn js-delete-btn" value=${task.name}><i class="fa-solid fa-x"></i></button>
          </div>`;
      } else {
        htmlRemaining += `
          <div class="items todoRemaining">
            <input type="checkbox" data-name="${task.name}">
            <span>${task.name}</span>
            <button class="deleteBtn js-delete-btn" value=${task.name}><i class="fa-solid fa-x"></i></i></button>
          </div>`;
      }
    });

    remainingTasks.innerHTML = htmlRemaining;
    doneTasks.innerHTML = htmlDone;

    countRemainingTask.innerText=tasks.filter(task => !task.state).length || "";

    //event listner for checkboxes
    const inputCheckBoxELe = document.querySelectorAll('input[type="checkbox"]');
    inputCheckBoxELe.forEach((box) => {
      box.addEventListener('click', toggleTask);
    });

    //eventlistner for deletebtn
    const deleteBtn = document.querySelectorAll('.js-delete-btn');
    deleteBtn.forEach((btn)=>{
      btn.addEventListener("click",(eve)=>{
        const name = btn.value;
        btn.parentElement.remove()
        removeTask(name);
        renderTasks();
      })
    })

}



function toggleTask(event) {
  const checkbox = event.target;
  const taskName = checkbox.getAttribute('data-name');
  const matchingTask = getTaskObj(taskName);
  matchingTask.toggle(); 
  renderTasks(); 
}

renderTasks(); // Initial rendering
