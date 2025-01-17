const { pwd } = require("./pwd");
const { ls } = require("./ls");
const { cat } = require("./cat");

//Output a prompt
process.stdout.write("prompt > ");

//The stdin 'data' event fires after a user types in a line

  process.stdin.on("data", (data) => {
    const cmd = data.toString().trim();
    const fileArr = cmd.split(' ');
    const fileName = fileArr[1]
    if (cmd === "pwd") {
      pwd();
    } else if (cmd === "ls") {
      ls();
    } else if (cmd.includes("cat")) {
      cat();
    } else {
      process.stdout.write("You typed: " + cmd);
      process.stdout.write("\nprompt > ");
    }
  });


