// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  
## Description

${data.description}


## Installation Instructions

${data.installation}


## Usage Information

${data.usage}


## Contribution Guidelines

${data.contribution}


## Test Instructions

${data.testInstructions}
`;
}

module.exports = generateMarkdown;
