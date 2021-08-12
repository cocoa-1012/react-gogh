import { ReducersActionsModel } from "./interfaces";

export const myServices = (state = {}, action: ReducersActionsModel) => {
  switch (action.type) {
    case "MY_SERVICES_DATA":
      return action.payLoad;
    case "ADDED_MY_SERVICES_DATA":
      return action.payLoad;
    case "DELETED_MY_SERVICES_DATA": 
      return action.payLoad;
    case "EDITTED_MY_SERVICES_DATA":
      return action.payLoad;
    default:
      return state;
  }
};
