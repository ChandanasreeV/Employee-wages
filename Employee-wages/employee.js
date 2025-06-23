// Employee Payroll Application
class Employee {
  // Constructor to initialize employee details
  constructor(empId, empName) {
    this.empId = empId;
    this.empName = empName;
    this.attendance = "";
    this.dailyWage = 0;
    this.workingHours = 0; // UC3 - Adding working hours property
    // UC4 - Monthly Wage Tracking
    this.totalWage = 0; // Total wage for the month
    this.totalWorkingHours = 0; // Total working hours for the month
    this.totalWorkingDays = 0; // Total working days for the month
  }

  displayMessage() {
    console.log("Welcome to Employee Payroll Application");
  }

  // Method to mark attendance randomly
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

  // UC2 - For calculating daily wage based on attendance
  calculateWage() {
    const WAGE_PER_HOUR = 20;
    this.dailyWage = WAGE_PER_HOUR * this.workingHours;
    this.totalWage += this.dailyWage;
    this.totalWorkingHours += this.workingHours;
    if (this.attendance !== "Absent") {
      this.totalWorkingDays++;
    }
  }

  // Method to display employee details
  displayDetails(day) {
    console.log(
      `Day ${day} - Attendance: ${this.attendance}, Working Hours: ${this.workingHours}, Daily Wage: ${this.dailyWage}`
    );
  }

  // UC4 - Display monthly summary
  displayMonthlySummary() {
    console.log(`\nMonthly Summary for ${this.empName} (ID: ${this.empId}):`);
    console.log(`Total Working Hours: ${this.totalWorkingHours}`);
    console.log(`Total Working Days: ${this.totalWorkingDays}`);
    console.log(`Total Wage for the Month: ₹${this.totalWage}`);
    console.log(`----------------------------------------------`);
  }
}

// Display welcome message
const employee = new Employee();
employee.displayMessage();

// Create employee objects
let empDetails = [
  new Employee(11, "Chandana"),
  new Employee(41, "Sree"),
  new Employee(12, "Sunaina"),
];

const MAX_WORKING_DAYS = 20;
const MAX_WORKING_HOURS = 100;

// Process each employee
empDetails.forEach((employee) => {
  console.log(`Daily details of Employee: ${employee.empName} with ID: ${employee.empId}`);
  let day = 1;

  while (day <= MAX_WORKING_DAYS && employee.totalWorkingHours < MAX_WORKING_HOURS) {
    employee.markAttendance();      // UC1
    employee.calculateWage();       // UC2
    employee.displayDetails(day);   // UC3
    day++;
  }

  employee.displayMonthlySummary(); // UC4
  console.log("--------------------------------------------------");
});
