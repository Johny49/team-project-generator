const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const generatePage = require('./src/page-template');    //?

// array to store created team member data
const teamData = [];

// ** Initial Manager creation prompt **
const promptManager = () => {
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
        },
        {
            type: 'number',
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
            const eng = new Engineer(answers.name, Number(answers.id), answers.email, answers.github);
            teamData.push(eng);
            addTeamMemberCheck();
        });
}

const buildHTML = () => {
    fs.writeFileSync('./dist/index.html', generatePage(teamData));
    console.log("Team Profile Page Created");
}

// begin with Manager function
promptManager();