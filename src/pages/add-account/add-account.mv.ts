export interface Account {
  type: string;
  name: string;
}


export const createEmptyAccount = () : Account => {
  return {
    type: "",
    name: ""
  }
};

export interface AccountFromErrors {
  name: string;
  type: string;
};

export const createEmptyAccountErrors = () : AccountFromErrors => ({
  name : "",
  type: ""
});