const Engineer = require('../lib/engineer');
const Employee = require('../lib/employee');

describe('Engineer', () => {
    // Test for initializing a new Engineer object
    describe('Create Engineer', () => {
        it('should create an object with name, id, email, and github properties if provided valid arguments', () => {
            // test data
            const name = "Ella"
            const id = "4587";
            const email = "ella@company.com";
            const github = "ellaCat87";

            // Create object with test properties
            const testEngineer = Engineer(name, id, email, github);

            // Assert
            expect(testEngineer.name).toEqual(name);
            expect(testEngineer.id).toEqual(id);
            expect(testEngineer.email).toEqual(email);
            expect(testEngineer.github).toEqual(github);
        });

        it('should throw an error if provided no arguments', () => {
            // wrap initializer in callback function that Jest will run
            const cb = () => new Engineer();

            // Verify that an error was thrown
            expect(cb).toThrow();
        });
    });

    describe('Get Github username', () => {
        it('should return the github property from the object', () => {
            // test data
            const testEngineer = Engineer("Ella", "4587", "ella@company.com", "ellaCat87");

            // return github username 
            const ghUsername = testEngineer.getGithub();

            // Verify that github username is returned
            expect(ghUsername).toEqual(testEngineer.github);
        });
    });

    describe('Get role', () => {
        it('should return Engineer as the role for objects created with this class', () => {
            // test data
            const testEngineer = Engineer("Ella", "4587", "ella@company.com", "ellaCat87");

            // return role from the object
            const role = testEngineer.getRole();

            // Verify that Engineer role is returned
            expect(role).toEqual('Engineer');
        });
    });
});