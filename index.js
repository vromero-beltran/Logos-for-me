const filesytem = require('fs');
const inquirer = require('inquirer'); 
const { Circle, Square, Triangle } = require('./shapes');

class Svg {
    constructor() {
        this.textElement = ''
        this.shapeElement = ''
    };

    render (){
        return `<svg version = "1.1" xmlns = "http://www.w3.org/2000/svg" width = "300"
        height = "200"> ${this.shapeElement}${this.textElement}</svg>`
    };

    setTextElement(text, color) {
        this.textElement = `<text x="150" y="100" fill="${color}" text-anchor="middle">${text}</text>`
    };

    setShapeElement(shape) {
        this.shapeElement = shape.render()
    };
};

const questions = [
    {
        type: "input",
        name: 'text',
        message:"TEXT: Enter up to (3) Characters",
    },
    {
        type: "input",
        name: "text-color",
        message:'COLOR TEXT: Enter a color keyword (OR a hexadecimal number:)',
    },
    {
        type: "input",
        name: "shape-color",
        message:"SHAPE COLOR: Enter a color keyword (OR a hexadecimal number:)",
    },
    {
        type: "list",
        name: "pixal-image",
        message: "Select a shape:",
        choices: ["Circle", "Square", "Triangle"],
    },
];

inquirer.prompt([...questions])
    .then((answers)=>{
        console.log(`Answers are as follows:\n${JSON.stringify(answers)}`);
});

