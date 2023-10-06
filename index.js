const fs = require("fs");
const inquirer = require("inquirer");
const { Circle, Square, Triangle } = require("./shapes");

class Svg {
  constructor() {
    this.textElement = "";
    this.shapeElement = "";
  }

  render() {
    return `<svg version = "1.1" xmlns = "http://www.w3.org/2000/svg" width = "300"
        height = "200"> 
        ${this.shapeElement}
        ${this.textElement}
        </svg>`;
  }

  setTextElement(text, color) {
    this.textElement = `<text x="150" y="100" fill="${color}" text-anchor="middle">${text}</text>`;
  }

  setShapeElement(Shape) {
    this.shapeElement = Shape.render();
    
  }
}

const questions = [
  {
    type: "input",
    name: "text",
    message: "TEXT: Enter up to (3) Characters",
  },
  {
    type: "input",
    name: "textColor",
    message: "COLOR TEXT: Enter a color keyword (OR a hexadecimal number:)",
  },
  {
    type: "input",
    name: "shapeColor",
    message: "SHAPE COLOR: Enter a color keyword (OR a hexadecimal number:)",
  },
  {
    type: "list",
    name: "Shape",
    message: "Select a shape:",
    choices: ["Circle", "Square", "Triangle"],
  },
];

function generateLogo(data) {
  // Get values from answers
  const { text, textColor, Shape, shapeColor } = data;
  // Create SVG instance
  const svg = new Svg();
  // Set text and color
  //console.log(text, textColor);
  svg.setTextElement(text, textColor);
  //svg.showtextElement();

  // Create shape instance
  let shapeElement;
  if (Shape === 'Circle') {
      shapeElement = new Circle();
  } else if (Shape === 'Square') {
      shapeElement = new Square();
  } else {
      shapeElement = new Triangle();
  }

  // Set shape color
  shapeElement.setColor(shapeColor);

  // Set shape on SVG
  svg.setShapeElement(shapeElement);


  // Render SVG code
  const svgCode = svg.render();
  // Write SVG file
  fs.writeFileSync('logo.svg', svgCode);
   // Log message
    console.log('Generated logo.svg');
}

function writeToFile(fileName, data) {
  var content = generateLogo(data);
//   fs.writeFile(fileName, content, function (error) {
//     if (error) {
//       return console.log(error);
//     }
//     console.log("Generated logo.svg");
//   });
}

function init() {
  inquirer.prompt(questions).then(function (data) {
    var fileName = "logo.svg";
    writeToFile(fileName, data);
  });
}

init();
