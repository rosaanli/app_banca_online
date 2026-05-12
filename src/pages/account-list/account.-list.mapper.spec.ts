import * as apiModel from './api';
import { mapAccountListFromApiToVm } from './account-list.mapper';

describe("pages/account-list/api/account-list.mapper tests", ()=> {
  describe("mapAccountListFromApiToVm", () => {
    it("hsould return empty arrayehrn it feeds empty array",()=>{
      // Arrange
      const accountList : apiModel.AccountApiModel[] = [];
      // Act
      const result = mapAccountListFromApiToVm(accountList);
      // Assert
      expect(result).toEqual([]);
    })

    it("Should return the same array but using the VM Model structure",()=>{
      // Arrange
      const accountList: apiModel.AccountApiModel[] = [
        {
          id: "2",
          iban: "ES79 2100 0813 6101 2345 6789",
          type: "3",
          name: "Compartida",
          balance: 2480,
          lastTransaction: "2019-11-21T14:07:38",
        },
        {
          id: "3",
          iban: "ES66 2100 0418 4012 3456 7891",
          type: "2",
          name: "Ahorro",
          balance: 8500,
          lastTransaction: "2019-11-15T08:29:04",
        },
      ];

      // Act
      const result = mapAccountListFromApiToVm(accountList);
      // Assert
      expect(result).toEqual([
        {
          id: "2",
          iban: "ES79 2100 0813 6101 2345 6789",
          name: "Compartida",
          balance: "2480",
          lastTransaction: new Date("2019-11-21T14:07:38"),
        },
        {
          id: "3",
          iban: "ES66 2100 0418 4012 3456 7891",
          name: "Ahorro",
          balance: "8500",
          lastTransaction: new Date("2019-11-15T08:29:04"),
        },
      ]);
    })
  })
})

