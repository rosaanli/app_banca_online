import * as apiModel from './api/login.api-model';
import * as viewModel from './login.vm';
import {mapCredentialsFromVmToApi} from  './login.mapper'

describe("login.mapper spec ", () => {
  it ("should return a credentials with same propeties", () => {
    //arrange
    const vmCredentials : viewModel.Credentials= {
      user: "angelica",
      password : "angelica"
    };

    const expetedApiCredentials : apiModel.CredentialsApi = {
      user: "angelica",
      password: "angelica"
    };
    //act
    const result : apiModel.CredentialsApi = mapCredentialsFromVmToApi(vmCredentials);

    //assert
    expect(result).toEqual(expetedApiCredentials)

  })
})