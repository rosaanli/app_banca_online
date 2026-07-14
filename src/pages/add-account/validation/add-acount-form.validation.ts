import { Account, validationAccountResult } from "../add-account.vm";
import {
  validateAliasNewAccount,
  validateTypeNewAccount,
} from "./add-account-field.validation";

export const validateAccount = (account: Account): validationAccountResult => {
  const validationNewAccount = [
    validateTypeNewAccount(account.type),
    validateAliasNewAccount(account.name),
  ];

  return {
    succeeded: validationNewAccount.every((f) => f.succeeded),
    error: {
      type: validationNewAccount[0].errorMessage ?? "",
      name: validationNewAccount[1].errorMessage ?? "",
    },
  };
};
