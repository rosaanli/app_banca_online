import React from "react";
import { Account} from "./add-account.vm";
import { AddAcountFormComponent } from "./components";
import { mapAccountFromVmToApi } from "./add-acount.mapper";
import { addAccountUrl } from "./api/add-account.api";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "@/core/router";
import { AppLayout } from "@/layouts/app/app-layout";
import classes from './add-account.module.css';

export const AddAccount: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmitAccount = async (account : Account) => {
    const accountForApi = mapAccountFromVmToApi(account);
    addAccountUrl(accountForApi).then((isValid)=>{
      if (isValid){
        navigate(appRoutes.accountList);
      } else{
        alert("Error al añadir la cuenta")
      }
    })
  };

  return (
  <AppLayout>
    <div className={classes.root}>
      <div className={classes.headerContainer}>
        <h1> Cuenta Bancaria</h1>
      </div>
      <div>
          <AddAcountFormComponent onSubmit={handleSubmitAccount}/>
      </div>
    </div>
  </AppLayout>
  )
};