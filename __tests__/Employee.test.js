const Employee = require("../lib/employee");

describe("Employee class", () => {
  it("should take an employee name as a parameter", () => {
    const testName = "David";
    expect(new Employee("David", 1, "david@email.com").name).toBe(testName);
  });

  describe("getName", () => {
    it("should return the name passed in as a parameter", () => {
      const testName = "David";
      const newEmployee = new Employee("David", 1, "david@email.com");
      expect(newEmployee.getName()).toBe(testName);
    });
  });
  describe("getId", () => {
    it("should return the id passed in as parameter", () => {
      const testId = 1;
      const newEmployee = new Employee("David", 1, "david@email.com");
      expect(newEmployee.getId()).toBe(testId);
    });
  });
  describe("getEmail", () => {
    it("should return the Email passed in as a parameter", () => {
      const testEmail = "david@email.com";
      const newEmployee = new Employee("David", 1, "david@email.com");
      expect(newEmployee.getEmail()).toBe(testEmail);
    });
  });
  describe("getRole", () => {
    it("should return the role 'Employee'", () => {
      const newEmployee = new Employee("David", 1, "david@email.com");
      expect(newEmployee.getRole()).toBe("Employee");
    });
  });
});