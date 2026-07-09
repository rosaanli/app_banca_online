import { REQUIRED_FIELD_MESSAGE } from "@/common/validations/validation.const";
import { validateForm } from "./login.validation";
import { Credentials } from "./login.vm";

describe('Login Validation', () => {
  it('should validate when both fields are filled', () => {
    // Arrange
    const myCredentials : Credentials = {
      user: "Angelica",
      password: "Angelica"
    };

    //act
    const result = validateForm(myCredentials);

    //assert
    expect(result.succeeded).toBeTruthy();
  })

    it("should error when user is empty", () => {
      // Arrange
      const myCredentials : Credentials = {
        user: "",
        password: "Angelica",
      };

      //act
      const result = validateForm(myCredentials);

      //assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errors.user).toBe(REQUIRED_FIELD_MESSAGE);
    });

    it("should error when password is empty", () => {
      // Arrange
      const myCredentials : Credentials = {
        user: "Angelica",
        password: "",
      };

      //act
      const result = validateForm(myCredentials);

      //assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errors.password).toBe(REQUIRED_FIELD_MESSAGE);
    });
})