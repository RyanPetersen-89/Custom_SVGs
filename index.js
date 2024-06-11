// These are the requirments for index.js to run the functions required to initiate the user prompts and creating the .svg file
const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./lib/questions.js');
const setShape = require('./lib/shapeChoices.js');

// function to create new svg file using inquirer response and file system
function createLogo(title, response) {
    const svg = setShape(response);
    const fileName = `./logo-files/${title}.svg`; // This will write the created file with a unique name choosen by the user to the logo-files folder
    fs.writeFile(fileName, svg, () => console.log(`Generated ${fileName}`));
}

// This initializes the program when the user calls on the node. The user will be asked questions then the application will run the createLogo funciton using responses, and catches any errors along the way
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            const { title } = response; // Extract title from response
            createLogo(title, response);
        })
        .catch(err => {
            console.log(err);
        });
}

init();