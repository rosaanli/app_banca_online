import { FormValidationResult } from "@/common/validations/validation.model";
import { Credentials, CredentialsFromErrors } from "./login.vm";
import { validatePasswordField, validateUserField } from "./login-field.validation";



export const validateForm = (credentials: Credentials) : FormValidationResult <CredentialsFromErrors>=>{
  const validationResult = [
    validateUserField(credentials.user),
    validatePasswordField(credentials.password)
  ];

  return{
    succeeded: validationResult.every((f) => f.succeeded),
    errors: {
      user: validationResult[0].errorMessage ?? "",
      password: validationResult[1].errorMessage ?? "",
    }
  };
};


  // };

  //   if(!credentials.user.trim()){
  //     validationResult.error = {
  //       ...validationResult.error,
  //       user: "Debe informar el usuario"
  //     }
  //     validationResult.succeded = false;
  //   }

  //   if(!credentials.password.trim()){
  //     validationResult.error = {
  //       ...validationResult.error,
  //       password: "Debe informar la contraseña"
  //     }
  //     validationResult.succeded = false;
  //   }

  // return validationResult;
