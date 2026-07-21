import React from "react";
import logoHeader from "/assets/logo_header_white.svg"
import classes from "./header.component.module.css";
import { useProfileContext } from "@/core/profile/profile.context";
import { Link } from "react-router-dom";
import { routesPrefixes } from "@/core/router/routes";

export const HeaderComponent : React.FC = () => {
  const {userName} = useProfileContext();
  return (
    <header className = {classes.header}>
      <div>
        <Link to={routesPrefixes.accountList}>
          <img src={logoHeader} alt="logo" className={classes["header-logo"]} />
        </Link>
        <div className={classes.usuario}>
          <p>{userName}</p>
        </div>
      </div>
    </header>
  )
};