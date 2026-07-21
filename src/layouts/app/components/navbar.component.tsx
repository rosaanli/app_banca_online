import React from "react";
import { Link, useLocation } from "react-router-dom";
import { appRoutes, routesPrefixes } from "@/core/router";
import classes from "./navbar.component.module.css";

export const NavBarComponent : React.FC = () => {
  const { pathname } = useLocation();

  const isAccountSection = pathname.startsWith(routesPrefixes.accountList);

  const isMovementsPage = pathname.startsWith(routesPrefixes.movements);

  const isAddAccountPage = pathname.startsWith(routesPrefixes.addAccount);


  return (
      <nav className={classes.navbar}>
        <ul className={classes.list}>
          <li className={isAccountSection ? classes.clicked : ""}>
            <Link to={appRoutes.accountList}>
                 Mis Cuentas
            </Link>
          </li>
          {isMovementsPage && (
            <li className={classes.clicked}>
              <Link to={pathname}>
                Movimientos
              </Link>
            </li>
          )}

          <li className={pathname.startsWith(routesPrefixes.transfer) ? classes.clicked : ""}>
            <Link to={appRoutes.transfer}>
              Transferencias
            </Link>
          </li>

          {isAddAccountPage && (
            <li className={classes.clicked}>
              <Link to={pathname}>
                Agregar Cuenta
              </Link>
            </li>
          )}
        </ul>
      </nav>
  )
};