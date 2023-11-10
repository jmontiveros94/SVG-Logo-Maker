const fs = require('fs');
const inquirer = require('inquirer');
const { buildSvg } = require('svg-builder');

async function generateLogo() {
  try {
    // Prompt the user for input
    const userInput = await inquirer.prompt([
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
        name: 'fileName',
        message: 'Enter the filename for the SVG:',
        default: 'logo.svg',
      },
    ]);

    // Default colors
    const textColor = 'white';
    const shapeColor = 'green';

    // Build the SVG content
    const svgContent = buildSvg({
      text: userInput.text,
      textColor,
      shape: userInput.shape,
      shapeColor,
    });

    // Save the SVG to a file
    fs.writeFileSync(userInput.fileName, svgContent);

    console.log(`Logo successfully generated and saved to ${userInput.fileName}`);
  } catch (error) {
    console.error('Error generating logo:', error);
  }
}

// Run the application
generateLogo();
