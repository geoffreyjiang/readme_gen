function generateMarkdown(response) {
  return `

  ## Title
  ${response.title}

  ## Table of Contents
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Tests](#tests)
    - [License](#license)
    - [Technolgies Used](#tech)
    - [Contribution](#contribution)
    - [Github](#github)
    - [Email](#email)
    
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
  ## Programs
    ${response.tech}  
  ## Github
    ${response.github}
  ## Email
    ${response.contact}`  
}
module.exports = generateMarkdown;



