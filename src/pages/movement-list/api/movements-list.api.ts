import Axios from "axios";
import {AccountIdentificateFromApi, MovementsListFromApi} from "./movements-list.api-model";

const urlMovements = `${import.meta.env.VITE_BASE_API_URL}/movements`;
const urlAccountIdentificate = `${import.meta.env.VITE_BASE_API_URL}/account-list`;

export const getMovements = (accountId: string): Promise<MovementsListFromApi[]> =>
  Axios.get<MovementsListFromApi[]>(urlMovements, { params: { accountId } }).then(
    (response) => response.data
  );


  export const getAccountIdentificate = (accountId:string) : Promise<AccountIdentificateFromApi> =>
    Axios.get<AccountIdentificateFromApi>(urlAccountIdentificate, { params: { accountId } }).then((response)=>response.data);