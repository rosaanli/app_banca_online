import axios from "axios";
import { AccountApi } from "./add-account.api-model";
import { Account } from "../add-account.mv";

const URL = `${import.meta.env.VITE_BASE_API_URL}/account-list`;

export const addAccountUrl =  async (newAccount: AccountApi) : Promise<Account> => {
 return axios.post<Account>(URL, newAccount).then(({data})=> data);
};