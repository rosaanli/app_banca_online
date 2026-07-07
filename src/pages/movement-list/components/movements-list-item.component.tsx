import React from "react";
import { MovementsListVM } from '../movements-list.vm';
import classes from './movements-list-item.component.module.css'



interface Props {
  movement : MovementsListVM;
}

export const ItemTableListMovementsComponent : React.FC<Props>=(props) => {
  const {movement} = props;

  return(
    <div className={classes.row}>
        <span className= {classes.dataCell}>{movement.transaction.toLocaleDateString('es-ES')}</span>
        <span className= {classes.dataCell}>{movement.realTransaction.toLocaleDateString('es-ES')}</span>
        <span className= {classes.dataCell}>{movement.description}</span>
        <span className={`${classes.alignRight} ${classes.dataCell} ${movement.amount < 0 ? classes.negative : ''}`}>{movement.amount} €</span>
        <span className={`${classes.alignRight} ${classes.dataCell}`}>{movement.balance} €</span>
    </div>
  )
}