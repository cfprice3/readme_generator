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
    // console.log(answers)

// Axios API call to github using user name from prompt input    
    axios.get(`https://api.github.com/users/${answers.username}`)
        .then(function (response) {
            // console.log(response.data);

// Declaring variables and their values to generate answers           
            let name = response.data.name;
            let profileImage = response.data.avatar_url;
            let gitUrl = response.data.html_url;
            let username = `${answers.username}`;
            let email= `${answers.email}`;
            let projName = `${answers.projName}`
            let description = `${answers.description}`;
            let test = `${answers.test}`;
            let contrib= `${answers.contrib}`;
            let install = `${answers.install}`;
            let usage = `${answers.usage}`;
            let badge = `![travis build](https://img.shields.io/travis/${answers.username}/${answers.projName}.svg)`
            let license = '["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]'
            let Table = `1. Installation\n 2. Usage\n 3. License\n 4. Contributing\n 5. Tests\n 6. Questions`;
// Testing some of the variables in console
            // console.log(test, profileImage, username, name, gitUrl, email, projName, description, contrib, install)
            
            
// Declaring a variable containing all the generated answers, and styling it in markdown format            
            var markdown = `${badge}\n# **${projName}**\n\n#### *Created By ${name}, (${username})*\n#### email: ${email}\n#### git url: ${gitUrl}\n![profileavatar](${profileImage})\n\n### *Project Description:*\n${description}\n\n\n\n ## **Table of Contents**\n ${Table}\n\n\n\n### **1. Installations:**\n${install}\n\n\n### **2. Usage:**\n${usage}\n\n\n### **3. License:**\n${license}\n\n\n### **4. How you can contribute:**\n${contrib}\n\n\n### **5. Tests:**\n${test}\n\n\n### **6. Questions:**\nPlease feel free to ask or add any questions!`

// Calling fs and writeFile function to create a readme.md file with the generated template and answers.
            fs.writeFile('README.md', markdown, function (err) {
                if (err) console.log(err)
            });
        });
    });
