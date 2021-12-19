const Intern = require('../lib/intern');

describe('Intern', () => {
    describe('Create Intern', () => {
        it('should create an object with name, id, email, and school properties if provided valid arguments', () => {
            // test data
            const name = "Sam"
            const id = 5131;
            const email = "sam@company.com";
            const school = "State University";

            // Create object with test properties
            const testIntern = new Intern(name, id, email, school);

            // Assert
            expect(testIntern.name).toEqual(name);
            expect(testIntern.id).toEqual(id);
            expect(testIntern.email).toEqual(email);
            expect(testIntern.school).toEqual(school);
        });

        it('should throw an error if provided no arguments', () => {
            // wrap initializer in callback function that Jest will run
            const cb = () => new Intern();

            // Verify that an error was thrown
            expect(cb).toThrow();
        });
    });

    describe('Get school', () => {
        it('should return the school property from the object', () => {
            // test data
            const testIntern = new Intern("Sam", 5131, "sam@company.com", "State University");

            // return school 
            const school = testIntern.getSchool();

            // Verify that school is returned
            expect(school).toEqual(testIntern.school);
        });
    });

    describe('Get role', () => {
        it('should return Intern as the role for objects created with this class', () => {
            // test data
            const testIntern = new Intern("Sam", 5131, "sam@company.com", "State University");

            // return role from the object
            const role = testIntern.getRole();

            // Verify that Engineer role is returned
            expect(role).toEqual('Intern');
        });
    });
});