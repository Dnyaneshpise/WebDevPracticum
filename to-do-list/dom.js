import {tasks,loadTasks ,getTaskObj ,appHTML,initial } from "./data.js";


const addBtn = document.querySelector('#add-btn');
const inputTaskEle = document.querySelector('#newTask');
const main = document.querySelector('.js-main-section');

let {html, remainingTasks, doneTasks}=appHTML;

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
          <div class="items todoDone">
            <input type="checkbox" checked data-name="${task.name}">
            <span>${task.name}</span>
            <button class="deleteBtn"></button>
            <button class="deleteBtn js-delete-btn"><svg xmlns="http://www.w3.org/2000/svg" class="bi bi-trash" viewBox="0 0 16 16">
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
              <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
            </svg></button>
          </div>`;
      } else {
        htmlRemaining += `
          <div class="items todoRemaining">
            <input type="checkbox" data-name="${task.name}">
            <span>${task.name}</span>
            <button class="deleteBtn js-delete-btn"><svg xmlns="http://www.w3.org/2000/svg" class="bi bi-trash" viewBox="0 0 16 16">
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
              <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
            </svg></button>
          </div>`;
      }
    });

    remainingTasks.innerHTML = htmlRemaining;
    doneTasks.innerHTML = htmlDone;
    //event listner for checkboxes
    const inputCheckBoxELe = document.querySelectorAll('input[type="checkbox"]');
    inputCheckBoxELe.forEach((box) => {
      box.addEventListener('click', toggleTask);
    });
}