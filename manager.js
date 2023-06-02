// MY TASK MANAGER - TERMINAL

// SETUP CODE
const fs = require("fs");
const readline = require("readline");
var rl = readline.createInterface(process.stdin, process.stdout);

const welcome =
  "Welcome to your task manager, Press: \n1. to see all your tasks \n2. to add a task \n3. to delete a task \n4. to mark a task as done \n5. to Exit the task manager\n";

let tasks = ["task1", "task2", "task3"];

const showtasks = () => {
  console.log(tasks);
  rl.question(welcome);
};

const addTask = () => {
  rl.question("Add a new task: ", (taskNumber) => {
    tasks.push(taskNumber);
    console.log(tasks);
  });
};

const deleteTask = () => {
  rl.question("Delete a task: ", (task) => {
    const found = tasks.indexOf(task);
    tasks.splice(found, 1);
    console.log(tasks);
  });
};

const updateTask = () => {
  rl.question("Task to be updated: ", (task) => {
    const indexFound = tasks.indexOf(task);
    tasks[indexFound] = `${task} - done`;
    console.log(tasks);
  });
};

rl.question(welcome, (taskNumber) => {
  if (taskNumber === "1") {
    showtasks();
  } else if (taskNumber === "2") {
    addTask();
  } else if (taskNumber === "3") {
    deleteTask();
  } else if (taskNumber === "4") {
    updateTask();
  } else if (taskNumber === "5") {
    rl.close();
  }
});
