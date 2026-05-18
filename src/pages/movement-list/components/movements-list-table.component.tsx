import React from "react";
import { MovementsListVM } from "../movements-list.vm";
import classes from './movement-list-table.component.module.css';
import { ItemTableListMovementsComponent } from "./movements-list-item.component";

interface Props {
  movements : MovementsListVM[];
}

export const MovementsListPageTableComponent : React.FC <Props>= (props) => {
  const {movements} = props;

  return (
    <div>
      <div>
        <div className={classes.gridContainer}>
          <div className={classes.gridAcountIdentificate}>
            <span className = {classes.accountIdentificateCell}>Alias: Falta llamada a API</span>
            <span className = {classes.accountIdentificateCell}>IBAN:  esto es un ejemplo, falta llamada a API</span>
          </div>
          <div className={classes.gridTable}>
            <div className={classes.headerTable}>
              <span className={classes.headerCell}>FECHA</span>
              <span className={classes.headerCell}>FECHA VALOR</span>
              <span className={classes.headerCell}>DESCRIPCIÓN</span>
              <span className={classes.headerCell}>IMPORTE</span>
              <span className={classes.headerCell}>SALDO DISPONIBLE</span>
            </div>
            </div>
              {movements.map((movement:MovementsListVM) => (
                <ItemTableListMovementsComponent movement={movement}/>
                  ))}
            </div>
          </div>
    </div>
  )
};