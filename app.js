"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // private id: number;
        // private name: string;
        this.employees = [];
        // this.id = id;
        // this.name = n;
    }
    describe() {
        console.log(`Department: (${this.id}): ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log("Employees: " + this.employees.length);
        console.log(this.employees);
    }
}
class ITDeparment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
        this.admins = admins;
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
    }
    addEmployee(name) {
        if (name === "Max")
            return;
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
    }
    printReports() {
        console.log(this.reports);
    }
}
const ACCOUNTING_DEPARTMENT = new AccountingDepartment(2, []);
ACCOUNTING_DEPARTMENT.addReport("New report");
ACCOUNTING_DEPARTMENT.addReport("Another report");
ACCOUNTING_DEPARTMENT.addEmployee("Max");
ACCOUNTING_DEPARTMENT.addEmployee("Manu");
ACCOUNTING_DEPARTMENT.addEmployee("Thomas");
// ACCOUNTING_DEPARTMENT.printReports();
// ACCOUNTING_DEPARTMENT.printEmployeeInformation();
console.log(ACCOUNTING_DEPARTMENT);
// const IT_DEPARTMENT = new ITDeparment(2, ["Max"]);
// IT_DEPARTMENT.describe();
// IT_DEPARTMENT.addEmployee("Tatiana");
// console.log(IT_DEPARTMENT);
// const MARKETING_DEPARTMENT = new Department(1, "Marketing");
// MARKETING_DEPARTMENT.addEmployee("Max");
// MARKETING_DEPARTMENT.addEmployee("Manu");
// // MARKETING_DEPARTMENT.employees[2] = "Anna";
// MARKETING_DEPARTMENT.describe();
// MARKETING_DEPARTMENT.printEmployeeInformation();
// const MARKETING_DEPARTMENT_COPY = {
//   name: "copy",
//   describe: MARKETING_DEPARTMENT.describe
// };
// MARKETING_DEPARTMENT_COPY.describe();
// const obj1 = {
//   id: 1,
//   name: 'John',
//   age: 27
// }
//  const newObj = {
//   ...obj1
//  };
//  console.log(obj1 === newObj)
// const hobbies = ['Sports', 'Cooking']
// const [hobbie1, hobbie2] = hobbies;
// console.log(hobbies, hobbie1, hobbie2)
// const cat = {
//   name: 'tigre',
//   age: 2
// }
// const { name: firstName, age } = cat;
// console.log(firstName)
// const addNumbers = (...numbers: number[]) => numbers.reduce((a, b) => a + b);
// console.log(addNumbers(2, 3, 7, 5));
// const printOutput: (a: string | number) => void = output => console.log(output);
// const activeHobbies = ['Hiking', ...hobbies]
// console.log(activeHobbies)
// const button = document.querySelector('button')
// button?.addEventListener('click', () => {
//   console.log('click')
// })
// const userName = 'Max'
// console.log('App initialized')
// function combine(
//   input1: number | string,
//   input2: n  umber | string,
//   resultConversion: "as-number" | "as-text"
// ) {
//   let result;
//   if (
//     (typeof input1 === "number" && typeof input2 === "number") ||
//     resultConversion === "as-number"
//   ) {
//     result = +input1 + +input2;
//   } else if (typeof input1 === "string" && typeof input2 == "string") {
//     result = input1.toString() + " " + input2.toString();
//   } else {
//     console.log(
//       "ERR: Both parameters need to be of the same data type (numbers or strings)"
//     );
//   }
//   return result;
// }
// const combineAges = combine(30, 26, "as-number");
// const combineStringAges = combine("30", "26", "as-number");
// const combineNames = combine("Max", "Anna", "as-text");
// console.log(combineAges);
// console.log(combineStringAges);
// console.log(combineNames);
