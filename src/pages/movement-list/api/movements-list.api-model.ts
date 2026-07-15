export interface MovementsListFromApi{
    id: string,
    description: string,
    amount:number,
    balance: number,
    transaction: string,
    realTransaction: string,
    accountId: string,
}

export interface AccountIdentificateFromApi {
  id: string;
  iban: string;
  type: string;
  name: string;
  balance: number;
  lastTransaction: string;
}

