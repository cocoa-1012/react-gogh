import { ReducersActionsModel } from "./interfaces";

export const messages = (state = {}, action: ReducersActionsModel) => {
  switch (action.type) {
    case "GET_MESSAGE":
      return { ...action.payLoad };
    case "SEND_MESSAGE":
      return { ...action.payLoad };
    case "UPDATE_MESSAGE":
      return { ...action.payLoad };
    case "DELETE_MESSAGE_FETCH":
      return { ...action.payLoad };
    default:
      return state;
  }
};

export const setReceiverId = (state = "", action: ReducersActionsModel) => {
  switch (action.type) {
    case "SET_RECEIVER_ID": {
      return action.payLoad;
    }
    default:
      return state;
  }
}

export const getConversations = (state = {}, action: ReducersActionsModel) => {
  switch (action.type) {
    case "GET_CONVERSATIONS_DATA": {
      return action.payLoad
    }
    default:
      return state;
  }
}



export const getCustomerConverSations = (state = {}, action: ReducersActionsModel) => {
  switch (action.type) {
    case "GET_CUSTOMER_CONVERSATIONS_DATA": {
      localStorage.setItem("getCustomerConversations", JSON.stringify(action.payLoad));
      return action.payLoad;
    }
    default:
      return state;
  }
}

export const getCustomerMessages = (state = {}, action: ReducersActionsModel) => {
  switch (action.type) {
    case "CUSTOMER_GET_MESSAGES": {
      localStorage.setItem("getcustomermessages", JSON.stringify(action.payLoad));
      return action.payLoad;
    }
    default:
      return state;
  }
}


export const getCompanyMessages = (state = {}, action: ReducersActionsModel) => {
  switch (action.type) {
    case "COMPANY_GET_MESSAGES": {
      localStorage.setItem("getcompanymessages", JSON.stringify(action.payLoad));
      return action.payLoad;
    }
    default:
      return state;
  }
}