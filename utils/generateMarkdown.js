// function to generate markdown for README
function generateMarkdown(response) {
//Title
`# Title
${userResponse.title}`

`## Description
${userResponse.description}`


//Installations
`## Installation:
${userResponse.installation}`

//Usage
`## Usage:
${userResponse.usage}`

//Contribution
`## Contribution
${userResponse.contributors}`

//License
`## License
${userResponse.license}`


//Tests
`## Tests
${userResponse.tests}`

//Questions
`## Contact
${userResponse.contact}`


return response
}


module.exports = generateMarkdown;
