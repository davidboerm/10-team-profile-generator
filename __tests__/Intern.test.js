const { it, expect, describe } = require("@jest/globals");
const Intern = require("../lib/intern");

describe("Intern class", () => {
  it("should take the name passed as a parameter", () => {
    const testName = "David";
    const newIntern = new Intern("David", 1, "david@email.com", "SMU");
    expect(newIntern.name).toBe(testName);
  });
  it("should take the school passed as a parameter", () => {
    const testSchool = "SMU";
    const newIntern = new Intern("David", 1, "david@email.com", "SMU");
    expect(newIntern.school).toBe(testSchool);
  });
  describe("getSchool", () => {
    it("should return the school parameter that has been passed in", () => {
      const testSchool = "SMU";
      const newIntern = new Intern("David", 1, "david@email.com", "SMU");
      expect(newIntern.getSchool()).toBe(testSchool);
    });
  });
  describe("getRole", () => {
    it("should return the role 'Intern'", () => {
      const testRole = "Intern";
      const newIntern = new Intern("David", 1, "david@email.com", "SMU");
      expect(newIntern.getRole()).toBe(testRole);
    });
  });
});
