const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        this.github = github;
        super(this.name, this.id, this.email);
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }
}