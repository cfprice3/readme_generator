// const questions = [

//     type: "input",
//     message: "What is your GitHub username",

// ];

// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();



const fs = require("fs");
const axios = require("axios");
const questions = require("inquirer");

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
        
    })


          fs.writeFile("README.md", repoNamesStr, function(err) {
        if (err) {
          throw err;
        });

//   .then(function({ username }) {
//     const queryUrl = `https://api.github.com/users/${username}`;

//     axios.get(queryUrl)
//     .then(data => {
//         console.log(data.data.login);
//         console.log(data.data.avatar_url);
//         console.log(data.data.email);
        
//     })
    
    
    // axios.get(queryUrl).then(function(res) {
    //   const repoNames = res.data.map(function(repo) {
    //     return repo.name;
    //   });

    //   const repoNamesStr = repoNames.join("\n");

    //   fs.writeFile("README.md", repoNamesStr, function(err) {
    //     if (err) {
    //       throw err;
    //     }

    //     console.log(`Saved ${repoNames.length} repos`);
    //   });
    // });
  });
