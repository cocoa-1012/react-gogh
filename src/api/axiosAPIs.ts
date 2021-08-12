import axios from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import { mainAPIURL } from '../config/api';
import {
  AdditionalBusinessInfoModel,
  BusinessInfoModel,
  CustomerInfoModel,
} from '../interfaces/businessInfo';
import { NewCustomerModel } from '../interfaces/customers';
import {
  MyServicesDataModel,
  RequestParamModel,
} from '../interfaces/myServices';

// Auto refresh AcessToken
const currentAccessToken = localStorage.getItem('userToken');

const tokenRefreshHeader = {
  'Content-Type': 'application/json',
};

const refreshAuthLogic = (failedRequest: any) =>
  axios
    .post(mainAPIURL + '/api/Authentication/refresh', currentAccessToken, {
      headers: tokenRefreshHeader,
    })
    .then((tokenRefreshResponse) => {
      localStorage.setItem(
        'userToken',
        JSON.stringify(tokenRefreshResponse.data)
      );
      failedRequest.response.config.headers['Authorization'] =
        'Bearer ' + tokenRefreshResponse.data.accessToken;
      return Promise.resolve();
    });

createAuthRefreshInterceptor(axios, refreshAuthLogic);

// Axios APIs

export function handleFileUploading(file: any, user: string, type: number) {
  const imageUploadHeader = {
    accept: 'text/plain',
    Authorization: `Bearer ${user}`,
    'Content-Type': 'multipart/form-data',
  };
  return axios({
    method: 'post',
    url: `${mainAPIURL}/api/Files/UploadPhoto?fileType=${type}`,
    data: file,
    headers: imageUploadHeader,
  }).then((response) => {
    return response;
  });
}

export function handleFetchMyServicesData(param: RequestParamModel) {
  const myServicesHeader = {
    Authorization: `Bearer ${param.user}`,
    'Content-Type': 'application/json',
  };
  return axios
    .get(
      mainAPIURL +
        `/api/MyServices?PageNumber=${param.page}&PageSize=${param.pageSize}`,
      {
        headers: myServicesHeader,
      }
    )
    .then((response) => {
      return response;
    });
}

export function handleAddBusinessInfo(data: BusinessInfoModel, user: string) {
  const businessInfoHeader = {
    Authorization: `Bearer ${user}`,
    'Content-Type': 'application/json-patch+json',
  };
  return axios
    .post(mainAPIURL + '/api/Companies/businessinfo', data, {
      headers: businessInfoHeader,
    })
    .then((response) => {
      return response;
    });
}

export function handleAddCustomerInfo(data: CustomerInfoModel, user: string) {
  const customerInfoHeader = {
    Authorization: `Bearer ${user}`,
    'Content-Type': 'application/json-patch+json',
  };
  return axios
    .post(mainAPIURL + '/api/Authentication/AddUserAdditionalInfo', data, {
      headers: customerInfoHeader,
    })
    .then((response) => {
      return response;
    });
}

export function handleGetCustomerInfo(user: string) {
  const CustomerInfoData: CustomerInfoModel = {
    addresses: [
      {
        streetAddress: 'testStreet',
        city: 'testCity',
        state: 'testState',
      },
    ],
    profilePicture: '',
  };

  const customerInfoHeader = {
    Authorization: `Bearer ${user}`,
    'Content-Type': 'application/json-patch+json',
  };
  return axios
    .post(
      mainAPIURL + '/api/Authentication/AddUserAdditionalInfo',
      CustomerInfoData,
      {
        headers: customerInfoHeader,
      }
    )
    .then((response) => {
      return response;
    });
}

export function handleAddAdditionalBusinessInfo(
  data: AdditionalBusinessInfoModel,
  user: string
) {
  const businessInfoHeader = {
    Authorization: `Bearer ${user}`,
    'Content-Type': 'application/json-patch+json',
  };
  return axios
    .post(mainAPIURL + '/api/Companies/additionalbusinessinfo', data, {
      headers: businessInfoHeader,
    })
    .then((response) => {
      return response;
    });
}

