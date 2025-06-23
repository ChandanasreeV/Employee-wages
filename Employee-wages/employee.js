// Employee Payroll Application
import { log } from "console";
import readline from "readline";

class Employee {
  //UC7 - Refactor the code to write class variables and methods
  static MAX_WORKING_DAYS = 20;
  static MAX_WORKING_HOURS = 100;
  static WAGE_PER_HOUR = 20;

  constructor(empId, empName) {
    this.empId = empId;
    this.empName = empName;
    this.attendance = "";
    this.dailyWage = 0;
    this.workingHours = 0;
    this.totalWage = 0;
    this.totalWorkingHours = 0;
    this.totalWorkingDays = 0;
  }

  static displayMessage() {
    console.log("Welcome to Employee Payroll Application\n");
  }

  markAttendance() {
    let attendanceType = Math.floor(Math.random() * 3);
    switch (attendanceType) {
      case 0:
        this.attendance = "Absent";
        this.workingHours = 0;
        break;
      case 1:
        this.attendance = "Part-Time";
        this.workingHours = 4;
        break;
      case 2:
        this.attendance = "Full-Time";
        this.workingHours = 8;
        break;
      default:
        break;
    }
  }

  calculateWage() {
    this.dailyWage = Employee.WAGE_PER_HOUR * this.workingHours;
    this.totalWage += this.dailyWage;
    this.totalWorkingHours += this.workingHours;
    if (this.attendance !== "Absent") {
      this.totalWorkingDays++;
    }
  }

  displayDetails(day) {
    console.log(
      `Day ${day} - Attendance: ${this.attendance}, Working Hours: ${this.workingHours}, Daily Wage: ${this.dailyWage}`
    );
  }

  displayMonthlySummary() {
    console.log(`----------------------------------------------`);
    console.log(`\n Monthly Summary for ${this.empName} (ID: ${this.empId}):`);
    console.log(`Total Working Hours: ${this.totalWorkingHours}`);
    console.log(`Total Working Days: ${this.totalWorkingDays}`);
    console.log(`Total Wage for the Month: ₹${this.totalWage}`);
    console.log();
  }

  static computeWagesForAll(employeeList) {
    employeeList.forEach((employee) => {
      console.log(`----------------------------------------------`);
      console.log(`Daily details of Employee : ${employee.empName} with ID: ${employee.empId}`);
      console.log(`----------------------------------------------`);
      let day = 1;

      while (
        day <= Employee.MAX_WORKING_DAYS &&
        employee.totalWorkingHours < Employee.MAX_WORKING_HOURS
      ) {
        employee.markAttendance();
        employee.calculateWage();
        employee.displayDetails(day);
        day++;
      }

      employee.displayMonthlySummary();
    });
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let empDetails = [];
let numberOfEmployees = 0;
let count = 0;

function askEmployeeCount() {
  rl.question("How many employees you want to add?: ", (answer) => {
    numberOfEmployees = parseInt(answer);
    askEmployeeDetails();
  });
}

function askEmployeeDetails() {
  if (count < numberOfEmployees) {
    rl.question(`Enter Employee ID for Employee ${count + 1}: `, (empId) => {
      rl.question(`Enter Employee Name for Employee ${count + 1}: `, (empName) => {
        empDetails.push(new Employee(parseInt(empId), empName));
        count++;
        askEmployeeDetails();
      });
    });
  } else {
    rl.close();
    startApplication();
  }
}

function startApplication() {
  Employee.computeWagesForAll(empDetails);
}

Employee.displayMessage();
askEmployeeCount();
