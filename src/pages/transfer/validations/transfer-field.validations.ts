import {isDateAfterToday, isEmailWellFormed, isPositiveNumber, isStringValueInformed, isValidIban, isValueNotNullOrUndefined} from "@/common/validations";
import { FieldValidationResult } from "@/common/validations/validation.model";
import { INVALID_IBAN_MESSAGE, INVALID_AMOUNT_MESSAGE, INVALID_REAL_DATE_TRANSFER_MESSAGE, INVALID_EMAIL_MESSAGE } from "@/common/validations/validation.const";
import { buildValidationFailedResult, buildValidationSucceded, buildRequiredValidationFieldFailedResponse } from "@/common/validations/plain.validation.helper";



export const validateIBANField = (value: string) : FieldValidationResult=> {
  if(!isStringValueInformed(value)) {
    return buildRequiredValidationFieldFailedResponse();
  }

  if(!isValidIban(value)) {
    return buildValidationFailedResult(INVALID_IBAN_MESSAGE);
  }

  return buildValidationSucceded();
}

export const validateAccountIdField = (value : string) : FieldValidationResult => {
  if(!isStringValueInformed(value)) {
    return buildRequiredValidationFieldFailedResponse();
  }

  return buildValidationSucceded();
}

export const validateNameField = (value : string) : FieldValidationResult => {
  if(!isStringValueInformed(value)) {
    return buildRequiredValidationFieldFailedResponse();
  }

  return buildValidationSucceded();
}


export const validateAmountField = (value : number) : FieldValidationResult => {
  if(!isPositiveNumber(value)) {
    return buildValidationFailedResult(INVALID_AMOUNT_MESSAGE);
  }

  return buildValidationSucceded();
}

export const validateConceptField = (value : string) : FieldValidationResult => {
  if(!isStringValueInformed(value)){
    return buildRequiredValidationFieldFailedResponse();
  }

  return buildValidationSucceded();
}

export const validateNotesField = (_ : string) : FieldValidationResult => {
  return buildValidationSucceded();
}

export const validateRealDateTransferField = (value?: Date) : FieldValidationResult => {
  if (!isValueNotNullOrUndefined(value)) {
    return buildValidationSucceded();
  }
  if(!isDateAfterToday(value!)) {
    return buildValidationFailedResult(INVALID_REAL_DATE_TRANSFER_MESSAGE);
  }

  return buildValidationSucceded();
}

export const validateEmailField = (value : string) : FieldValidationResult => {
  if(!isStringValueInformed(value)) {
    return buildValidationSucceded();
  }

  if(value && !isEmailWellFormed(value)){
      return buildValidationFailedResult(INVALID_EMAIL_MESSAGE)
    }

  return buildValidationSucceded();
}