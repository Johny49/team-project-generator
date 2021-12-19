class Employee {
   constructor(name, id, email) {
      // verify that name is a string and not empty
      if (typeof name !== "string" || !name.trim().length) {
         throw new Error("Expected 'name' to be a non-empty string");
      }

      // verify that id is a number and not NaN
      if (typeof id !== "number") {
            throw new Error("Expected 'id' to be a valid number");
      }

      //check that email is a string, not empty, and only contains valid characters (a-z;A-Z;0-9; special chars:  ! # $ % & ‘ * + – / = ? ^ ` . { | } ~ );
      if (typeof email !== "string" || !email.length) {
         throw new Error("Expected 'email' to be a non-empty string");
      }
      // validation format adapted from https://www.w3resource.com/javascript/form/email-validation.php
      var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!email.match(emailFormat)) {
         throw new Error("You have entered an invalid email address");
      }


      this.name = name;
      this.id = id;
      this.email = email;
   }

   getName() {
      return this.name;
   }

   getId() {
      return this.id;
   }

   getEmail() {
      return this.email;
   }

   getRole() {
      return 'Employee';
   }
}

module.exports = Employee;