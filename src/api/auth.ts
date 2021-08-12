import axios from "axios";
import { mainAPIURL } from "../config/api";
import { LoginUserModel, RegisterUserModel } from "../interfaces/userModels";

//Axios APIs
const headers = {
  "Content-Type": "application/json",
};

export function handleRegisterUser(user: RegisterUserModel) {
  return axios
    .post(mainAPIURL + "/api/Authentication/register", user, {
      headers: headers,
    })
    .then((response) => {
      console.log("API response in register", user, response);
      return response;
    })
    .catch((error) => {
      return error;
    });
}

export function handleLoginuUser(user: LoginUserModel) {
  return axios
    .post(mainAPIURL + "/api/Authentication/login", user, {
      headers: headers,
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}
