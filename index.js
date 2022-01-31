// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("../readme-ha/src/generateMarkdown");

// const fs = require("fs");
// const generateMarkdown = require("../readme-ha/src/generateMarkdown");

// const pageHTML = generateMarkdown(name, github);

// TODO: Create an array of questions for user input
const promptQuestions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "What is the title of the project?",
      message: "Title",
    },
    {
      type: "input",
      name: "What is your project about? Give a detailed desciption",
      message: "Description",
    },
    {
      type: "input",
      name: "Table of Contents",
      message: "Table of Contents",
    },
    {
      type: "input",
      name: "What needs to be installed to run this app?",
      message: "installation",
    },
    {
      type: "input",
      name: "usage",
      message: "How is the app used? Provide instructions",
    },
    {
      type: "input",
      name: "username",
      message: "What is your Github username?",
    },
    {
      type: "input",
      name: "questions",
      message: "Contact Us for Inquiries",
    },
    {
      type: "input",
      name: "email",
      message: "What is you email address?",
    },
    {
      type: "input",
      name: "contributing",
      message: "Who contributed to this project?",
    },
    {
      type: "input",
      name: "tests",
      message: "What commands are needed to test this project?",
    },
    {
      type: "list",
      name: "What license is being used?",
      message:
        "What license did you use for this project? (Check all that apply)",
      choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
    },
  ]);
};
promptQuestions().then((answers) => console.log(answers));

// TODO: Create a function to write README file
// fs.writeFile("index.html", generateMarkdown(name, github), (err) => {
//   if (err) throw err;

//   console.log("Readme complete! Check out index.html to see the output!");
// });

// TODO: Create a function to initialize app
// function init() {
//   inquirer.prompt(promptQuestions).then(function (data) {
//     writeFile("Readme.md", generateMarkdown(data));
//     console.log(data);
//   });
// }

// Function call to initialize app
init();

// const printReadmeData = (readmeDataArr) => {
//   readmeDataArr.forEach((readmeItem) => console.log(readmeItem));
// };

// printReadmeData(readmeDataArgs);
