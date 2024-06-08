const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./lib/questions.js');
const setShape = require('./lib/shapeChoices.js');

// function to create new svg file using inquirer response and file system
function createLogo(title, response) {
    const svg = setShape(response);
    const fileName = `./logo-files/${title}.svg`;
    fs.writeFile(fileName, svg, () => console.log(`Generated ${fileName}`));
}

// initialize, ask questions then createLogo using responses, catch any errors
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