import { buildRequiredValidationFieldFailedResponse, buildValidationSucceded, isStringValueInformed } from "@/common/validations";
import { FieldValidationResult } from "@/common/validations/validation.model";


export const validateTypeNewAccount = (account: string): FieldValidationResult => {
  if (!isStringValueInformed(account)) {
    return buildRequiredValidationFieldFailedResponse();
  }

  return buildValidationSucceded();

}

export const validateAliasNewAccount = (alias : string) : FieldValidationResult =>{
  if(!isStringValueInformed(alias)){
    return buildRequiredValidationFieldFailedResponse();
  }
  return buildValidationSucceded();
}