// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a brief description of your project: '
    },
    {
        type: 'input',
        name: 'install',
        message: 'What are the instructions for installation of your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What other information is needed for usage of your project?'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What are the guidelines for contribution to your project?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are the instructions for testing your project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license should your project be covered under?',
        choices: ['MIT','AGPL v3','GPL v3','LGPL v3','MPL 2.0','Apache 2.0']
    },
    {
        type: 'input',
        name: 'git',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,(err) => err ? console.error(err) : console.log("Success!"));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => writeToFile('README.md', generateMarkdown(answers)));
}

// Function call to initialize app
init();
