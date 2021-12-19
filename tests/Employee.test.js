const Employee = require('../lib/employee');

describe('Employee', () => {
    describe('Create new employee', () => {
        it('should create an object with name, id, and email properties if provided with valid arguments', () => {
            // test data
            const name = "Sophie"
            const id = 3492;
            const email = "sophie@company.com";

            // Create object with test properties
            const testEmployee = new Employee(name, id, email);

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
            const cb = () => new Employee("", 3492, "sophie@company.com");
            const err = new Error("Expected 'name' to be a non-empty string");
      
            expect(cb).toThrowError(err);
        });

        it('should throw an error if id is not a valid number', () => {
            const cb = () => new Employee("Sophie", "string", "sophie@company.com");
            const err = new Error("Expected 'id' to be a valid number");
      
            expect(cb).toThrowError(err);
        });

        it('should throw an error if email is not a non-empty string', () => {
            const cb = () => new Employee("Sophie", 3492, "");
            const err = new Error("Expected 'email' to be a non-empty string");
      
            expect(cb).toThrowError(err);
        });

        it('should throw an error if email is not in valid format', () => {
            const cb = () => new Employee("Sophie", 3492, "company.com")
            
        });
    });

    describe('Get Name', () => {
        it('should return the name of the employee from the object', () => {
            // test data
            const testEmployee = new Employee("Sophie", 3492, "sophiescar@company.com");

            // return name 
            const name = testEmployee.getName();

            // Verify that name is returned
            expect(name).toEqual(testEmployee.name);
        });
    });

    describe('Get ID', () => {
        it('should return the employee ID from the object', () => {
            // test data
            const testEmployee = new Employee("Sophie", 3492, "sophiescar@company.com");

            // return id  
            const EmpId = testEmployee.getId();

            // Verify that id is returned
            expect(EmpId).toEqual(testEmployee.id);
        });
    });

    describe('Get Email', () => {
        it('should return the employee email from the object', () => {
            // test data
            const testEmployee = new Employee("Sophie", 3492, "sophiescar@company.com");

            // return email
            const email = testEmployee.getEmail();

            // Verify that email is returned
            expect(email).toEqual(testEmployee.email);
        });
    });

    describe('Get Role', () => {
        it('should return the designated role for objects created with this class', () => {
            //test data
            const testEmployee = new Employee("Sophie", 3492, "sophies@company.com");

            // return role from the object
            const role = testEmployee.getRole();

            // Verify that Engineer role is returned
            expect(role).toEqual('Employee');
        });
    });
});