const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

// array to store created team members
const team = [];

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
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the intern\'s id?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the intern\'s email address?',
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the intern\'s school?',
        },
    ])
        .then(function (answers) {
            answers.role = "Intern";
            team.push(answers);
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
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the engineer\'s id?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the engineer\'s email address?',
        },
        {
            type: 'inpput',
            name: 'github',
            message: 'What is the engineer\'s Github username?',
        },
    ])
        .then(function (answers) {
            answers.role = "Engineer";
            team.push(answers);
            addTeamMemberCheck();
        });
}

const buildHTML = () => {

}

// ** Initial Manager creation prompt **
inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'Hello team manager. What is your name?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your id?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address:',
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is your office number?',
    },
])
    .then(function (answers) {
        answers.role = "Manager";
        team.push(answers);
        addTeamMemberCheck();
    });