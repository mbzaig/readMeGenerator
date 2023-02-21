
module.exports = generateMarkdown;
const license = require("../index");

// function to generate markdown for README
function generateLicenseBadges(license) {
  const badges = {
    "Apache 2.0":
      "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    "Boost 1.0":
      "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
    "BSD 3-Clause License":
      "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
    "BSD 2-Clause License":
      "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)",
    "Eclipse Public License 1.0":
      "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
    "The Hippocratic License 2.1":
      "[![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)](https://firstdonoharm.dev)",
    "The Hippocratic License 3.0":
      "[![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)](https://firstdonoharm.dev)",
    "IBM Public License Version 1.0":
      "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)",
    "ISC License (ISC)":
      "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
    "The MIT License":
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    "Mozilla Public License 2.0":
      "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
    "The Perl License":
      "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)",
  };
  return badges[license];
}
function generateLangBadges(language) {
  const badges = {
    "HTML5":
      "[(![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white))",
    "JavaScript":
      "![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)",
    "CSS3":
      "![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)",
    "Node.js":
      "![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)",
    "jQuery":
      "![jQuery](https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white)",

  };
  return badges[language];
}

function generateMarkdown(response, licenseBadgeMarkdown, LangbadgeMarkdown) {
  return `# Project Title: ${response.title}
  ${licenseBadgeMarkdown}
## Project Description: 
${response.description}
## Table of Contents: 
- [Installation](#installation)
- [Usage](#usage)
- [Langugages](#Languages)
- [Licensing](#License)
- [Contributions](#contributing-to-this-repo)
- [Tests](#testing)
- [Questions](#questions)
## Installation
To install the necessary dependencies, run the following command:
${response.install}
## Usage
You can run this application using command 
${response.usage}
## Langugages
The application uses the following programming languages: ${response.LangbadgeMarkdown}
${LangbadgeMarkdown}
## License
This application is under license of ${response.license}
${licenseBadgeMarkdown}
## Contributing to this Repo
In order to contribute, please fork and create a pull request.
## Testing
To test, run the following command:
${response.testIt}
## Questions
If you have any questions about the repo, open an issue or contact me directly at ${response.email}. You can find more of my work at [My GitHub Profile](${response.github})
`;
}

module.exports = {
  generateMarkdown,
  generateLicenseBadges,
  generateLangBadges,
};