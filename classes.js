"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        // private id: number;
        // private name: string;
        this.employees = [];
        // this.id = id;
        // this.name = n;
        // console.log(Department.fiscalYear);
    }
    Department.createEmploye = function (name) {
        return { name: name };
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log("Employees: " + this.employees.length);
        console.log(this.employees);
    };
    Department.fiscalYear = 2020;
    return Department;
}());
// IT department
var ITDeparment = /** @class */ (function (_super) {
    __extends(ITDeparment, _super);
    function ITDeparment(id, admins) {
        var _this = _super.call(this, id, "IT") || this;
        _this.admins = admins;
        _this.admins = admins;
        return _this;
    }
    ITDeparment.prototype.describe = function () {
        console.log("IT Department ID: " + this.id);
    };
    return ITDeparment;
}(Department));
var IT_DEPARTMENT = new ITDeparment(1, []);
IT_DEPARTMENT.describe();
// Accounting department
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id, reports) {
        var _this = _super.call(this, id, "Accounting") || this;
        _this.reports = reports;
        _this.lastReport = reports[0];
        return _this;
    }
    Object.defineProperty(AccountingDepartment.prototype, "mostRecentReport", {
        get: function () {
            if (this.lastReport)
                return this.lastReport;
            throw new Error("No report found");
        },
        set: function (value) {
            if (!value)
                throw new Error("Please pass in a valid value.");
            this.addReport(value);
        },
        enumerable: false,
        configurable: true
    });
    AccountingDepartment.getInstance = function () {
        if (!AccountingDepartment.instance)
            this.instance = new AccountingDepartment(2, []);
        return this.instance;
    };
    AccountingDepartment.prototype.describe = function () {
        console.log("Accounting Department ID: " + this.id);
    };
    AccountingDepartment.prototype.addEmployee = function (name) {
        if (name === "Max")
            return;
        this.employees.push(name);
    };
    AccountingDepartment.prototype.addReport = function (text) {
        this.reports.push(text);
        this.lastReport = text;
    };
    AccountingDepartment.prototype.printReports = function () {
        console.log(this.reports);
    };
    return AccountingDepartment;
}(Department));
var ACCOUNTING_DEPARTMENT = AccountingDepartment.getInstance();
var ACCOUNTING_DEPARTMENT2 = AccountingDepartment.getInstance();
// const ACCOUNTING_DEPARTMENT = new AccountingDepartment(2, []);
ACCOUNTING_DEPARTMENT.addReport("New report");
ACCOUNTING_DEPARTMENT.addReport("Another report");
ACCOUNTING_DEPARTMENT.addReport("Yet another report");
ACCOUNTING_DEPARTMENT.addEmployee("Max");
ACCOUNTING_DEPARTMENT.addEmployee("Manu");
ACCOUNTING_DEPARTMENT.addEmployee("Thomas");
console.log(ACCOUNTING_DEPARTMENT, ACCOUNTING_DEPARTMENT2);
// ACCOUNTING_DEPARTMENT.mostRecentReport = "Last report";
// console.log(ACCOUNTING_DEPARTMENT.mostRecentReport);
// ACCOUNTING_DEPARTMENT.describe();
// const employee1 = Department.createEmploye("Max");
// console.log(employee1, Department.fiscalYear)
// ACCOUNTING_DEPARTMENT.printReports();
// ACCOUNTING_DEPARTMENT.printEmployeeInformation();
// console.log(ACCOUNTING_DEPARTMENT);
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
