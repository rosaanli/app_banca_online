import { AppLayout } from "@/layouts/app/app-layout";
import React from "react";
import { AccountVm, TransferVm } from "./transfer.vm";
import { TransferFormComponent } from "./components";
import classes from "./transfer.page.component.module.css";
import { getAccountList, saveTransfer } from "./api";
import { mapAccountFromApitoVM, mapTransferFromVMtoApi } from "./transfer.mapper";
import { useParams } from "react-router-dom";


export const TransferPage : React.FC = () => {
  const [accountList, setAccountsList] = React.useState<AccountVm[]>([]);
  const {id} = useParams<{id: string}>();

  // Funcion para llamar a la api para obtener la lista de cuentas
  React.useEffect(() => {
      getAccountList().then((accountListAPI) => {
        const accountListVM = accountListAPI.map(mapAccountFromApitoVM);
          setAccountsList(accountListVM)
        });
    }, []);


// función que se ejecuta cuando se realiza una transferencia, hace un post a la API
  const handleTransfer = (transferInfo : TransferVm) =>{
    const transfer = mapTransferFromVMtoApi(transferInfo);


    // Aquí se llama a la API para guardar la transferencia
    saveTransfer(transfer).then((result) => {
      if(result){
        alert("Transferencia realizada con éxito");
      } else {
        alert("Error al realizar la transferencia");
      }
    })
  };

  return (
    <AppLayout>
      <div className={classes.container}>
        <h1 className={classes.title}>Transferencias Nacionales</h1>
        <TransferFormComponent accountlist={accountList} onTransfer={handleTransfer} defaultAccountId={id} />
      </div>
    </AppLayout>
  );
};