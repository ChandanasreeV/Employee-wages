// Employee  Application
class Employee {
  displayMessage() {
    console.log("Welcome to Employee Payroll Application");
  }

  // Constructor to initialize employee details
  constructor(empId, empName) {
    this.empId = empId;
    this.empName = empName;
    this.attendance = "";
  }

  // Method to mark attendance randomly
  markAttendance() {
    let isPresent = Math.floor(Math.random() * 2);
    this.attendance = isPresent ? "Present" : "Absent";
  }

  // Method to display employee details
  displayDetails() {
    console.log(
      `Employee ID: ${this.empId}, Name: ${this.empName}, Attendance: ${this.attendance}`
    );
  }
}

// Create a sample Employee object and call displayMessage
const employee = new Employee();
employee.displayMessage();

// Create employee objects
let empDetails = [
  new Employee(11, "Chandana"),
  new Employee(41, "Sree"),
  new Employee(12, "Sunaina"),
];

// Mark attendance and display details
empDetails.forEach((employee) => {
  employee.markAttendance();
  employee.displayDetails();
});
