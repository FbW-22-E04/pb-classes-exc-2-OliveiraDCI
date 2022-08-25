"use strict";
console.clear();

class Employee {
  constructor(id, firstName, lastName, taxId, salary) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.taxId = taxId;
    this.salary = salary;
  }

  generatePaySlip() {
    return `
    Employee ID: ${this.id}\n
    Name: ${this.firstName} ${this.lastName}\n
    Tax ID: ${this.taxId}\n
    Pay: ${this.salary / 12}
        `;
  }
}

class Manager extends Employee {
  constructor(id, firstName, lastName, taxId, salary) {
    super(id, firstName, lastName, taxId, salary);
    this.managedEmployees = [];
  }
  addManagedEmployee(employee) {
    this.managedEmployees.push(employee);
    console.log(this.managedEmployees);
  }
  removeManagedEmployee(managedEmployee) {
    this.managedEmployees = this.managedEmployees.filter(
      (item) => item.id !== managedEmployee.id
    );
    console.log(this.managedEmployees);
  }
}

const manager = new Manager(1, "Alkis", "Alkisviadis", 1234, 100000);
const kirk = new Employee(2, "Kirk", "RastaMan", 2222, 800000);
const hizki = new Employee(5, "Hizki", "BigMann", 3333, 800000);

manager.addManagedEmployee(kirk);
manager.addManagedEmployee(hizki);
console.log("-------------------------------");
manager.removeManagedEmployee(kirk);
console.log("-------------------------------");
console.log("managedEmployees array:\n", manager.managedEmployees);
