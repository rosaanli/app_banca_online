import { AccountIdentificateFromApi } from "./api";
import { AccountIdentificateVM } from "./movements-list.vm";



export const mapAccountIdentificateApiToVm = (accountIdentificate: AccountIdentificateFromApi,): AccountIdentificateVM => ({
  id: accountIdentificate.id,
  iban: accountIdentificate.iban,
  name: accountIdentificate.name,
  balance: accountIdentificate.balance.toString(),
  lastTransaction: new Date(accountIdentificate.lastTransaction),
});