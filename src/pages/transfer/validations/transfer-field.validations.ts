import {isDateAfterToday, isEmailWellFormed, isPositiveNumber, isStringValueInformed, isValidIban, isValueNotNullOrUndefined} from "@/common/validations";
import { FieldValidationResult } from "../transfer.vm";

export const REQUIRED_FIELD_MESSAGE = "Debe informar el campo";
export const INVALID_IBAN_MESSAGE = "Debe informar un IBAN válido";
export const INVALID_AMOUNT_MESSAGE = "El importe debe ser mayor que 0";
export const INVALID_REAL_DATE_TRANSFER_MESSAGE = "La fecha debe ser posterior a hoy";
export const INVALID_EMAIL_MESSAGE = "El email no tiene un formato correcto"

const buildValidationFailedResult = (errorMessage : string) : FieldValidationResult=> ({
  succeeded: false,
  errorMessage: errorMessage
})

const buildValidationSucceded = () : FieldValidationResult => ({
  succeeded: true,
})

export const validateIBANField = (value: string) : FieldValidationResult=> {
  if(!isStringValueInformed(value)) {
    return buildValidationFailedResult(REQUIRED_FIELD_MESSAGE);
  }

  if(!isValidIban(value)) {
    return buildValidationFailedResult(INVALID_IBAN_MESSAGE);
  }

  return buildValidationSucceded();
}

export const validateAccountIdField = (value : string) : FieldValidationResult => {
  if(!isStringValueInformed(value)) {
    return buildValidationFailedResult(REQUIRED_FIELD_MESSAGE);
  }

  return buildValidationSucceded();
}

export const validateNameField = (value : string) : FieldValidationResult => {
  if(!isStringValueInformed(value)) {
    return buildValidationFailedResult(REQUIRED_FIELD_MESSAGE);
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
    return buildValidationFailedResult(REQUIRED_FIELD_MESSAGE);
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