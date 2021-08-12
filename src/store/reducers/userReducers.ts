import { userSignUpError, userLogInError } from "../../shared/alertMessages";
import { ReducersActionsModel } from "./interfaces";

const userToken: any = localStorage.getItem("userToken");
let initTokenState = {
  accessToken: '',
  refreshToken: ''
}
if (!!userToken) {
  initTokenState = JSON.parse(userToken);
}

export const currentUser = (state = initTokenState, action: ReducersActionsModel) => {
  switch (action.type) {
    case "GET_LOGGEDIN_USER":
      localStorage.setItem("userToken", JSON.stringify(action.payLoad));
      return action.payLoad;
    case "GET_LOGGEDIN_USER_FAILED":
      alert(userLogInError);
      return state;
    case "GET_REGISTERED_USER":
      return action.payLoad;
    case "REGISTER_USER_FETCH_FAILED":
      alert(userSignUpError);
      return state;
    case "RESET_LOGIN_USER":
      return action.payLoad;
    default:
      return state;
  }
};

const userName: any = localStorage.getItem("userName");
let initNameState = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  companyId: ''
}
if (!!userName) {
  initNameState = JSON.parse(userName);
}

export const currentUserName = (state = initNameState, action: ReducersActionsModel) => {
  switch (action.type) {
    case "SET_USER_NAME":
      localStorage.setItem("userName", JSON.stringify(action.payLoad));
      return action.payLoad;
    default:
      return state;
  }
}


export const imageUrls = (state = "", action: ReducersActionsModel) => {
  switch (action.type) {
    case "IMAGE_URL_FETCH":
      return action.payLoad;
    default:
      return state;
  }
};
