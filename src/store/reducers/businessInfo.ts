import { ReducersActionsModel } from "./interfaces";

export const businessInfo = (state = {}, action: ReducersActionsModel) => {
  switch (action.type) {
    case "BUSINESS_INFO_FETCH":
      localStorage.setItem("companyInfo", JSON.stringify(action.payLoad));
      return action.payLoad;
    default:
      return state;
  }
};

export const customerInfo = (state = {}, action: ReducersActionsModel) => {
  switch (action.type) {
    case "CUSTOMER_INFO_FETCH":
      localStorage.setItem("customerInfo", JSON.stringify(action.payLoad));
      return action.payLoad;
    default:
      return state;
  }
};

export const additionalBusinessInfo = (state = {}, action: ReducersActionsModel) => {
  switch (action.type) {
    case "ADDITIONAL_BUSINESS_INFO_FETCH":
      return action.payLoad;
    default:
      return state;
  }
}

const companyInfomation: any = localStorage.getItem("companyInfo");
let initCompanyState = {

}
if (!!companyInfomation) {
  initCompanyState = JSON.parse(companyInfomation);
}

export const componyInfo = (state = initCompanyState, action: ReducersActionsModel) => {
  switch (action.type) {
    case "SET_COMPANY_INFO":
      localStorage.setItem("companyInfo", JSON.stringify(action.payLoad));
      return action.payLoad;
    default:
      return state;
  }
}
