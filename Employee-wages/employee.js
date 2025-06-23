// Employee Payroll Application
class Employee {
  // Constructor to initialize employee details
  constructor(empId, empName) {
    this.empId = empId;
    this.empName = empName;
    this.attendance = "";
    this.dailyWage = 0;
    this.workingHours = 0; // UC3 - Adding working hours property
  }

  displayMessage() {
    console.log("Welcome to Employee Payroll Application");
  }

  // Method to mark attendance randomly
  markAttendance() {
    let attendanceType = Math.floor(Math.random() * 3); // Random attendance
    switch (attendanceType) {
      case 0:
        this.attendance = "Absent";        // UC1 - Absent
        this.workingHours = 0;
        break;
      case 1:
        this.attendance = "Part-Time";     // UC1 - Part-Time
        this.workingHours = 4;
        break;
      case 2:
        this.attendance = "Full-Time";     // UC1 - Full-Time
        this.workingHours = 8;
        break;
      default:
        break;
    }
  }

  // UC2 - Calculate daily wage based on working hours
  calculateWage() {
    const WAGE_PER_HOUR = 20;
    this.dailyWage = WAGE_PER_HOUR * this.workingHours;
  }

  // Display employee details
  displayDetails() {
    console.log(
      `Employee ID: ${this.empId}, Name: ${this.empName}, Attendance: ${this.attendance}, Working Hours: ${this.workingHours}, Daily Wage: ${this.dailyWage}`
    );
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

// Process and display each employee's data
empDetails.forEach((employee) => {
  employee.markAttendance();
  employee.calculateWage(); // UC2 + UC3 logic
  employee.displayDetails();
});
