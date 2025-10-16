// const taskList = document.querySelectorAll(".taskList");
// const spanTask = document.querySelectorAll(".task-span");
// const EditBtn = document.querySelectorAll(".cancel");
// // responsiveness in task
// const taskList = document.querySelectorAll(".taskList");
// const spanTask = document.querySelectorAll(".task-span");
// const checkBox = document.querySelectorAll(".check-box");
// const EditBtn = document.querySelectorAll(".cancel");
// const checkBox = document.querySelectorAll(".check-box");
// const checkedTrue = function (x) {
//   checkBox.forEach(function (checkedText) {
//     checkedText.checked = x;
//   });
// };

// console.log(spanTask);

// spanTask.forEach(function (task) {
//   console.log(task);

//   task.addEventListener("click", function () {
//     console.log("click me");
//     const taskCrossed = task.classList.toggle("textCrossed");

//     if (task.classList.contains("textCrossed")) {
//       console.log(checkBox);
//       checkedTrue(true);
//     } else if (!task.classList.contains("textCrossed")) {
//       checkedTrue(false);
//     }
//   });
// });
// EditBtn.forEach(function (btn) {
//   btn.addEventListener("click", function () {
//     console.log("d");
//     taskList.forEach(function (taskLi) {
//       console.log(taskLi);

//       if (btn.children[0]) {
//         console.log("x");
//         taskLi.remove();
//       }
//     });
//   });
//   console.log(btn, btn.children[0]);
// });
// task.addEventListener("click", function (e) {
//   // console.log(e.target.tagName === "SPAN");
//   // const textCross = e.target.className === "task-span";
//   // console.log(e.target.className === "check-box".checked);
