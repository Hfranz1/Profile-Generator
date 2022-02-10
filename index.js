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
            message: "what is your first name?"
        },

    ]).then(function (answer) {
        console.log(answer)
    })
}
creatManager();