const inquirer = require('inquirer');
const fs = require('fs');
// Imports the shapes classes from the lib
const { Triangle, Circle, Square } = require('./Develop/lib/shapes');

const questions = [
  {
    type: 'list',
    name: 'shape',
    message: 'Select a shape for the logo:',
    choices: ['circle', 'rectangle', 'triangle'],
  },
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to 3 characters for the logo:',
  },
  {
    type: 'input',
    name: 'logoTextColor',
    message: 'Enter a color for the text that is displayed on the logo (color name or hex value):',
  },
  {
    type: 'input',
    name: 'logoColor',
    message: 'Enter a color for the logo',
  }
];

function writeToFile(folderName, fileName, data) {
  const userFileName = `${fileName}-logo.svg`;
  const filePath = `${folderName}/${userFileName}`;
  fs.writeFile(filePath, data, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Your logo has been created.');
    }
  });
}

function init() {
  // prompts the user with questions via inquirer
  inquirer.prompt(questions).then((answers) => {
    const logoText = answers.text;
    const logoTextColor = answers.logoTextColor;
    const logoShape = answers.shape;
    const logoColor = answers.logoColor;

    let shape;

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
        console.log('Invalid shape');
        return;
    }

    const svgLogo = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">${shape.render()} <text x="150" y="125" font-size="60" text-anchor="middle" fill="${logoTextColor}">${logoText}</text></svg>`;
    writeToFile('examples', logoText, svgLogo);
  });
}

init();
module.exports = writeToFile;
