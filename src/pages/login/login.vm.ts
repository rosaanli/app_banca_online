
export interface Credentials{
  user: string;
  password: string;
}

export const createEmptyCredentials = () : Credentials =>{
  return {
    user: '',
    password : ''
  }
};


export interface CredentialsFromErrors {
  user: string;
  password: string;
};

export const createEmptyCredentialsFromErrors = (): CredentialsFromErrors => ({
    user: "",
    password: "",
});
