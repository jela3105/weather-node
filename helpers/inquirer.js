const inquirer = require("inquirer");
require("colors");
const questions = [
  {
    type: "list",
    name: "option",
    message: "What would you like to do?",
    choices: [
      { value: 1, name: `${"1".green}. Search city` },
      { value: 2, name: `${"2".green}. History` },
      { value: 0, name: `${"0".green}. Exit` },
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log("============================================".green);
  console.log("	  Selected some option     ".white);
  console.log("============================================\n".green);
  const { option } = await inquirer.prompt(questions);
  return option;
};

const pause = async () => {
  const question = [
    {
      type: "input",
      name: "Enter",
      message: `Press ${"enter".green} to continue`,
    },
  ];
  console.log("\n");
  await inquirer.prompt(question);
};

const readInput = async (message) => {
  const question = [
    {
      type: "input",
      name: "desc",
      message,
      validate(value) {
        if (value.length === 0) {
          return "Please type some value";
        }
        return true;
      },
    },
  ];

  const { desc } = await inquirer.prompt(question);
  return desc;
};

const deleteTasksList = async (tasks = []) => {
  const choices = tasks.map((task, i) => {
    const idx = `${i + 1}.`.green;
    return {
      value: task.id,
      name: `${idx} ${task.desc}`,
    };
  });
  choices.unshift({ value: "0", name: "0.".green + " Cancel" });
  const questions = [{ type: "list", name: "id", message: "Delete", choices }];
  const { id } = await inquirer.prompt(questions);
  return id;
};

const confirm = async (message) => {
  const question = [{ type: "confirm", name: "ok", message }];
  const { ok } = await inquirer.prompt(question);
  return ok;
};
const completeTaskCheckList = async (tasks = []) => {
  const choices = tasks.map((task, i) => {
    const idx = `${i + 1}.`.green;
    return {
      value: task.id,
      name: `${idx} ${task.desc}`,
      checked: task.completedOn ? true : false,
    };
  });
  const question = [
    { type: "checkbox", name: "ids", message: "Select", choices },
  ];
  const { ids } = await inquirer.prompt(question);
  return ids;
};
module.exports = {
  inquirerMenu,
  pause,
  readInput,
  deleteTasksList,
  confirm,
  completeTaskCheckList,
};
