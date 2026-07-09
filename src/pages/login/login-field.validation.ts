import {
  isStringValueInformed,
  buildRequiredValidationFieldFailedResponse,
  buildValidationSucceded,
} from "@/common/validations";
import { FieldValidationResult } from "@/common/validations/validation.model";

export const validateUserField = (user: string): FieldValidationResult => {
  if (!isStringValueInformed(user)) {
    return buildRequiredValidationFieldFailedResponse();
  }
  return buildValidationSucceded();
};

export const validatePasswordField = (password: string): FieldValidationResult => {
  if (!isStringValueInformed(password)) {
    return buildRequiredValidationFieldFailedResponse();
  }
  return buildValidationSucceded();
};