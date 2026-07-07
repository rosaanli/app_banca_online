import { FormValidationResult, TransferVm } from "../transfer.vm";
import { validateAccountIdField, validateAmountField, validateConceptField, validateEmailField, validateIBANField, validateNameField, validateNotesField, validateRealDateTransferField } from "./transfer-field.validations";


export const validateForm = (transfer : TransferVm) : FormValidationResult => {
  const fieldValidationResult = [
    validateAccountIdField(transfer.accountId),
    validateIBANField(transfer.iban),
    validateNameField(transfer.name),
    validateAmountField(transfer.amount),
    validateConceptField(transfer.concept),
    validateNotesField(transfer.notes),
    validateRealDateTransferField(transfer.realDateTransfer),
    validateEmailField(transfer.email)
  ]

  return{
    succeeded: fieldValidationResult.every((f) => f.succeeded),
    errors: {
      accountId: fieldValidationResult[0].errorMessage ?? "",
      iban: fieldValidationResult[1].errorMessage ?? "",
      name: fieldValidationResult[2].errorMessage ?? "",
      amount: fieldValidationResult[3].errorMessage ?? "",
      concept: fieldValidationResult[4].errorMessage ?? "",
      notes: fieldValidationResult[5].errorMessage ?? "",
      realDateTransfer: fieldValidationResult[6].errorMessage ?? "",
      email: fieldValidationResult[7].errorMessage ?? "",
      dateTransfer: "" ,
    }
  }
};