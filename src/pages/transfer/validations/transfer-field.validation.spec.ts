import { INVALID_EMAIL_MESSAGE, INVALID_REAL_DATE_TRANSFER_MESSAGE, REQUIRED_FIELD_MESSAGE, INVALID_IBAN_MESSAGE, INVALID_AMOUNT_MESSAGE } from "@/common/validations/validation.const";
import {validateIBANField, validateAccountIdField, validateNameField, validateAmountField, validateConceptField, validateRealDateTransferField, validateEmailField} from "./transfer-field.validations";

describe("trasfer-field.validatin.spec", ()=>{


  describe("validateEmailField", () => {
    it("should return true when email is not informed", () => {
      // Arrange
      const value ="";
      //
      // Act
      const result = validateEmailField(value);
          // Assert
      expect(result.succeeded).toBeTruthy();
    });

    it("should return false when email is bad formed", () => {
      // Arrange
      const value = "jkfdk";
          // Act
      const result = validateEmailField(value);
          // Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(INVALID_EMAIL_MESSAGE);
    });

    it("should return true when email is well formed", () => {
      // Arrange
      const value = "test@email.com";
      // Act
      const result = validateEmailField(value);
      // Assert
      expect(result.succeeded).toBeTruthy();
    });
  })


  describe("validateRealDateTransferField", () => {
    it("should return true when date is not informed", () => {
      // Arrange
      const value = undefined;
      //
      // Act
      const result = validateRealDateTransferField(value);
          // Assert
      expect(result.succeeded).toBeTruthy();
    });

    it("should return false when date is before today", () => {
      // Arrange
      const value = new Date();
      value.setDate(value.getDate() - 1);
          // Act
      const result = validateRealDateTransferField(value);
          // Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(INVALID_REAL_DATE_TRANSFER_MESSAGE);
    });

    it("should return true when date is after today", () => {
      // Arrange
      const value = new Date();
      value.setDate(value.getDate() + 1);
          // Act
      const result = validateRealDateTransferField(value);
          // Assert
      expect(result.succeeded).toBeTruthy();
    });
  })

  describe("validateIBANField", ()=>{
    it("should return false when IBAN is empty", ()=>{
      // Arrange
      const value= "";
      // Act
      const result = validateIBANField(value);

      // Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(REQUIRED_FIELD_MESSAGE);
    })
    it("should return false when IBAN is not well formed", ()=>{
      // Arrange
      const value = "ES792100081361012345678";
      // Act
      const result = validateIBANField(value);
      // Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(INVALID_IBAN_MESSAGE);
    })
  })


  describe("validateNameField", () => {
    it("should return false when Name is empty", ()=> {
      // Arrange
      const value= "";
      // Act
      const result = validateNameField(value);

      // Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(REQUIRED_FIELD_MESSAGE);
    })

    it("should return true when Name is informed", ()=> {
      // Arrange
      const value= "John Doe";
      // Act
      const result = validateNameField(value);
      // Assert
      expect(result.succeeded).toBeTruthy();
    })
  })
    describe("validateAccountIdField", () => {
      it("should return false when Account ID is empty", () => {
        // Arrange
        const value = "";
        // Act
        const result = validateAccountIdField(value);

        // Assert
        expect(result.succeeded).toBeFalsy();
        expect(result.errorMessage).toEqual(REQUIRED_FIELD_MESSAGE);
      });

      it("should return true when Account ID is informed", () => {
        // Arrange
        const value = "123456789";
        // Act
        const result = validateAccountIdField(value);
        // Assert
        expect(result.succeeded).toBeTruthy();
      });
    });

  describe("validateAmountField", () => {
    it(" should return false ehen the amount is egative", () => {
      //arrange
      const value = -1;
      //act
      const result = validateAmountField(value);
      //assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(INVALID_AMOUNT_MESSAGE);
    });
    it(" should return true when the amount is positive", () => {
      //arrange
      const value = 1;
      //act
      const result = validateAmountField(value);
      //assert
      expect(result.succeeded).toBeTruthy();
    });
  });

  describe("validateConceptField", () => {
    it("should return false when concept is empty", () => {
      // Arrange
      const value = "";
      // Act
      const result = validateConceptField(value);

      // Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(REQUIRED_FIELD_MESSAGE);
    });

    it("should return true when Name is informed", () => {
      // Arrange
      const value = "John Doe";
      // Act
      const result = validateConceptField(value);
      // Assert
      expect(result.succeeded).toBeTruthy();
    });
  });
})