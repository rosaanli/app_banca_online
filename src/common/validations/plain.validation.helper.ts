import { REQUIRED_FIELD_MESSAGE } from "./validation.const";
import { FieldValidationResult } from "./validation.model"


export const buildValidationFailedResult = (errorMessage : string) : FieldValidationResult=> ({
  succeeded: false,
  errorMessage: errorMessage
})

export const buildValidationSucceded = () : FieldValidationResult => ({
  succeeded: true,
})

export const buildRequiredValidationFieldFailedResponse = () => buildValidationFailedResult(REQUIRED_FIELD_MESSAGE);
