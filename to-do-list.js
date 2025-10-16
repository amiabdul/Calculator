"use strict";
const taskInput = document.getElementById("task-input");
const addTask = document.querySelector(".add-task");
const task = document.getElementById("task");
const displayAlert = document.querySelector(".alert");

addTask.addEventListener("click", function (e) {
  e.preventDefault();

  if (taskInput.value.trim() === "") {
    displayAlert.classList.toggle("display");
  } else {
    const taskValue = taskInput.value;
    console.log("click", e);
    let taskToDo = document.createElement("li");
    taskToDo.className = "taskList";
    taskToDo.innerHTML = `
    <input type="checkbox" class ='check-box'>
    <span class='task-span'>${taskValue}</span>
    <div class ='cancel'>
    <i class="fa-solid fa-trash"></i>
    <i class="fa-solid fa-pen"></i>
    </div>
    `;

    displayAlert.classList.add("display");

    // add the task to unordered list
    task.appendChild(taskToDo);

    const checkBox = document.querySelector(".check-box");
    const spanTask = document.querySelector(".task-span");
  }
  taskInput.value = "";
});
task.addEventListener("click", function (e) {
  console.log(e.target.classList);
  console.log(e.srcE);

  if (e.target.classList.contains("task-span")) {
    // console.log(textCross);
    // if (e.target.classList.toggle("text-crossed")) {
    //   checkBox.checked = true;
    // } else {
    //   checkBox.checked = false;
    // }
    e.target.classList.toggle("text-crossed");
  } else if (e.target.classList.contains("fa-trash")) {
    e.target.parentElement.parentElement.remove();
    // taskToDo.remove();
  } else if (e.target.classList.contains("fa-pen")) {
    console.log(e);

    // taskInput.value = e.classList("task-span").textContent;
  }
});

//   if (e.target.classList.contains("task-span")) {
//     // console.log(textCross);
//     const checkBox = e.target.className === "check-box";
//     console.log(!checkBox.checked);
//     if (e.target.classList.toggle("text-crossed")) {
//       !checkBox.checked;
//     }
//   } else if (e.target.classList.contains("fa-trash")) {
//     e.target.parentElement.parentElement.remove();
//     // taskToDo.remove;
//   } else if (e.target.classList.contains("fa-pen")) {
//   }
// });
