import { createEmptyCredentialsFromErrors, CredentialsFromErrors } from "./login.vm";

interface ValidationResult {
  succeded: boolean,
  error: CredentialsFromErrors;
};

export const validateForm = (credentials: CredentialsFromErrors) : ValidationResult =>{
  let validationResult : ValidationResult = {
    succeded: true,
    error: createEmptyCredentialsFromErrors()
  };

    if(!credentials.user.trim()){
      validationResult.error = {
        ...validationResult.error,
        user: "Debe informar el usuario"
      }
      validationResult.succeded = false;
    }

    if(!credentials.password.trim()){
      validationResult.error = {
        ...validationResult.error,
        password: "Debe informar la contraseña"
      }
      validationResult.succeded = false;
    }

  return validationResult;
};