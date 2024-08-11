class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Employee extends Person {
  constructor(name, age, role, contact) {
    super(name, age);
    this.role = role;
    this.contact = contact;
  }
  getDetails() {
    console.log("The Details of the Employee are: ");
    console.log("Name: ", this.name);
    console.log("Age: ", this.age);
    console.log("Role: ", this.role);
    console.log("Contact: ", this.contact);
  }
}

var employee = new Employee("Beron", 24, "Technology Analyst", 9949692312);
employee.getDetails();
