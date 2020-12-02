// function to generate markdown for README
function generateMarkdown(response) {
//Title
`# Title
${response.title}`

`## Description
${response.description}`


//Installations
`## Installation:
${response.installation}`

//Usage
`## Usage:
${response.usage}`

//Contribution
`## Contribution
${response.contributors}`

//License
`## License
${response.license}`


//Tests
`## Tests
${response.tests}`

//Questions
`## Contact
${response.contact}`


return response
}


module.exports = generateMarkdown;
