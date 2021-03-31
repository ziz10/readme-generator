const generateMarkdown= require("./utils/generateMarkdown")
const fs= require("fs");
const inquirer= require("inquirer");
// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        message: "What is the name of the project?",
        name: "projectName"
    },
    {
        type:"input",
        message:"project description",
        name: "desc"
    },
    {
        type:"input",
        message: "what are the installation instructions?",
        name:"installation"
    },
    {
        type:"input",
        message:"what is the usage of the app?",
        name:"usage"
    },
    {
        type: "list",
        name: "license",
        message: "Chose the appropriate license for this project: ",
        choices: [
            "Apache",
            "Academic",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Open"
        ]
    },
    {
        type: "input",
        name: "contributing",
        message: "Who are the contributors of this projects?"
    },
    {
        type: "input",
        message: "Any questions?",
        name: "questions"
    },
    {
        type: "input",
        message: "What is your github username?",
        name: "Github"
    },
    {
        type:"input",
        message: "What is your email address",
        name: "email"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function(){
        console.log("file successfully written");
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers=>{
        console.log(answers);
        writeToFile("output/readme.md", answers)
        
    })
}

// Function call to initialize app
init();





//THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions