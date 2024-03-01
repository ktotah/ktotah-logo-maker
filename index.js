const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./lib/shapes');

// Main function to run the application
async function runApplication() {
    try {
        const answers = await inquirer.prompt([
            // Question for user input on logo shape
            {
                type: 'list',
                name: 'shape',
                message: 'Choose a shape:',
                choices: ['Circle', 'Triangle', 'Square']
            },
            //  Questions for user input on logo text
            {
                type: 'input',
                name: 'text',
                message: 'Enter up to three characters for the logo:',
                validate: input => input.length <=3 ? true : 'Text must be up to three characters.'
            },
            // Question for user input on logo text color
            {
                type: 'input',
                name: 'textColor',
                message: 'Enter the text color (keyword or hex):'
            },
            // Question for user input on logo shape color
            {
                type: 'input',
                name: 'color',
                message: 'Enter the shape color (keyword or hex):'
            }
        ]);

        let shape;
        switch (answers.shape) {
            case 'Circle':
                shape = new Circle(answers.color, answers.textColor, answers.text);
                break;
            case 'Triangle':
                shape = new Triangle(answers.color, answers.textColor, answers.text);
                break;  
            case 'Square':
                shape = new Square(answers.color, answers.textColor, answers.text);
                break;
        }

        const svgContent = shape.render();
        fs.writeFileSync('logo.svg', svgContent);
        console.log('Generated logo.svg successfully.');
    } catch (error) {
        console.error('An error occured:', error.message);
    }
}

// Execute the application
runApplication();