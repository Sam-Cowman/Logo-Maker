import('inquirer').then(({ default: inquirer }) => { // Destructure and access the default export
    // Rest of the code that uses Inquirer
    const fs = require('fs');
    const { Triangle, Circle, Square } = require('./lib/shapes');

    // Function to generate SVG based on user input
    function generateLogo(text, textColor, shape, shapeColor) {
        // Define SVG width and height
        const svgWidth = 600; // Adjust as needed
        const svgHeight = 400; // Adjust as needed
    
        // Calculate shape position based on SVG dimensions
        const shapeSize = Math.min(svgWidth, svgHeight) * 0.8; // Adjust the size of the shape (e.g., 80% of the minimum dimension)
        const shapeX = svgWidth / 2; // Center horizontally
        const shapeY = svgHeight / 2; // Center vertically
    
        // Create the selected shape object with the specified color
        let selectedShape;
        switch (shape) {
            case 'Triangle':
                selectedShape = new Triangle(shapeColor);
                break;
            case 'Circle':
                selectedShape = new Circle(shapeColor);
                break;
            case 'Square':
                selectedShape = new Square(shapeColor);
                break;
            default:
                console.error('Invalid shape');
                return;
        }
    
        // Generate SVG content
        const svgContent = `
            <svg width="${svgWidth}" height="${svgHeight}" xmlns="http://www.w3.org/2000/svg">
                ${selectedShape.render(shapeX, shapeY, shapeSize)} // Pass shape position and size parameters
                <text x="${shapeX}" y="${shapeY}" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="24" font-weight="bold">${text}</text>
            </svg>
        `;
    
        return svgContent;
    }
    // Prompt the user for input
    inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters for the logo:',
            validate: function(value) {
                return value.length <= 3 ? true : 'Please enter up to three characters.';
            }
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter text color (color keyword or hexadecimal number):'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape:',
            choices: ['Triangle', 'Circle', 'Square']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter shape color (color keyword or hexadecimal number):'
        }
    ]).then(answers => {
        // Generate SVG based on user input
        const svg = generateLogo(answers.text, answers.textColor, answers.shape, answers.shapeColor);

        // Save SVG to file
        fs.writeFile('logo.svg', svg, err => {
            if (err) {
                console.error('Error writing SVG file:', err);
            } else {
                console.log('Generated logo.svg');
            }
        });
    });
}).catch(error => {
    console.error('Error loading Inquirer:', error);
});