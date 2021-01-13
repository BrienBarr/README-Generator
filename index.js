const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'projectName'
    }

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.error(err) : console.log('File written successfully!'));
}

// function to initialize program
function init() {
    // console.log(questions);
    inquirer
    .prompt(
        questions
    )
    .then(async (response) => {
        // await console.log(`${response.projectName}`);
        fileName = 'README.md';
        await (
            data = `
# ${response.projectName}
        `);
        // console.log(data);
        writeToFile(fileName, data);
    })
    // .then(async (response) =>
    //     fileName = "README.md",
    //     data = `
    //         # ${response.projectName}
    //     `,
    //     await (writeToFile(fileName, data)),
    // )
}

// function call to initialize program
init();
