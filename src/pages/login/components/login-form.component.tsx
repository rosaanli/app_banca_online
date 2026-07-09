import React from "react";
import { createEmptyCredentials, createEmptyCredentialsFromErrors, Credentials } from "../login.vm";
import { validateForm } from "../login.validation";
import classes from "./login-form.component.module.css";

interface Props {
  onLogin: (credencials : Credentials) => void;
};

export const LoginFormComponent : React.FC<Props> = (props) => {
  const {onLogin} = props;

  const [credentials, setCredentials] = React.useState<Credentials>(createEmptyCredentials());

  const [errors, setErrors] = React.useState(createEmptyCredentialsFromErrors());

    const handleFieldChange = (e : React.ChangeEvent<HTMLInputElement>) => {
      setCredentials(
        {...credentials,
          [e.target.name] : e.target.value
        }
      )
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    const validationResult = validateForm(credentials);
    setErrors(validationResult.errors);
    if(validationResult.succeeded){
      onLogin(credentials);
    }
  };

  return <>
      <form onSubmit={handleSubmit} className= {classes.form}>
        <div>
          <label htmlFor="userName"
          > Usuario</label>
          <input
          type="text"
          id="userName"
          placeholder="Usuario"
          name="user"
          onChange={handleFieldChange}
          className={errors.user ? classes['input-error'] : ""
          }
          />
          {errors.user && <p className={classes.error}>{errors.user}</p>}

        </div>
        <div>
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" placeholder="Contraseña" name = "password"
          onChange={handleFieldChange}
          className={errors.password ? classes['input-error'] : ""
          }
          />
          {errors.password && <p className={classes.error}>{errors.password}</p>}
        </div>
        <button type="submit" className={classes['btn-enviar']}>Acceder</button>
      </form>
    </>
};