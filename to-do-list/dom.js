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
          </div>`;
      } else {
        htmlRemaining += `
          <div class="items todoRemaining">
            <input type="checkbox" data-name="${task.name}">
            <span>${task.name}</span>
          </div>`;
      }
    });

    remainingTasks.innerHTML = htmlRemaining;
    doneTasks.innerHTML = htmlDone;

    const inputCheckBoxELe = document.querySelectorAll('input[type="checkbox"]');
    inputCheckBoxELe.forEach((box) => {
      box.addEventListener('click', toggleTask);
    });
}