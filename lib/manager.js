const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        this.officeNumber = officeNumber;
        super(this.name, this.id, this.email);
    }

        getRole() {
            return 'Manager';
        }
}