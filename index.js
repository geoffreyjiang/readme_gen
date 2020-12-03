const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util')
const generateMarkdown = require("./utils/generateMarkdown")


function questions() {
  return inquirer.prompt([
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
      message: "How do I use this app?",
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
      choices: [`MIT License`, `Apache License`, `GPL License`, `Mozilla Public License`, `Eclipse Public License`],
      name: "license",
      message: "Enter licenses used",
  },
  {
    type: "input",
    name: "tech",
    message: "Enter programs used",
},
  {
      type: "input",
      name: "github",
      message: "Enter Github repo link"
  },    
  {
      type: "input",
      name: "contact",
      message: "Enter Email"
  },
]);
}

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err)
        }
        console.log("Done!")
    })
}

const writeReadme = util.promisify(writeToFile)

// function to initialize program
async function init() {
    try {
        const response = await questions();
        console.log(response);
        const markdown = generateMarkdown(response)
        console.log(markdown)
        await writeReadme("PracReadMe.md", markdown)
    } catch (err) {
        console.log(err)
    }
}

// function call to initialize program
init();