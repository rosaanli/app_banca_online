import React from "react";
import { AccountVm } from "../account-list.vm";
import classes from './account-list-table.component.module.css';
import { AccountlistItemComponent } from "./account-list-item.component";


interface Props {
  accountList: AccountVm[];
}


export const AccountListTableComponent : React.FC<Props> = (props) => {
  const {accountList} = props;

  return (
    <>
      <div className={classes.gridContainer}>
        <div className={classes.gridTable}>
          <div className = {classes.headerTable}>
            <span className={classes.headerCell}>IBAN</span>
            <span className={classes.headerCell}>ALIAS</span>
            <span className={classes.headerCell}>SALDO DISPONIBLE</span>
            <span className={classes.headerCell}>ÚLTIMA OPERACIÓN</span>
            <span className={classes.headerCell}>OPERACION</span>
          </div>
          {accountList.map((accountItem) => (
            <AccountlistItemComponent key= {accountItem.id} accountItem = {accountItem} />
          ))}
        </div>
      </div>
    </>
  )
};