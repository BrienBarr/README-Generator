const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Write a description of your project:',
        name: 'description'
    },
    {
        type: 'input',
        message: 'How do you install this project?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'What is the usage information for this project?',
        name: 'usage'
    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.error(err) : console.log('File written successfully!'));
}

// function to initialize program
function init() {

    inquirer
    .prompt(
        questions
    )
    .then((data) => {
        fileName = 'README.md';
        writeToFile(fileName, generateMarkdown(data));
    })
}

// function call to initialize program
init();
