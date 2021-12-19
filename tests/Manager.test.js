const Manager = require('../lib/manager');

describe('Manager', () => {
    describe('create Manager', () => {
        it('should create an object with name, id, email, and officeNumber properties if provided valid arguments', () => {
            // test data
            const name = "Oscar"
            const id = 6418;
            const email = "oscar@company.com";
            const officeNumber = "F437";

            // Create object with test properties
            const testManager = new Manager(name, id, email, officeNumber);

            // Assert
            expect(testManager.name).toEqual(name);
            expect(testManager.id).toEqual(id);
            expect(testManager.email).toEqual(email);
            expect(testManager.officeNumber).toEqual(officeNumber);
        });

        it('should throw an error if provided no arguments', () => {
            // wrap initializer in callback function that Jest will run
            const cb = () => new Manager();

            // Verify that an error was thrown
            expect(cb).toThrow();
        });
    });

    describe('Get office number', () => {
        it('should return the officeNumber property from the object', () => {
            // test data
            const testManager = new Manager("Oscar", 6418, "oscar@company.com", "F437");

            // return office number 
            const officeNum = testManager.getOfficeNum();

            // Verify that office number is returned
            expect(officeNum).toEqual(testManager.officeNumber);
        });
    });

    describe('Get role', () => {
        it('should return Manager as the role for objects created with this class', () => {
            // test data
            const testManager = new Manager("Oscar", 6418, "oscar@company.com", "F437");

            // return role from the object
            const role = testManager.getRole();

            // Verify that Engineer role is returned
            expect(role).toEqual('Manager');
        });
    });
});