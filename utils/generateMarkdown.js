function generateMarkdown(response) {
  return `

  ## Title
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
  ## Github
    ${response.github}
  ## Email
    ${response.contact}`  
}
module.exports = generateMarkdown;



