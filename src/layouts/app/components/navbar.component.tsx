import React from "react";
import { Link, useLocation } from "react-router-dom";
import { appRoutes, routesPrefixes } from "@/core/router";
import classes from "./navbar.component.module.css";



export const NavBarComponent : React.FC = () => {
  const { pathname } = useLocation();

  return (
      <nav className={classes.navbar}>
        <ul className={classes.list}>
          <li
            className={pathname.startsWith(routesPrefixes.accountList) ? classes.clicked : ""}
          >
            <Link
              to={appRoutes.accountList}
              >
                 Mis Cuentas
            </Link>
          </li>
          <li
              className={pathname.startsWith(routesPrefixes.transfer) ? classes.clicked : ""}
          >
            <Link
              to={appRoutes.transfer}
              >
              Transferencias
            </Link>
          </li>
        </ul>
      </nav>
  )
};