
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AccountList, AccountPage, AddAccount, LoginPage, MovementList, TransferPage,  } from "@/pages";
import {appRoutes} from './routes'

export const Router = () => {
const {root, accountList, movements, transfer, transferFromAccount, addAccount, editAccount} = appRoutes;

  return (
    <BrowserRouter>
      <Routes>
        <Route path={root} element={<LoginPage/>}></Route>
        <Route path={accountList} element = {<AccountList/>}></Route>
        <Route path={editAccount} element = {<AccountPage/>}></Route>
        <Route path={movements} element = {<MovementList/>}></Route>
        <Route path={transfer} element = {<TransferPage/>}></Route>
        <Route path={transferFromAccount} element = {<TransferPage/>}></Route>
        <Route path={addAccount} element = {<AddAccount/>}></Route>
      </Routes>
    </BrowserRouter>
  )
};