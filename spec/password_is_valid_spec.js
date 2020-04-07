let Check = require("../src/password_checker");

//test if password is valid
describe("passwordIsValid", function() {
  describe("validates the password", function() {
    let password = "Arya2018!";

    it("should not be empty", function() {
      expect(Check.passwordIsValid('Arya2018!')).toBeTruthy('');
    });
    it("should not be less than 8 characters", function() {
      let length = password.split('').join('').length;
      expect(length).toBeGreaterThan(8);
    });

    it("should have at least one lowercase letter", function() {
      expect(Check.passwordIsValid("Arya2018!")).toMatch(/[a-z]/);
    });

    it("should have at least one UPPERCASE letter", function() {
      expect(Check.passwordIsValid("Arya2018!")).toMatch(/[A-Z]/);
    });

    it("should have at least one digit", function() {
      expect(Check.passwordIsValid("Arya2018!")).toMatch(/[0-9]/);
    });

    // it("should have a special character", function() {
    //   expect(Check.passwordIsValid("Arya2018!")).toMatch(/[@#$%&]/);
    // });
  });
});


// // test for password is okay
// describe("passwordIsOk", function() {
//   let password = "Arya2018!";

//   it("should no be empty", function() {
//     expect(Check.passwordIsOk('')).not.toBeNull('');
//   });

//   it("should not be less than 8", function() {
//     let length = password.split('').join('').length;
//    expect(length).toBeGreaterThan(8);
//   });
// });
// //     it("returns false if password does not exist", function () {
// //         expect(Check.passwordIsOk('')).toBe(false);
// //     });

// //     it("returns true if password match conditions", function () {
// //         expect(Check.passwordIsOk("Arya2018!")).toBe(true);
// //     });
// // });