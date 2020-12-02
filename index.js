const inquirer = require('inquirer');
const fs = require('fs');
const genMarkdown = require("./utils/generateMarkdown");
const util = require('util')
const writeFile = util.promisify(writeToFile)



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
        name: "tests",
        message: "Enter any tests"
    },
    {
        type: "input",
        name: "contributors",
        message: "Enter contributors"
    },
    {
        type: "input",
        name: "license",
        message: "Enter licenses used",
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
    fs.watchFile(fileName, data, (err) => {
        if (err) {
            return console.log(err)
        }
        console.log("NO ERR!!")
    })
}

// function to initialize program
async function init() {
    try {
        const response = await inquirer.prompt(questions);
        console.log(response);

        const markdown = genMarkdown(response)
        await writeFile("DemoReadMe.md", markdown)
    } catch (err) {
        console.log(err)
    }

}

// function call to initialize program
init();
