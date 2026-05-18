import Axios from "axios";
import {MovementsListFromApi} from "./movements-list.api-model";

const urlMovements = `${import.meta.env.VITE_BASE_API_URL}/movements`;

export const getMovements = (accountId: string): Promise<MovementsListFromApi[]> =>
  Axios.get<MovementsListFromApi[]>(urlMovements, { params: { accountId } }).then(
    ({ data }) => data,
  );