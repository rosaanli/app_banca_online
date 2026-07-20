import { AppLayout } from "@/layouts/app/app-layout";
import React from "react";
import classes from './movements-list.page.module.css'
import { createEmptyAccountIdentificate, MovementsListVM } from "./movements-list.vm";
import { MovementsListPageTableComponent } from "./components";
import { getAccountIdentificate, getMovements } from "./api/movements-list.api";
import { mapMovementsApiToVm } from "./movements-list.mapper";
import { useParams } from "react-router-dom";
import { mapAccountIdentificateApiToVm } from "./account-identificate.mapper";
import { AccountIdentificateVM } from "./movements-list.vm";
import { MovementsListIdentificateAccountHeader} from "./components/movements-list-header.component";

export const  MovementList : React.FC = () => {
  const {id} = useParams<{id:string}>();
  const [movements, setMovements] = React.useState<MovementsListVM[]>([]);

  const [accountIdentificate, setAccountIdentificate] = React.useState<AccountIdentificateVM>(createEmptyAccountIdentificate());


  React.useEffect(()=>{
    if(id) {
      getAccountIdentificate(id).then((result)=>setAccountIdentificate(mapAccountIdentificateApiToVm(result)))
    }
  }, [id])


  React.useEffect(()=> {
    if(id) {
      getMovements(id).then((result)=>setMovements(mapMovementsApiToVm(result)));
    }
  },[]);

  return (
    <AppLayout>
      <div className = {classes.root}>
        <div>
          <MovementsListIdentificateAccountHeader accountIdentificate={accountIdentificate}/>
        </div>
        <div>
          <MovementsListPageTableComponent movements={movements} />
        </div>
      </div>
    </AppLayout>
  );
};