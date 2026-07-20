import react from 'react';
import { AccountIdentificateVM } from '../movements-list.vm';
import classes from '@/pages/movement-list/components/movements-list-header.component.module.css';

interface props {
  accountIdentificate : AccountIdentificateVM;
};

export const MovementsListIdentificateAccountHeader : react.FC<props>= (props) => {
  const {accountIdentificate} = props;

  return (
    <div>
      <div className = {classes.headerContainer}>
        <h1>Saldos y Últimos movimientos</h1>
          <div>
            <span className={classes.label}>Saldo actual: </span>
            <span className={classes.value}>{accountIdentificate.balance}</span>
          </div>
        </div>
        <div className={classes.gridAcountIdentificate}>
          <span className = {classes.accountIdentificateCell}>Alias: {accountIdentificate.name}</span>
          <span className = {classes.accountIdentificateCell}>IBAN: {accountIdentificate.iban}</span>
            </div>
    </div>
  )

}