export function handleNewServiceAdd(
  data: MyServicesDataModel,
  user: string,
  page: number,
  pageSize: number
) {
  const addNewServiceHeader = {
    Authorization: `Bearer ${user}`,
    'Content-Type': 'application/json-patch+json',
  };
  return axios
    .post(mainAPIURL + '/api/MyServices', data, {
      headers: addNewServiceHeader,
    })
    .then(() => {
      return axios
        .get(
          mainAPIURL +
            `/api/MyServices?PageNumber=${page}&PageSize=${pageSize}`,
          {
            headers: addNewServiceHeader,
          }
        )
        .then((response) => {
          return response;
        });
    });
}

export function handleDeleteService(
  id: string | null,
  user: string,
  page: number,
  pageSize: number
) {
  const deleteServiceHeader = {
    Authorization: `Bearer ${user}`,
    'Content-Type': 'application/json-patch+json',
  };
  return axios
    .delete(mainAPIURL + `/api/MyServices/${id}`, {
      headers: deleteServiceHeader,
    })
    .then(() => {
      return axios
        .get(
          mainAPIURL +
            `/api/MyServices?PageNumber=${page}&PageSize=${pageSize}`,
          {
            headers: deleteServiceHeader,
          }
        )
        .then((response) => {
          return response;
        });
    });
}

export function handleEditService(
  newService: MyServicesDataModel,
  user: string,
  page: number,
  pageSize: number
) {
  const editServiceHeader = {
    Authorization: `Bearer ${user}`,
    'Content-Type': 'application/json-patch+json',
  };
  return axios
    .put(mainAPIURL + `/api/MyServices/${newService.id}`, newService, {
      headers: editServiceHeader,
    })
    .then(() => {
      return axios
        .get(
          mainAPIURL +
            `/api/MyServices?PageNumber=${page}&PageSize=${pageSize}`,
          {
            headers: editServiceHeader,
          }
        )
        .then((response) => {
          return response;
        });
    });
}

export function basicCompanyInfo(user: string) {
  const basicInfoHeader = {
    Authorization: `Bearer ${user}`,
  };
  return axios
    .get(mainAPIURL + `/api/Companies/basicinfo`, {
      headers: basicInfoHeader,
    })
    .then((response) => {
      return response;
    });
}

export function publicCompanyBusinessPage(companyId: string, user: string) {
  const publicInfoHeader = {
    Authorization: `Bearer ${user}`,
  };
  return axios
    .get(mainAPIURL + `/api/Companies/publicbusinesspage/${companyId}`, {
      headers: publicInfoHeader,
    })
    .then((response) => {
      return response;
    });
}

export function handleCustomersFetch(
  accessToken: string,
  order: number,
  pageNumber: number,
  pageSize: number
) {
  const customersHeader = {
    Authorization: `Bearer ${accessToken}`,
  };
  return axios
    .get(
      mainAPIURL +
        `/api/CompanyCustomers?SortOrder=${order}&PageNumber=${pageNumber}&PageSize=${pageSize}`,
      {
        headers: customersHeader,
      }
    )
    .then((response) => {
      return response;
    });
}

export function handleAddNewCustomer(
  data: NewCustomerModel,
  user: string,
  order: number,
  pageNumber: number,
  pageSize: number
) {
  const customersHeader = {
    Authorization: `Bearer ${user}`,
  };
  return axios
    .post(mainAPIURL + `/api/CompanyCustomers`, data, {
      headers: customersHeader,
    })
    .then(() => {
      return axios
        .get(
          mainAPIURL +
            `/api/CompanyCustomers?SortOrder=${order}&PageNumber=${pageNumber}&PageSize=${pageSize}`,
          {
            headers: customersHeader,
          }
        )
        .then((response) => {
          return response;
        });
    });
}

