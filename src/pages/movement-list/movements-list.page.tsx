import { AppLayout } from "@/layouts/app/app-layout";
import React from "react";
import classes from './movements-list.page.module.css'
import { MovementsListVM } from "./movements-list.vm";
import { MovementsListPageTableComponent } from "./components";
import { getAccountIdentificate, getMovements } from "./api/movements-list.api";
import { mapMovementsApiToVm } from "./movements-list.mapper";
import { useParams } from "react-router-dom";
import { AccountIdentificateFromApi } from "./api/movements-list.api-model";


export const  MovementList : React.FC = () => {
  const {accountId} = useParams<{accountId:string}>();
  const [movements, setMovements] = React.useState<MovementsListVM[]>([]);

  const [accountIdentificate, setAccountIdentificate] = React.useState<AccountIdentificateFromApi | null>(null);


  React.useEffect(()=>{
    if(accountId) {
      getAccountIdentificate(accountId).then((result)=>setAccountIdentificate(result));
    }
  }, [accountId])


  React.useEffect(()=> {
    if(accountId) {
    getMovements(accountId).then((result)=>setMovements(mapMovementsApiToVm(result)));
    }
  },[accountId]);

  return (
    <AppLayout>
      <div className = {classes.root}>
        <div className = {classes.headerContainer}>
          <h1>Saldos y Últimos movimientos</h1>
          <div>
            <span className={classes.label}>Saldo actual: </span>
            <span className={classes.value}>{accountIdentificate ? accountIdentificate.balance : ""}</span>
          </div>
        </div>
          <div className={classes.gridAcountIdentificate}>
            <span className = {classes.accountIdentificateCell}>Alias: {accountIdentificate ? accountIdentificate.name: ""}</span>
            <span className = {classes.accountIdentificateCell}>IBAN: {accountIdentificate ? accountIdentificate.iban: ""}</span>
          </div>
          <div>
            <MovementsListPageTableComponent movements={movements} />
          </div>
      </div>
    </AppLayout>

);
};