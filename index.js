//Link to create HTML
const generateHTML = require('.src/generateHTML');

//required packages
const inquirer = require('inquirer')
const fs = require('fs');

//Files being pulled from
const Manager = require('./lib/Manager.js');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

//Arrays for employee types
const managerArray = [];
const internArray = [];
const engineerArray = [];

//init function
function init() {
    console.log('Please answer a few question about your manager to start generating profiles for your employees, we will start with your mannager.')
    creatManager();
}

//team function
function creatManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "firstName",
            message: "what is your first name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter manager's name.")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your ID number?",
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log("Please enter valid ID number")
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your email?",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log('Please enter valid email')
                    return false;
                }
            }
        },

    ]).then(function (answer) {
        console.log(answer)
    })
}
creatManager();