const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const {
    generateLicenseBadges,
    generateLangBadges,
    generateMarkdown,
  } = require("./utils/generateMd");

// array of questions for user
inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "Enter a description of your project?",
      name: "description",
    },
    {
      type: "input",
      message:
        "What does the user need to install to use the application? (use the backticks to present properly)",
      name: "install",
    },
    {
      type: "input",
      message:
        "How does a user start your app? (use the backticks to present properly)",
      name: "usage",
    },
    {
      type: "list",
      message: "Which license applies to your project?",
      name: "license",
      choices: [
       
        "Apache 2.0",
        "Boost 1.0",
        "BSD 2-Clause License",
        "BSD 3-Clause License",
        "Eclipse Public License 1.0",
        "The Hippocratic License 2.1",
        "The Hippocratic License 3.0",
        "IBM Public License Version 1.0",
        "ISC License (ISC)",
        "The MIT License",
        "Mozilla Public License 2.0",
        "The Perl License",
      ],
    },
    {
        type: "list",
        message: "Which langugage applies to your project?",
        name: "language",
        choices: [
         
          "HTML5",
          "JavaScript",
          "CSS3",
          "Node.js",
          "jQuery",
        ],
      },
    {
      type: "input",
      message:
        "What should the user run in order to test the application? (use the backticks to present properly)",
      name: "testIt",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },
    {
      type: "input",
      message: "Provide the link to your GitHub profile.",
      name: "github",
    },
  ])

// function to write README file
.then((response)=> {
    const LicensebadgeMarkdown = generateLicenseBadges(response.license);
    const fileTitle=response.title+"md";
    const LangbadgeMarkdown = generateLangBadges(response.language);
    const readMeInfo = generateMarkdown(response, LicensebadgeMarkdown, LangbadgeMarkdown);
    const markdown = `${readMeInfo}`;
    fs.writeFile(fileTitle, markdown, (err) =>
        err ? console.Console(err) : console.log("Read Me file generated succesfully"));
})

// function to initialize program
function init() {
    fs.rm

}

// function call to initialize program
init();
