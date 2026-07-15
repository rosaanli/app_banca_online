
export interface MovementsListVM {
  id: string;
  description: string;
  amount: number;
  balance: number;
  transaction: Date;
  realTransaction: Date;
  accountId: string;
}


export interface AccountIdentificateVM {
  id: string;
  iban: string;
  name: string;
  balance: string;
  lastTransaction: Date;
}

export const createEmptyAccountIdentificate= (): AccountIdentificateVM => ({
  id: "",
  iban: "",
  name: "",
  balance: "",
  lastTransaction: new Date(),
})