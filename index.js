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
`
}


//THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions