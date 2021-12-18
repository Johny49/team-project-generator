const Employee = require('../lib/employee');

describe('Employee', () => {
    describe('Create new employee', () => {
        it('should create an object with name, id, and email properties if provided with valid arguments', () => {
            // test data
            const name = "Sophie"
            const id = "3492";
            const email = "sophie@company.com";

            // Create object with test properties
            const testEmployee = Test(name, id, email);

            // Assert
            expect(testEmployee.name).toEqual(name);
            expect(testEmployee.id).toEqual(id);
            expect(testEmployee.email).toEqual(email);
        });

        it('should throw an error if provided no arguments', () => {
            // wrap initializer in callback function that Jest will run
            const cb = () => new Employee();

            // Verify that an error was thrown
            expect(cb).toThrow();
        });

        it('should throw an error if name is not a non-empty string', () => {
            const cb = () => new Employee("", "3492", "sophie@company.com");
            const err = new Error("Expected parameter 'name' to be a non-empty string");
      
            expect(cb).toThrowError(err);
        });

        it('should throw an error if id is not a non-empty string', () => {
            const cb = () => new Employee("Sophie", "", "sophie@company.com");
            const err = new Error("Expected parameter 'id' to be a non-empty string");
      
            expect(cb).toThrowError(err);
        });

        it('should throw an error if id is not a non-empty string', () => {
            const cb = () => new Employee("Sophie", "3492", "");
            const err = new Error("Expected parameter 'email' to be a non-empty string");
      
            expect(cb).toThrowError(err);
        });
    });

    describe('Get Name', () => {
        it('should return the name of the employee from the object', () => {
            // test data
            const testEmployee = Employee("Sophie", 3492, "sophiescar@company.com");

            // return office number 
            const name = testManager.getName();

            // Verify that github username is returned
            expect(name).toEqual(testManager.name);
        });
    });

    describe('Get ID', () => {
        it('should return the employee ID from the object', () => {
            // test data
            const testEmployee = Employee("Sophie", "3492", "sophiescar@company.com");

            // return office number 
            const EmpId = testManager.getId();

            // Verify that github username is returned
            expect(empId).toEqual(testManager.id);
        });
    });

    describe('Get Email', () => {
        it('should return the employee email from the object', () => {
            // test data
            const testEmployee = Employee("Sophie", "3492", "sophiescar@company.com");

            // return office number 
            const email = testManager.getEmail();

            // Verify that github username is returned
            expect(email).toEqual(testManager.email);
        });
    });

    describe('Get Role', () => {
        it('should return the designated role for objects created with this class', () => {
            //test data
            const testEmployee = Employee("Sophie", "3492", "sophies@company.com");

            // return role from the object
            const role = testEmployee.getRole();

            // Verify that Engineer role is returned
            expect(role).toEqual('Employee');
        });
    });
});