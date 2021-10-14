const fs = require("fs");
const inquirer = require("inquirer");
// pull in modules
// prompt user to make a readme
// build variables into readmetemplate
// post template
// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app


function init() {
inquirer
  .prompt ([{
    type:"input",
    message: "Enter your GitHub username",
    name: "username",
  },
    {
    type:"input",
    message: "What is your name?",
    name: "legalname",
  },
  {
    type:"input",
    message: "Where are you located?",
    name: "location",
  },
  {
    type:"input",
    message: "Please briefly describe your project",
    name: "biography",
  },
  {
    type:"input",
    message: "Please enter the url for your github repository?",
    name: "linkedin",
  },
  {
    type:"input",
    message: "What technologies were used on this project?",
    name: "technologies",
    
  },
  {
    type:"input",
    message: "Tell us a fun fact?",
    name: "fact",
    
  },
  {
    type:"input",
    message: "Tell us a fun fact?",
    name: "fact",
    
  },
  {
    type:"input",
    message: "Tell us a fun fact?",
    name: "fact",
    
  },
  {
    type:"input",
    message: "Tell us a fun fact?",
    name: "fact",
    
  }])
  .then(printResponse)

function printResponse(responses){
   console.log(responses)
    fs.writeFile("README.md", readmeText, () => {
        console.log("File saved!")
  })
}    
}

init();
const readmeText = (answers) =>{
`# ${answers.title}
# ${answers.title2}
​
## Table of contents
​
- [General info](#General-Info)
- [Technologies](#Technologies)
- [Containers](#Containers)
- [Deployment](#Deployment)
- [Code Overview](#Code-Overview)
- [Summary](#Summary)
- [CSS style](#CSS-style)
- [Routing Explained](#Routing-Explained)
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
${answers.deployedRepo}
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

​
## License
​
- ${answers.license}`
}