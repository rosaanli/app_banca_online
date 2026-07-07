import { TransferVm } from "../transfer.vm";
import { validateForm } from "./transfer-form.validation";
import {vi} from "vitest";
import * as transferFieldValidations from "./transfer-field.validations";


describe("transfer-form.validations.spec", () => {
  describe("validateForm", () => {
    it("should return a valid result when all fields are valid", () => {
      // Arrange
      const transfer : TransferVm= {
        accountId: "123456789",
        iban: "ES7921000813610123456789",
        name: "John Doe",
        amount: 1,
        concept: "Payment",
        notes: "",
        dateTransfer: "",
        realDateTransfer: undefined,
        email: "",
      };

      vi.spyOn(transferFieldValidations, "validateIBANField").mockReturnValue({ succeeded: true });
      vi.spyOn(transferFieldValidations, "validateNameField").mockReturnValue({ succeeded: true });
      vi.spyOn(transferFieldValidations, "validateAmountField").mockReturnValue({ succeeded: true });
      vi.spyOn(transferFieldValidations, "validateConceptField").mockReturnValue({ succeeded: true });
      vi.spyOn(transferFieldValidations, "validateNotesField").mockReturnValue({ succeeded: true });
      vi.spyOn(transferFieldValidations, "validateRealDateTransferField").mockReturnValue({ succeeded: true });
      vi.spyOn(transferFieldValidations, "validateEmailField").mockReturnValue({ succeeded: true });
      // Act
      const result = validateForm(transfer);

      // Assert
      expect(result.succeeded).toBeTruthy();
      expect(result.errors).toEqual({
         accountId: "",
         iban: "",
         name: "",
         amount: "",
         concept: "",
         notes: "",
         realDateTransfer: "",
         email: "",
         dateTransfer: "",
       });
    })

    it("should return false when validateNameFieldAmount is incorrect", () => {
    // Arrange
      const transfer: TransferVm = {
      accountId: "1",
      iban: "ES91 2100 0418 4502 0005 1332",
      name: "",
      amount: 1,
      concept: "Test",
      notes: "",
      dateTransfer: "",
      email: "",
      };
      vi.spyOn(transferFieldValidations, "validateIBANField").mockReturnValue({
      succeeded: true,
      });
      vi.spyOn(transferFieldValidations, "validateNameField").mockReturnValue({
      succeeded: false,
      errorMessage: "Error",
      });
      vi.spyOn(transferFieldValidations, "validateAmountField").mockReturnValue({
      succeeded: true,
      });
      vi.spyOn(transferFieldValidations, "validateConceptField").mockReturnValue(
      {
      succeeded: true,
      }
      );
      vi.spyOn(transferFieldValidations, "validateNotesField").mockReturnValue({
      succeeded: true,
      });
      vi.spyOn(
      transferFieldValidations,"validateRealDateTransferField").mockReturnValue({
      succeeded: true
    });
      vi.spyOn(transferFieldValidations, "validateEmailField").mockReturnValue({
      succeeded: true,
      });
      // Act
      const result = validateForm(transfer);
      // Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errors).toEqual({
      accountId: "",
      iban: "",
      name: "Error",
      amount: "",
      concept: "",
      notes: "",
      realDateTransfer: "",
      email: "",
      dateTransfer: "",
      })
    })
  })
})