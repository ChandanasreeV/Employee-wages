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
  }

  displayMessage() {
    console.log("Welcome to Employee Payroll Application");
  }

  // Method to mark attendance randomly
  markAttendance() {
    let attendanceType = Math.floor(Math.random() * 3); // Random attendance
    switch (attendanceType) {
      case 0:
        this.attendance = "Absent";       // UC1
        this.workingHours = 0;
        break;
      case 1:
        this.attendance = "Part-Time";    // UC1
        this.workingHours = 4;
        break;
      case 2:
        this.attendance = "Full-Time";    // UC1
        this.workingHours = 8;
        break;
      default:
        break;
    }
  }

  // UC2 - Calculate daily wage based on attendance
  calculateWage() {
    const WAGE_PER_HOUR = 20;
    this.dailyWage = WAGE_PER_HOUR * this.workingHours;
    this.totalWage += this.dailyWage;               // UC4
    this.totalWorkingHours += this.workingHours;    // UC4
  }

  // UC3 - Display daily employee details
  displayDetails(day) {
    console.log(
      `Day ${day} - Employee ID: ${this.empId}, Name: ${this.empName}, Attendance: ${this.attendance}, Working Hours: ${this.workingHours}, Daily Wage: ₹${this.dailyWage}`
    );
  }

  // UC4 - Display monthly summary
  displayMonthlySummary() {
    console.log(`\nMonthly Summary for ${this.empName} (ID: ${this.empId}):`);
    console.log(`Total Working Hours: ${this.totalWorkingHours}`);
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

const Working_Days = 20; // Assuming 20 working days in a month

// Simulate monthly attendance and wage calculation
empDetails.forEach((employee) => {
  console.log(`\nDaily details of Employee: ${employee.empName}`);
  for (let day = 1; day <= Working_Days; day++) {
    employee.markAttendance();     // UC1
    employee.calculateWage();      // UC2
    employee.displayDetails(day);  // UC3
  }
  employee.displayMonthlySummary(); // UC4
});
