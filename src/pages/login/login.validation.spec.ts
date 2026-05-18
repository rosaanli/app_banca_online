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
    expect(result.succeded).toBeTruthy();
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
      expect(result.succeded).toBeFalsy();
      expect(result.error.user).toBe("Debe informar el usuario");
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
      expect(result.succeded).toBeFalsy();
      expect(result.error.password).toBe("Debe informar la contraseña");
    });
})