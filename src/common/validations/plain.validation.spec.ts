import {isDateAfterToday, isEmailWellFormed, isPositiveNumber, isStringValueInformed, isValidIban, isValueNotNullOrUndefined} from './plain.validations';

describe("Plain Validations", () => {
  describe("isValueNotNullOrUndefined specs", () => {
    it("should return true when value is not null or undefined", () => {
      // Arrange
      const value = "test";
      // Act
      const result = isValueNotNullOrUndefined(value);
      // Assert
      expect(result).toBeTruthy();
      });
    it("should return false when value is null", () => {
      // Arrange
      const value = null;
      // Act
      const result = isValueNotNullOrUndefined(value);
      // Assert
      expect(result).toBeFalsy();
      });
    it("should return false when value is undefined", () => {
      // Arrange
      const value = undefined;
      // Act
      const result = isValueNotNullOrUndefined(value);
      // Assert
      expect(result).toBeFalsy();
    });
  });

  describe("isValidIban", () => {
    it("should return true for valid IBAN", () => {
      //arrange
      const validIban = "GB82WEST12345698765432";
      //act
      const result = isValidIban(validIban);
      //assert
      expect(result).toBeTruthy();
    });
    it("should return true when iban is formatted with dashes is valid", () => {
      // Arrange
      const iban = "ES91-2100-0418-4502-0005-1332";
      // Act
      const result = isValidIban(iban);
      // Assert
      expect(result).toBeTruthy();
    });
    it("should return true when iban is formatted with no spaces is valid", () => {
      // Arrange
      const iban = "ES9121000418450200051332";
      // Act
      const result = isValidIban(iban);
      // Assert
      expect(result).toBeTruthy();
    });
    it("should return false when iban is invalid", () => {
      // Arrange
      const iban = "ES91 2100 0418 4502 0005 1333";
      // Act
      const result = isValidIban(iban);
      // Assert
      expect(result).toBeFalsy();
    });
    it("should return false when iban is empty", () => {
      // Arrange
      const iban = "";
      // Act
      const result = isValidIban(iban);
      // Assert
      expect(result).toBeFalsy();
    });
  });

  describe("is positive number", () => {
    it("Should return true if the number is bigger than zero", () => {
      //arrange
      const amount = 10;
      //act
      const result = isPositiveNumber(amount);
      //assert
      expect(result).toBeTruthy();
    });

    it("Should return false if the number is not bigger than zero", () => {
      //arrange
      const amount = -5;
      //act
      const result = isPositiveNumber(amount);
      //assert
      expect(result).toBeFalsy();
    });

    it("Should return false if the number is not bigger than zero", () => {
      //arrange
      const amount = 0;
      //act
      const result = isPositiveNumber(amount);
      //assert
      expect(result).toBeFalsy();
    });
  });

  describe("is date after today", () => {
    it("Should return true if the date is after the current date", () => {
      //arrange
      const date = new Date();
      date.setDate(date.getDate() + 1);
      //act
      const result = isDateAfterToday(date);
      //assert
      expect(result).toBeTruthy();
    });

    it("Should return false if the date is not after the current date", () => {
      //arrange
      const date = new Date();
      date.setDate(date.getDate() - 1);
      //act
      const result = isDateAfterToday(date);
      //assert
      expect(result).toBeFalsy();
    });
  });

  describe("is email well formed", () => {
    it("Should return true if the email is well formed", () => {
      //arrange
      const email = "user@example.com";
      //act
      const result = isEmailWellFormed(email);
      //assert
      expect(result).toBeTruthy();
    });

    it("Should return false if the email is not well formed", () => {
      //arrange
      const email = "userexample.com";
      //act
      const result = isEmailWellFormed(email);
      //assert
      expect(result).toBeFalsy();
    });
  });

  describe("is string value informed", () => {
    it("Should return true if the string value is informed", () => {
      //arrange
      const value = "infromed";
      //act
      const result = isStringValueInformed(value);
      //assert
      expect(result).toBeTruthy();
    });

    it("Should return false if the string value is not informed", () => {
      //arrange
      const value = "";
      //act
      const result = isStringValueInformed(value);
      //assert
      expect(result).toBeFalsy();
    });
  });
});