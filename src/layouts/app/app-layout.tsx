import * as React from 'react';
import { FooterComponent, HeaderComponent } from './components';
import { NavBarComponent } from './components';
import classes from "./app-layout.component.module.css"


interface Props {
  children: React.ReactNode;
}

export const AppLayout: React.FC<Props> = (props) => {
  const {children} = props;

  return (
  <>
    <HeaderComponent />
      <NavBarComponent />
      <main className = {classes.main}>
        {children}
      </main>
    <FooterComponent/>
    </>

  );
};