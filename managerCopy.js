// MY TASK MANAGER - TERMINAL

// SETUP CODE
const fs = require("fs");
const readline = require("readline");
var rl = readline.createInterface(process.stdin, process.stdout);

let tasks = ["task1", "task2", "task3"];

let welcome =
  "Welcome to your task manager, Press: \n1. to see all your tasks \n2. to add a task \n3. to delete a task \n4. to mark a task as done \n5. to Exit the task manager\n";

const addTask = () => {
  return new Promise((resolve) => {
    rl.question("Which task do you wanna add: ", (task) => {
      resolve(task);
      console.log("Your new task: ", task);
      rl.close();
    });
  });
};

// EXEMPLE

rl.question(welcome, (taskNumber) => {
  if (taskNumber === "1") {
    console.log(tasks);
  } else if (taskNumber === "2") {
    addTask();
  }
});
