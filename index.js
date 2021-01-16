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
    {
        type: 'input',
        message: 'What are the contribution guidelines for this project?',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'What are the test instructions for this project?',
        name: 'testInstructions'
    },
    {
        type: 'list',
        choices: [
            "MIT license",
            "Apache License 2.0",
            "BSD 3-Clause",
            "BSD 2-Clause",
            "Common Development and Distribution License",
            "Creative Commons License",
            "Eclipse Public License",
            "GPL",
            "LGPL",
            "Mozilla Public License 2.0",
            new inquirer.Separator( "-- End of List --" )
        ],
        name: 'license'
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    }
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
