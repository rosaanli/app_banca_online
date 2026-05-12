import { AccountApi } from "./api/add-account.api-model";
import { Account } from "./add-account.mv";


export const mapAccountFromVmToApi = (account : Account) : AccountApi => {
  return {
    type: account.type,
    name: account.name
  }
};