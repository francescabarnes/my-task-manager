// MY TASK MANAGER - TERMINAL

// SETUP CODE
const fs = require("fs");
const readline = require("readline");
var rl = readline.createInterface(process.stdin, process.stdout);

let welcome =
  "Welcome to your task manager, Press: \n1. to see all your tasks \n2. to add a task \n3. to delete a task \n4. to mark a task as done \n5. to Exit the task manager";

const readTask = () => {
  fs.readFile("file.json", function (err, data) {
    if (err) throw err;
    var array = data.toString().split("\n");
    for (i in array) {
      console.log(array[i]);
    }
  });
};

const addTask = () => {
  rl.question("Which task do you wanna add: ", (task) => {
    console.log("Your new task: ", task);
  });
};

const removeTask = () => {
  rl.question("Which task do you wanna add: ", (task) => {
    console.log("Your new task: ", task);
  });
};

const markAsDone = () => {
  rl.question("Which task do you wanna add: ", (task) => {
    console.log("Your new task: ", task);
  });
};

function doTask() {
  return new Promise(function (resolve, reject) {
    //I need to use promisse because I'm waiting for user anse
    let rl = readline.createInterface(process.stdin, process.stdout);
    console.log(welcome);
    rl.setPrompt("which task? > ");
    rl.prompt();
    rl.on("line", function (line) {
      switch (line.trim()) {
        case "1":
          readTask();
          break;
        case "2":
          addTask();
          break;
        case "3":
          removeTask();
          break;
        case "4":
          markAsDone();
          break;
        case "5":
          console.log("bye");
          rl.close();
          return;
        default:
          console.log(welcome);
      }
      rl.prompt();
    });
  });
}

async function run() {
  try {
    let replResult = await doTask();
    console.log("repl result:", replResult);
  } catch (e) {
    console.log("failed:", e);
  }
}

run();
