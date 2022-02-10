//Link to create HTML
const generateHTML = require('.src/generateHTML.js');

//required packages
const inquirer = require('inquirer')
const fs = require('fs');

//Files being pulled from
const Manager = require('./lib/Manager.js');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

//Arrays for employee types
const newTeam = [];

//init function
//function init() {
//    console.log('Please answer a few question about your manager to start generating profiles for your employees, we will start with your mannager.')
//    creatManager();
//}

//team function
function creatManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "what is your manager's name?",
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
            name: 'managerID',
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
            name: 'managerEmail',
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
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is your assigned office number?",
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log('Please enter your assigned office number')
                    return false;
                } else {
                    return true;
                }
            }
        },
    ]).then(addNewEmployees => {
        const { managerName, managerID, managerEmail, officeNumber } = addNewEmployees;
        const mgmt = new Manager(managerName, managerID, managerEmail, officeNumber)
        newTeam.push(mgmt)
        console.log(mgmt);
    })
};
creatManager()
    .then(createEmployee)

console.log("!!!!!!!!!!!!")
console.log(newTeam);

//Add employee
function createEmployee() {
    return inquirer.prompt([
        {
            type: "list",
            name: 'employeeRole',
            message: "Select employee role",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What is the employee's name",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter a valid name");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter employee ID",
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log("Enter valid employee ID")
                    return false;
                } else {
                    return true;
                }
            }
        };
    ])
}