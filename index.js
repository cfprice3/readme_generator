// declaring const fs for the writeTo function
const fs = require("fs");

// declaring const for axios api call to git hub
const axios = require("axios");

// declaring const for npm inquirer for prompted questions
const questions = require("inquirer");

// prompts requiring user input to populate later variables
questions

// Github User Name
  .prompt([{
    type: "input",
    message: "Enter your GitHub username:",
    name: "username"
  },

// Email
  {
    type: "input",
    message: "What is your e-mail:",
    name: "email"
  },

// Project name 
  {
    type: "input",
    message: "What is your Project name:",
    name: "projName"
  },

// Project description
  {
    type: "input",
    message: "Describe your Project:",
    name: "description"
  },

// Tests  
  {
    type: "input",
    message: "Explain how to run Tests for project:",
    name: "test"
  },

// Contributions  
  {
    type: "input",
    message: "Explain how to Contribute to the project:",
    name: "contrib"
  },

// Installations  
  {
    type: "input",
    message: "Explain what installations are needed and how to install them:",
    name: "install"
  },

// Usage  
  {
    type: "input",
    message: "Explain the usage of the project:",
    name: "usage"
  }

])
//  End of prompted questions 

// Function to generate answers
.then(function (answers) {
    console.log(answers)

// Axios API call to github using user name from prompt input    
    axios.get(`https://api.github.com/users/${answers.username}`)
        .then(function (response) {
            // console.log(response.data);
        });
    });
