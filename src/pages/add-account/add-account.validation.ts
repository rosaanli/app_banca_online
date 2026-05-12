import { AccountFromErrors, createEmptyAccountErrors } from "./add-account.mv";

interface validationAccountResult {
  succeded: boolean;
  error: AccountFromErrors;
};

export const validateAccount = (account : AccountFromErrors) : validationAccountResult => {
  let isValidAccount : validationAccountResult = {
    succeded: true,
    error: createEmptyAccountErrors(),
  };

  if (!account.name) {
    isValidAccount.error = {
      ...isValidAccount.error,
      name: "Debe informar el nombre de la cuenta"
    }
    isValidAccount.succeded = false;
    }

  if (!account.type){
    isValidAccount.error = {
      ...isValidAccount.error,
      type: "Debe seleccionar el tipo de la cuenta"
    }
    isValidAccount.succeded = false
  }

    return isValidAccount;
};