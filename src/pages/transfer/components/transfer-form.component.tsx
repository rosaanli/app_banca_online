import React from "react";
import { createEmptyTransferError, createEmptyTransferVm, TransferError, TransferVm } from "../transfer.vm";
import { AccountVm } from "../transfer.vm";
import {validateForm} from "../validations"
import classes from "./transfer-form.component.module.css";

interface Props {
  accountlist: AccountVm[];
  onTransfer: (transferInfo: TransferVm) => void;
  defaultAccountId?: string;
}

export const TransferFormComponent: React.FC<Props> = (props) => {
  const {accountlist, onTransfer, defaultAccountId} = props;
  const [transfer, setTransfer] = React.useState<TransferVm>(createEmptyTransferVm());

  const [errors, setErrors] = React.useState<TransferError>(createEmptyTransferError());

  React.useEffect(() => {
    setTransfer({
      ...transfer,
      accountId: defaultAccountId ?? "",
    });
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formValidationResult = validateForm(transfer);
    setErrors(formValidationResult.errors ?? createEmptyTransferError());
    if(formValidationResult.succeeded) {
      onTransfer(transfer);
    }
  };


  const handleFieldChange =(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) =>{
    setTransfer({
      ...transfer,
      [e.target.name]: e.target.value
    })
  };



  return (
    <div>
      <form onSubmit={handleSubmit}>
      <div className={classes.formContainer}>
        <div>
          <label>Seleccione cuenta origen</label>
          <select name="accountId" onChange={handleFieldChange} value={transfer.accountId} className={classes.large}>
            <p>{errors.accountId}</p>
            {
              accountlist.map((account) =>
                <option key={account.id} value={account.id}>
                  {account.alias}
                </option>
              )
            }
            <option value="">Seleccione una cuenta</option>
          </select>
        </div>
        <div>
          <label>Ingrese el IBAN de destino:</label>
          <input type="text" name="iban" onChange={handleFieldChange} value={transfer.iban} className={classes.large} />
          <p className={classes.error}>{errors.iban}</p>
        </div>
        <div>
          <label>Beneficiario:</label>
          <input type="text" name="name" onChange={handleFieldChange} value={transfer.name} className={classes.large} />
          <p className={classes.error}>{errors.name}</p>
        </div>
        <div>
          <label htmlFor="">Importe</label>
          <input type="number" name="amount" onChange={handleFieldChange} value={transfer.amount} className={classes.small} />
          <p className={classes.error}>{errors.amount}</p>
        </div>
        <div>
          <label>Concepto:</label>
          <input name="concept" onChange={handleFieldChange} value={transfer.concept} className={classes.large} />
          <p className={classes.error}>{errors.concept}</p>
        </div>
        <div>
          <label>Observaciones</label>
          <input name="notes" onChange={handleFieldChange} value={transfer.notes} className={classes.large} />
          <p className={classes.error}>{errors.notes}</p>
        </div>
      </div>
      <div className={classes.formContainer}>
        <div>
          <p>
          Para que la transferencia se realice en otra fecha diferente a la de
          hoy, por favor, indíquenos la fecha de ejecución:
          </p>
          <div>
            <label>Fecha de ejecución:</label>
            <input
              name="realDateTransfer"
              type="date"
              onChange={handleFieldChange}
              value={transfer.realDateTransfer ? transfer.realDateTransfer.toISOString().slice(0, 10) : ''}
            />
            <p className={classes.error}>{errors.realDateTransfer}</p>
          </div>
        </div>
      </div>
      <div className={classes.formContainer}>
        <div>
          <p>Escriba una dirección de email para dar aviso al beneficiario:</p>
          <div>
            <label>Email del beneficiario:</label>
            <input
              name="email"
              type="email"
              onChange={handleFieldChange}
              value={transfer.email}
              className={classes.large}
            />
            <p className={classes.error}>{errors.email}</p>
          </div>
        </div>
      </div>
      <div className={classes.buttonContainer}>
        <button type="submit">
          REALIZAR TRANSFERENCIA
        </button>
      </div>
      </form>
    </div>
  );
};