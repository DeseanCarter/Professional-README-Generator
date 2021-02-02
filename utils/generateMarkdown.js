// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let x;
  switch (license.toString()) {
    case 'None':
      x = "";
      break;
    case 'CC0 1.0 Universal':
      x = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'LGPL':
      x = '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)';
      break;
      case 'MIT':
      x = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'Apache License, Version 2.0':
      x = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'Boost':
      x = '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
      break;      
  }
  return x;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let x;
  switch (license.toString()) {
    case 'None':
      x = "";
      break;
    case 'CC0 1.0 Universal':
      x = 'Full license information can be found here: [License: CC0-1.0](http://creativecommons.org/publicdomain/zero/1.0/)';
      break;
    case 'LGPL':
      x = 'Full license information can be found here: [License: LGPL v3](https://www.gnu.org/licenses/lgpl-3.0)';
      break;
      case 'MIT':
      x = 'Full license information can be found here: [License: MIT](https://www.opensource.org/licenses/MIT)';
      break;
    case 'Apache License, Version 2.0':
      x = 'Full license information can be found here: [License](https://www.opensource.org/licenses/Apache-2.0)';
      break;
    case 'Boost':
      x = 'Full license information can be found here: [License](https://www.boost.org/LICENSE_1_0.txt)';
      break;      
  }
  return x;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let x;
  switch (license.toString()) {
    case 'CC0 1.0 Universal':
      x = "This work is covered under the CC0 1.0 Universal license.";
      break;
    case 'LGPL': "This work is covered under the GNU Lesser General Public License."
      x = "This work is covered under the GNU Lesser General Public License.";
      break;
    case 'MIT':
      x = 'This work is covered under the MIT License.';
      break;
    case 'Apache License, Version 2.0':
      x = 'This work is covered under the Licensed under the Apache License, Version 2.0';
      break;
    case 'Boost':
      x = 'This work is covered under the Boost Software License - Version 1.0';
      break;      
  }
  return x;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
# Description
${data.description}
# Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
# Installation
${data.installation}
# Usage
${data.usage}
# License
${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}
# Contributing
${data.contributing}
# Tests
${data.tests}
# Questions
${data.questions}
`;
}

module.exports = generateMarkdown;
