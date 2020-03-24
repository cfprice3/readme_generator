// declaring const fs for the writeTo function
const fs = require("fs");

// declaring const for axios api call to git hub
const axios = require("axios");

// declaring const for npm inquirer for prompted questions
const questions = require("inquirer");

// prompts requiring user input to populate later variables
questions
  .prompt([{
    type: "input",
    message: "Enter your GitHub username:",
    name: "username"
  },

  {
    type: "input",
    message: "What is your e-mail:",
    name: "email"
  },

  {
    type: "input",
    message: "What is your Project name:",
    name: "projName"
  },

  {
    type: "input",
    message: "Describe your Project:",
    name: "description"
  },

  {
    type: "input",
    message: "Explain how to run Tests for project",
    name: "test"
  },

  {
    type: "input",
    message: "Explain how to Contribute to the project",
    name: "contrib"
  }
])

//Still need Table of Contents, Installation, Usage, 
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
