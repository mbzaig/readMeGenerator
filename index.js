const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const {
    generateLicenseBadges,
    generateLangBadges,
    generateMarkdown,
  } = require("./utils/generateMd");

// array of questions for user
inquirer .prompt(
    [



    ]
)


// function to write README file
.then((response)=> {
    const LicensebadgeMarkdown = generateLicenseBadges(response.license);
    const LangbadgeMarkdown = generateLangBadges(response.language);
    const readMeInfo = generateMarkdown(response, LicensebadgeMarkdown, LangbadgeMarkdown);
    const markdown = `${readMeInfo}`;
    fs.writeFile(title + "readMe.md", markdown, (err) =>
        err ? console.Console(err) : console.log("Read Me file generated succesfully"));
})

// function to initialize program
function init() {

}

// function call to initialize program
init();
