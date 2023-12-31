class Department {
  name: string;
  employees: string[] = [];

  constructor(n: string) {
    this.name = n;
  }
  describe(this: Department) {
    console.log("Department", this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}
const accounting = new Department("Accounting");

accounting.addEmployee("C.T.");
accounting.addEmployee("Dean");

accounting.describe();
accounting.printEmployeeInformation();
