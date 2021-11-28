const fs = require("fs");
const inquirer = require("inquirer");
// pull in modules
// prompt user to make a readme
// build variables into readmetemplate
// post template
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}


// Function call to initialize app


function init() {
inquirer
  .prompt ([{
    type:"input",
    message: "What is your name?",
    name: "name",
  },
  {
    type:"input",
    message: "What is the name of your project?",
    name: "title",
  },
  {
    type:"input",
    message: "Please briefly describe your project",
    name: "summary",
  },
  {
    type:"input",
    message: "Please enter the url for your github repository",
    name: "repo",
  },
  {
    type:"input",
    message: "What technologies were used on this project?",
    name: "technologies",
    
  },
  {
    type:"input",
    message: "Please input the url for your deployed page",
    name: "pageLink",
    
  },
  {
    type:"input",
    message: "Please input your work email",
    name: "email",
    
  },
  {
    name: "license",
    type: "list",
    message: "Choose a license: ",
    choices: [
        "Apache",
        "Boost",
        "BSD",
        "Creative Commons",
        "Eclipse Public",
        "GNU",
        "IBM",
        "MIT",
        "Mozilla",
        "Perl"
    ]
},
  {
    type:"input",
    message: "Please input  your github username",
    name: "githubname",
    
  },
  {
    type:"input",
    message: "Please input the url for your github profile",
    name: "repo",
    
  },
  {
    type:"input",
    message: "Please briefly desribe the coding process for this project",
    name: "codeOverview",
    
  },
  {
    type:"input",
    message: "Please briefly describe the function of your application or project",
    name: "appDescription",
    
  }])
  .then(res => {
console.log(res)
printResponse(generateMark(res));
  })

}

const generateMark = (answers) =>{
  return `# ${answers.title}

## Table of contents
​
- [General info](#General-Info)
- [Technologies](#Technologies)
- [Containers](#Containers)
- [Deployment](#Deployment)
- [Code Overview](#Code-Overview)
- [Summary](#Summary)
- [CSS style](#CSS-style)
​
​
## General-Info
​
${answers.appDiscription}
​
​
Deployed link: 

​${answers.deployedLink}

Landing page 

​${answers.pageLink}

​
## Technologies
​
Project was created with:
​${answers.technologies}

## Deployment
​
Download the repository here
​
${answers.Repo}
​
## Code Overview
​
${answers.codeOverview}
​
## Summary
​
${answers.summery} 
​

​
## Authors
​
- ${answers.name}
- ${answers.email}
- ${answers.githubname}

​
## License
​
- ${answers.license}`
}
init();
function printResponse(readmeText){
   console.log(readmeText)
    fs.writeFile("README2.md", readmeText, () => {
        console.log("File saved!")
  })
}    