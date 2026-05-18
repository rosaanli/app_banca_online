import * as apiModel from "./api/movements-list.api-model";
import * as viewModel from "./movements-list.vm";

export const mapMovementsApiToVm = (movements : apiModel.MovementsListFromApi[]) : viewModel.MovementsListVM[]=>
  movements.map((movements)=>({
      id: movements.id,
      description: movements.description,
      amount: Number(movements.amount),
      balance: Number(movements.balance),
      transaction: new Date (movements.transaction),
      realTransaction: new Date(movements.realTransaction),
      accountId: movements.accountId,
    }))
