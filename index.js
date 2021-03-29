const fs= require("fs");
const inquirer= require("inquirer");
inquirer.prompt([
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
])
.then(answers=>{
    console.log(answers);
    console.log(generateReadme(answers))
    fs.writeFile("output/readme.md", generateReadme(answers), function(){
        console.log("file successfully written");
    })
})

function generateReadme(answers){
return `
# ${answers.projectName}

## ${answers.desc}

## ${answers.installation}

## ${answers.license}

## ${answers.contributing}

## ${answers.questions}

## ${answers.Github}
`
}

//THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions