// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
// TODO: Create an array of questions for user input
//////const questions = [];
const promptuser =() =>
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
      message: 'Please choose a license for your project.',
    },
  ])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

  fs.writeFile(fileName, data, (err) =>
  err ? console.error(err) : console.log('Success!'));
};

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
