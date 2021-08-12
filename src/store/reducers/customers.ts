import { ReducersActionsModel } from "./interfaces";

export const customers = (state = {}, action: ReducersActionsModel) => {
  switch (action.type) {
    case "CUSTOMERS_DATA_FATCH":
      return { ...action.payLoad };
    case "ADD_NEW_CUSTOMER":
      return { ...action.payLoad };
    case "EDIT_CUSTOMER":
      return { ...action.payLoad };
    case "DELETE_CUSTOMER_FETCH":
      return { ...action.payLoad };
    default:
      return state;
  }
};

export const getSubscriptions = (state = {}, action: ReducersActionsModel) => {
  switch (action.type) {
    case "GET_CUSTOMER_SUBSCRIPTION_DATA":
      return action.payLoad;
    default:
      return state;
  }
};
