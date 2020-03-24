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


//Still need Table of Contents 
// License ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"], Questions, Instructions


.then(function({ username }) {
    const api2 = require("./api.js");
    const name = api2.getUser(`${username}`);
    axios.get(name)
    .then(data => {
        console.log(data.data.login);
        console.log(data.data.avatar_url);
        console.log(data.data.email);

        const getResults = [
            `Project name: ${projName}"\n"
             GitHub Name: ${data.data.login},
             ${data.data.avatar_url}
             Email: ${this.email}`
       ];
       console.log(getResults)
    })
});