export function handleEditCustomer(
  data: NewCustomerModel,
  user: string,
  order: number,
  pageNumber: number,
  pageSize: number
) {
  const customersHeader = {
    Authorization: `Bearer ${user}`,
    'Content-Type': 'application/json-patch+json',
  };
  return axios
    .put(mainAPIURL + `/api/CompanyCustomers`, data, {
      headers: customersHeader,
    })
    .then(() => {
      return axios
        .get(
          mainAPIURL +
            `/api/CompanyCustomers?SortOrder=${order}&PageNumber=${pageNumber}&PageSize=${pageSize}`,
          {
            headers: customersHeader,
          }
        )
        .then((response) => {
          return response;
        });
    })
    .catch((e) => {
      console.log('error', e);
    });
}

export function handleDeleteCustomer(
  id: string,
  user: string,
  order: number,
  pageNumber: number,
  pageSize: number
) {
  const customersHeader = {
    Authorization: `Bearer ${user}`,
  };
  return axios
    .delete(mainAPIURL + `/api/CompanyCustomers/${id}`, {
      headers: customersHeader,
    })
    .then(() => {
      return axios
        .get(
          mainAPIURL +
            `/api/CompanyCustomers?SortOrder=${order}&PageNumber=${pageNumber}&PageSize=${pageSize}`,
          {
            headers: customersHeader,
          }
        )
        .then((response) => {
          return response;
        });
    });
}

// Message functions
export function handleGetMessage(
  user: string,
  receiverId: string,
  page: number,
  pageSize: number
) {
  const messageHeader = {
    Authorization: `Bearer ${user}`,
  };
  return axios
    .get(
      mainAPIURL +
        `/api/Chat/GetMessages?UserOrCompanyId=${receiverId}&PageNumber=${page}&PageSize=${pageSize}`,
      {
        headers: messageHeader,
      }
    )
    .then((response) => {
      return response;
    });
}

export function handleSendMessage(
  receiverId: string,
  text: string,
  user: string,
  page: number,
  pageSize: number
) {
  const messageHeader = {
    Authorization: `Bearer ${user}`,
  };
  const data = {
    recieverId: receiverId,
    text: text,
  };

  return axios
    .post(mainAPIURL + `/api/Chat/SendTextMessage`, data, {
      headers: messageHeader,
    })
    .then((response) => {
      return axios
        .get(
          mainAPIURL +
            `/api/Chat/GetMessages?UserOrCompanyId=${receiverId}&PageNumber=${page}&PageSize=${pageSize}`,
          {
            headers: messageHeader,
          }
        )
        .then((response) => {
          return response;
        });
    });
}

export function handleGetConversations(
  userToken: string,
  pageNumber: number,
  pageSize: number
) {
  const customersHeader = {
    Authorization: `Bearer ${userToken}`,
  };
  return axios
    .get(
      mainAPIURL +
        `/api/Chat/GetConversations?PageNumber=${pageNumber}&PageSize=${pageSize}`,
      {
        headers: customersHeader,
      }
    )
    .then((response) => {
      return response;
    });
}

export function handleGetCustomerSubscriptions(
  userToken: string,
  pageNumber: number,
  pageSize: number
) {
  const customersHeader = {
    Authorization: `Bearer ${userToken}`,
  };
  return axios
    .get(
      mainAPIURL +
        `/api/Subscriptions/GetCustomerActiveServiceSubscriptions?PageNumber=${pageNumber}&PageSize=${pageSize}`,
      {
        headers: customersHeader,
      }
    )
    .then((response) => {
      return response;
    });
}

// Appointments
export function handleAppointments() {
  // name: string,
  // pageNumber: number,
  // pageSize: number,
  // date: string
  const token = JSON.parse(localStorage.getItem('userToken') || '{}');

  const myServicesHeader = {
    Authorization: `Bearer ${token.accessToken}`,
    'Content-Type': 'application/json',
  };

  return axios
    .get(`${mainAPIURL}/api/Appointments/GetAppointments`, {
      headers: myServicesHeader,
    })
    .then((response) => {
      return response.data;
    });
}
