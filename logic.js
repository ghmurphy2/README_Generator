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
    message: "Tell us about yourself",
    name: "biography",
  },
  {
    type:"input",
    message: "What is your LinkedIn url?",
    name: "linkedin",
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
// const readmeText = (answers) =>
`# ${answers.title}
# S${answers.title2}
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
This project utilizes a full MERN stack in order to CRUD data and display it realtime on visualizations. 
- ${answers.name}
- Technology2
- Technology3
- Technology4
​
Deployed link: 
​${answers.deployedLink}
Landing page 
​${answers.name}
![Image](assets/landingpage.png)
​
## Technologies
​
Project is created with:
​${answers.technologies}
- [React](https://reactjs.org/)
- [React-Router](https://reacttraining.com/react-router/)
- [React-Redux](https://react-redux.js.org/)
- [Passport.js](http://www.passportjs.org/)
- [Material-UI](https://material-ui.com/)
- [JavaScript](https://www.javascript.com/)
- [Bootstrap](https://getbootstrap.com/)
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDb](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Socket.io](https://socket.io/)
- [Bcrypt.js](https://www.npmjs.com/package/bcrypt)
- [React-Chartjs-2](https://github.com/jerairrest/react-chartjs-2)
​
## Containers
​
![Image](assets/containers.png)
​
## Deployment
​
Download the repository
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
- Jane Doe
​
## License
​
- ${answers.name}