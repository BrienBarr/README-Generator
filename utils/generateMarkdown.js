// function to generate markdown for README
function generateMarkdown(data) {

  // Set the appropriate license badge according to the license type chosen by the user
  let licenseBadge = "";
  switch (data.license){
    case "MIT license": 
      licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "Apache License 2.0":
      licenseBadge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "BSD 3-Clause":
      licenseBadge = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      break;
    case "BSD 2-Clause":
      licenseBadge = "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
      break;
    case "Common Development and Distribution License":
      licenseBadge = "[![License: CDDL](https://img.shields.io/badge/License-CDDL-lightgrey.svg)](https://opensource.org/licenses/CDDL-1.0)";
      break;
    case "Creative Commons License":
      licenseBadge = "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";
      break;
    case "Eclipse Public License":
      licenseBadge = "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
      break;
    case "GPL":
      licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "LGPL":
      licenseBadge = "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
      break;
    case "Mozilla Public License 2.0":
      licenseBadge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      break;  
    default:
      licenseBadge = "";
  }

  // Return the actual data for the README file in the markdown format
  return `# ${data.title}


${licenseBadge}
<br/>
<br/>

## Table of Contents

1. [Description](#Description)
2. [Installation](#Installation)
3. [Usage](#Usage)
4. [Contributing](#Contributing)  
5. [Tests](#Tests)
6. [License](#License)
7. [Questions](#Questions)
<br/>
<br/>

## Description

${data.description}
<br/>
<br/>

## Installation

${data.installation}
<br/>
<br/>

## Usage

${data.usage}
<br/>
<br/>

## Contributing

${data.contribution}
<br/>
<br/>

## Tests

${data.testInstructions}
<br/>
<br/>

## License

${data.license}
<br/>
<br/>

## Questions

[GitHub/${data.github}](https://github.com/${data.github})<br/>
For additional questions, e-mail me at: [${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
