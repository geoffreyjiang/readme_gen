function generateMarkdown(response) {
  return `

  ${response.title}

  ## Table of Contents
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contribution](#contribution)
    - [Tests](#tests)
    - [Questions](#questions)
    
  ## Description
      ${response.description}
  ## Installation:
    ${response.installation}
  ## Usage:
    ${response.usage}
  ## Tests
    ${response.tests}
  ## Contributors
    ${response.contributors}  
  ## License
    ${response.license}
  ## Contact
    ${response.contact}`
}
module.exports = generateMarkdown;



