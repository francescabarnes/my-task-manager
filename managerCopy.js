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

function replDemo() {
  return new Promise(function (resolve, reject) {
    let rl = readline.createInterface(process.stdin, process.stdout);
    console.log(welcome);
    rl.setPrompt("task> ");
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
          addTask();
          break;
        case "4":
          addTask();
          break;
        case "5":
          console.log("bye");
          rl.close();
          return;
      }
      rl.prompt();
    });
  });
}

async function run() {
  try {
    let replResult = await replDemo();
    console.log("repl result:", replResult);
  } catch (e) {
    console.log("failed:", e);
  }
}

run();
