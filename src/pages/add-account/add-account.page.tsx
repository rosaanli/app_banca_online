import React from "react";
import { Account} from "./add-account.vm";
import { AddAcountFormComponent } from "./components";
import { mapAccountFromVmToApi } from "./add-acount.mapper";
import { addAccountUrl } from "./api/add-account.api";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "@/core/router";
import { AppLayout } from "@/layouts/app/app-layout";
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
    <div>
      <h1> Añadir Cuenta Bancaria</h1>
        <AddAcountFormComponent onSubmit={handleSubmitAccount}/>
    </div>
  </AppLayout>
  )
};