const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const generatePage = require('./src/page-template');

// array to store created team member data
const teamData = [];
// format for validating user email address input; adapted from https://www.w3resource.com/javascript/form/email-validation.php
const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// ** Initial Manager creation prompt **
const promptManager = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Hello team manager. What is your name?',
            validate: function (val) { 
                if (typeof val !== "string" || !val.trim().length) {
                    console.log("Name cannot be blank. Please try again.");
                    return false;
                } else return true;
            },
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your id?',
            validate: function (val) {
                if (isNaN(val) || !val.trim().length) {
                    console.log("Please enter a valid number.");
                    return false;
                } else return true;
            },
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address:',
            validate: function (val) {
                if (val.match(emailFormat)) {
                    return true;
                }
                else {
                    console.log("This is not a valid email address. Please try again.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your office number?',
            validate: function (val) { 
                if (typeof val !== "string" || !val.trim().length) {
                    console.error("Name cannot be blank. Please try again.");
                    return false;
                } else return true;
            },
        },
    ])
        .then(function (answers) {
            const mgr = new Manager(answers.name, Number(answers.id), answers.email, answers.officeNumber);
            teamData.push(mgr);
            addTeamMemberCheck();
        });
}

// ** Check to add team member or finish
const addTeamMemberCheck = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'nextAction',
            message: 'What would you like to do next?',
            choices: ['Add Engineer', 'Add Intern', 'I don\'t need to add any more team members.'],
        },
    ])
        .then(function (answers) {
            switch (answers.nextAction) {
                case 'Add Intern': return promptIntern();
                case 'Add Engineer': return promptEngineer();
                default: buildHTML();
            }
        });
}

// ** Intern creation questions **
const promptIntern = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the intern\'s name?',
            validate: function (val) { 
                if (typeof val !== "string" || !val.trim().length) {
                    console.log("Name cannot be blank. Please try again.");
                    return false;
                } else return true;
            },
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the intern\'s id?',
            validate: function (val) {
                if (isNaN(val) || !val.trim().length) {
                    console.log("Please enter a valid number.");
                    return false;
                } else return true;
            },
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the intern\'s email address?',
            validate: function (val) {
                if (val.match(emailFormat)) {
                    return true;
                }
                else {
                    console.log("This is not a valid email address. Please try again.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the intern\'s school?',
        },
    ])
        .then(function (answers) {
            const intern = new Intern(answers.name, Number(answers.id), answers.email, answers.school);
            teamData.push(intern);
            addTeamMemberCheck();
        });
}

// ** Engineer creation questions **
const promptEngineer = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the engineer\'s name?',
            validate: function (val) { 
                if (typeof val !== "string" || !val.trim().length) {
                    console.log("Name cannot be blank. Please try again.");
                    return false;
                } else return true;
            },
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the engineer\'s id?',
            validate: function (val) {
                if (isNaN(val) || !val.trim().length) {
                    console.log("Please enter a valid number.");
                    return false;
                } else return true;
            },
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the engineer\'s email address?',
            validate: function (val) {
                if (val.match(emailFormat)) {
                    return true;
                }
                else {
                    console.log("This is not a valid email address. Please try again.");
                    return false;
                }
            }
        },
        {
            type: 'inpput',
            name: 'github',
            message: 'What is the engineer\'s Github username?',
        },
    ])
        .then(function (answers) {
            const eng = new Engineer(answers.name, Number(answers.id), answers.email, answers.github);
            teamData.push(eng);
            addTeamMemberCheck();
        });
}

const buildHTML = () => {
    fs.writeFileSync('./dist/index.html', generatePage(teamData));
    console.log('\x1b[32m%s\x1b[0m', "Team Profile Page Created");
}

// begin with Manager function
promptManager();