// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const markdownGen = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
//////const questions = [];
const promptUser = () =>
inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a description of your project?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'How do you install your project?',
    },  
    {
      type: 'input',
      name: 'usage',
      message: 'Please enter project instructions for usage.',
    },
    {
      type: 'input',
      name: 'license',
      message: 'Please choose the license for your project.',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Were there any contributors to the project?.',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Please instruct how to test your project.',
    },
    {
      type: 'input',
      name: 'questions',
      message: 'How can users inquire questions about your project?',
    },
  ])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

  fs.writeFile(fileName, data, (err) =>
  err ? console.error(err) : console.log('Success!'));
};

// TODO: Create a function to initialize app
function init() {
  promptUser()
  .then((data) => writeToFile("README.md", markdownGen(data)))
  .then(() => console.log("Successfully wrote to README.md"))
  .catch((er) => console.error(err));
}

// Function call to initialize app
init();
