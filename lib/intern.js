const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        this.school = school;
        super(this.name, this.id, this.email);
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
}