const inquirer = require('inquirer');
const fs = require('fs');
const genMarkdown = require(`Develop/utils/generateMarkdown.js`);


const questions = [
    {
        type: "input",
        name: "title",
        message: "Enter project title"
    },
    {
        type: "input",
        name: "description",
        message: "Enter project description"
    },
    {
        type: "input",
        name: "installation",
        message: "How do I install this app?"
    },
    {
        type: "input",
        name: "usage",
        message: "How do I use this app?"
    },
    {
        type: "input",
        name: "contributors",
        message: "Enter contributors"
    },
    {
        type: "input",
        name: "license",
        message: "Enter licenses used?",
        choices: [`MIT License`, `Apache License`, `GPL License`, `Mozilla Public License`, `Eclipse Public License`]
    },
    {
        type: "input",
        name: "username",
        message: "Enter Github username"
    },    
    {
        type: "input",
        name: "email",
        message: "Enter Email"
    }


];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
