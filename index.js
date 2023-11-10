const fs = require('fs');
const inquirer = require('inquirer');
// Imports the shapesclasses from the lib
const { Triangle, Circle, Square } = require('./lib/shapes');

const userquestions = [
  {
    type: 'list',
    name: 'shape',
    message: 'Select a shape for the logo:',
    choices: ['circle', 'rectangle', 'triangle'],
  },
  {
    type: 'input',
    name: 'text',
    message: 'Enter the text for the logo:',
  },
  {
    type: 'input',
    name: 'logo-text-color',
    message: 'Enter a color for the text that is displayed on the logo (color name or hex value):',
  },
];
function writeToFile(folderName, fileName, data) {
  const userFileName = `${fileName}-logo.svg`;
  const filePath = `${folderName}/${userFileName}`;
  fs.writeFile(filePath, data, (error) => {
    if (error) {
      console.log(error);
    }
    else {
      console.log('Your logo has been created.');
    }
  });
}
function init() {
  // call to inquirer to ask the questions and store the answers
  inquirer.prompt(questions).then((answers) => {
    // store the answers in variables
    const logoText = answers['logo-text'];
    const logoTextColor = answers['logo-text-color'];
    const logoShape = answers['logo-shape'];
    const logoColor = answers['logo-color'];

    let shape;

    // Create an instance of the selected shape class
    switch (logoShape) {
      case 'circle':
        shape = new Circle(logoColor);
        break;
      case 'square':
        shape = new Square(logoColor);
        break;
      case 'triangle':
        shape = new Triangle(logoColor);
        break;
      default:
        console.log('Please choose another shape.');
        return;
    }

    const svgLogo = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">${shape.render()} <text x="150" y="125" font-size="60" text-anchor="middle" fill="${logoTextColor}">${logoText}</text></svg>`;
    writeToFile('output', logoText, svgLogo);
  });
}
init()
// Run the application
module.exports = writeToFile;