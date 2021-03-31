// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![github license](https://img.shields.io/badge/license-${license})`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `[License](#license)`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
return `This app is made under ${license}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}
${renderLicenseBadge(data.license)}

## Project description 

${data.desc}

## Table of contents

[installation](#INSTALLATION)

[usage](#USAGE)

${renderLicenseLink(data.license)}

## Installation
  
${data.installation}

## License

This project has been implemented under the license ISC

${data.license}
  
## Contribution

There is no contributor to this project

${data.contributing}

## Questions

Feel free to reach out to me at ${data.email} should you have any questions

${data.questions}
  
## Github

Github link github.com/ziz1o

${data.Github}
  
`;
}

module.exports = generateMarkdown;
