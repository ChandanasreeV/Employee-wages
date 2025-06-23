// Employee Payroll Application
import readline from "readline";

class Employee {
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

  calculateWage(wagePerHour) {
    this.dailyWage = wagePerHour * this.workingHours;
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

  displayMonthlySummary(companyName) {
    console.log(`----------------------------------------------`);
    console.log(`\n Monthly Summary for ${this.empName} (ID: ${this.empId}) at ${companyName} Company:`);
    console.log(`Total Working Hours: ${this.totalWorkingHours}`);
    console.log(`Total Working Days: ${this.totalWorkingDays}`);
    console.log(`Total Wage for the Month: ₹${this.totalWage}`);
    console.log();
  }

  static computeWagesForAll(employeeList, companyName, wagePerHour, maxWorkingDays, maxWorkingHours) {
    console.log(`\nCalculating wages for company:  ${companyName}\n`);

    employeeList.forEach((employee) => {
      console.log(`----------------------------------------------`);
      console.log(`Daily details of Employee : ${employee.empName} with ID: ${employee.empId}`);
      console.log(`----------------------------------------------`);
      let day = 1;

      while (
        day <= maxWorkingDays &&
        employee.totalWorkingHours < maxWorkingHours
      ) {
        employee.markAttendance();
        employee.calculateWage(wagePerHour);
        employee.displayDetails(day);
        day++;
      }

      employee.displayMonthlySummary(companyName);
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
let companyName = "";
let wagePerHour = 0;
let maxWorkingDays = 0;
let maxWorkingHours = 0;

function askCompanyDetails() {
  rl.question("Enter Company Name: ", (name) => {
    companyName = name;
    console.log(`Welcome to ${companyName} Employee Payroll Application\n`);
    rl.question("Enter wage per hour: ", (wage) => {
      wagePerHour = parseInt(wage);
      rl.question("Enter Max Working Days: ", (days) => {
        maxWorkingDays = parseInt(days);
        rl.question("Enter Max Working Hours: ", (hours) => {
          maxWorkingHours = parseInt(hours);
          askEmployeeCount();
        });
      });
    });
  });
}

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
  Employee.computeWagesForAll(empDetails, companyName, wagePerHour, maxWorkingDays, maxWorkingHours);
}

Employee.displayMessage();
askCompanyDetails();
