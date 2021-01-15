// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Table of Contents

1. [Description](##Description)
2. [Installation](##Installation)
3. [Usage](##Usage)
4. [Contributing](##Contributing)  
5. [Tests](##Tests)
6. [License](##License)


## Description

${data.description}


## Installation

${data.installation}


## Usage

${data.usage}


## Contributing

${data.contribution}


## Tests

${data.testInstructions}


## License

${data.license}
`;
}

module.exports = generateMarkdown;
