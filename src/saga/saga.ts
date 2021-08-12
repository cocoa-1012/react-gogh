import { call, put, takeEvery } from 'redux-saga/effects';
import { handleLoginuUser, handleRegisterUser } from '../api/auth';
import {
  basicCompanyInfo,
  handleAddAdditionalBusinessInfo,
  handleAddBusinessInfo,
  handleAddCustomerInfo,
  handleAddNewCustomer,
  handleCustomersFetch,
  handleDeleteCustomer,
  handleDeleteService,
  handleEditCustomer,
  handleEditService,
  handleFetchMyServicesData,
  handleFileUploading,
  handleGetConversations,
  handleGetCustomerInfo,
  handleGetCustomerSubscriptions,
  handleGetMessage,
  handleNewServiceAdd,
  handleSendMessage,
  publicCompanyBusinessPage,
  handleAppointments,
} from '../api/axiosAPIs';
import * as actions from '../store/actionNames/actionNames';

function* loginUser(action: any): Generator<any> {
  try {
    const { email, password } = action.payLoad;
    const user = { email, password };
    const loggedInUser: any = yield call(handleLoginuUser, user);
    const userInfo: any = yield call(
      basicCompanyInfo,
      loggedInUser.data.accessToken
    );
    const page: number = 1;
    const pageSize: number = 10;
    yield put({ type: 'SET_USER_NAME', payLoad: userInfo.data });
    yield put({ type: 'GET_LOGGEDIN_USER', payLoad: loggedInUser.data });

    if (loggedInUser.data.role == 2) {
      const customerInfoData: any = yield call(
        handleGetCustomerInfo,
        loggedInUser.data.accessToken
      );
      const customerSubscriptionData: any = yield call(
        handleGetCustomerSubscriptions,
        loggedInUser.data.accessToken,
        page,
        pageSize
      );
      yield put({
        type: 'GET_CUSTOMER_SUBSCRIPTION_DATA',
        payLoad: customerSubscriptionData.data,
      });
      yield put({
        type: 'CUSTOMER_INFO_FETCH',
        payLoad: customerInfoData.data,
      });
    } else if (loggedInUser.data.role == 1) {
      const companyInfo: any = yield call(
        publicCompanyBusinessPage,
        userInfo.data.companyId,
        loggedInUser.data.accessToken
      );
      yield put({ type: 'SET_COMPANY_INFO', payLoad: companyInfo.data });
    } else {
      console.log('Get User Info Failed');
    }
  } catch (e) {
    console.log('Login failed', e);
  }
}

function* registerUser(action: any): Generator<any> {
  try {
    // console.log("saga-register action.payload", action.payLoad);
    const registeredUser: any = yield call(handleRegisterUser, action.payLoad);
    const userInfo: any = yield call(
      basicCompanyInfo,
      registeredUser.data.accessToken
    );
    yield put({ type: 'GET_LOGGEDIN_USER', payLoad: registeredUser.data });
    yield put({ type: 'SET_USER_NAME', payLoad: userInfo.data });
  } catch (e) {
    console.log('Register failed', e);
  }
}

function* handleFileUpload(action: any): Generator<any> {
  try {
    const companyLogo: any = yield call(
      handleFileUploading,
      action.payLoad.file,
      action.payLoad.user,
      action.payLoad.type
    );
    yield put({ type: 'IMAGE_URL_FETCH', payLoad: companyLogo.data });
  } catch (e) {
    yield put({ type: 'IMAGE_URL_FETCH_FAILED' });
  }
}

function* fetchMyServicesData(action: any): Generator<any> {
  try {
    const myServicesData: any = yield call(
      handleFetchMyServicesData,
      action.payLoad
    );
    yield put({ type: 'MY_SERVICES_DATA', payLoad: myServicesData.data });
  } catch (e) {
    yield put({ type: 'MY_SERVICES_DATA_FAILED' });
  }
}

function* addBusinessInfo(action: any): Generator<any> {
  try {
    const businessInfoData: any = yield call(
      handleAddBusinessInfo,
      action.payLoad.data,
      action.payLoad.user
    );
    yield put({ type: 'BUSINESS_INFO_FETCH', payLoad: businessInfoData.data });
  } catch (e) {
    yield put({ type: 'BUSINESS_INFO_FETCH_FAILED' });
  }
}

function* addAdditionalBusinessInfo(action: any): Generator<any> {
  try {
    const additionalBusinessInfo: any = yield call(
      handleAddAdditionalBusinessInfo,
      action.payLoad.data,
      action.payLoad.user
    );
    yield put({
      type: 'ADDITIONAL_BUSINESS_INFO_FETCH',
      payLoad: additionalBusinessInfo.data,
    });
  } catch (e) {
    yield put({ type: 'ADDITIONAL_BUSINESS_INFO_FAILED' });
  }
}

function* addCustomerInfo(action: any): Generator<any> {
  try {
    const customerInfoData: any = yield call(
      handleAddCustomerInfo,
      action.payLoad.data,
      action.payLoad.user
    );
    // console.log("saga, customerInfo", customerInfoData);
    yield put({ type: 'CUSTOMER_INFO_FETCH', payLoad: customerInfoData.data });
  } catch (e) {
    yield put({ type: 'BUSINESS_INFO_FETCH_FAILED' });
  }
}

function* handleAddNewService(action: any): Generator<any> {
  try {
    const addedMyServicesData: any = yield call(
      handleNewServiceAdd,
      action.payLoad.serviceItem,
      action.payLoad.user,
      action.payLoad.page,
      action.payLoad.pageSize
    );
    yield put({
      type: 'ADDED_MY_SERVICES_DATA',
      payLoad: addedMyServicesData.data,
    });
  } catch (e) {
    yield put({ type: 'ADDED_MY_SERVICES_DATA_FAILED' });
  }
}

function* deleteService(action: any): Generator<any> {
  try {
    const deletedMyServicesData: any = yield call(
      handleDeleteService,
      action.payLoad.serviceID,
      action.payLoad.user,
      action.payLoad.page,
      action.payLoad.pageSize
    );
    yield put({
      type: 'DELETED_MY_SERVICES_DATA',
      payLoad: deletedMyServicesData.data,
    });
  } catch (e) {
    yield put({ type: 'DELETED_MY_SERVICES_DATA_FAILED' });
  }
}

function* editService(action: any): Generator<any> {
  try {
    const edittedMyServicesData: any = yield call(
      handleEditService,
      action.payLoad.serviceItem,
      action.payLoad.user,
      action.payLoad.page,
      action.payLoad.pageSize
    );
    yield put({
      type: 'EDITTED_MY_SERVICES_DATA',
      payLoad: edittedMyServicesData.data,
    });
  } catch (e) {
    yield put({ type: 'EDITTED_MY_SERVICES_DATA_FAILED' });
  }
}

function* customersData(action: any): Generator<any> {
  try {
    const { accessToken, sort, page, pageSize } = action.payLoad;
    const customersData: any = yield call(
      handleCustomersFetch,
      accessToken,
      sort,
      page,
      pageSize
    );
    yield put({
      type: 'CUSTOMERS_DATA_FATCH',
      payLoad: customersData.data,
    });
  } catch (e) {
    yield put({ type: 'CUSTOMERS_DATA_FATCH_FAILED' });
  }
}

function* addNewCustomer(action: any): Generator<any> {
  try {
    const { user, customer, page, pageSize, sort } = action.payLoad;
    const customersData: any = yield call(
      handleAddNewCustomer,
      customer,
      user,
      sort,
      page,
      pageSize
    );
    yield put({ type: 'ADD_NEW_CUSTOMER', payLoad: customersData.data });
  } catch (e) {
    yield put({ type: 'CUSTOMERS_DATA_FATCH_FAILED' });
  }
}

function* deleteCustomer(action: any): Generator<any> {
  try {
    const { accessToken, customerID, page, pageSize, sort } = action.payLoad;
    const customersData: any = yield call(
      handleDeleteCustomer,
      customerID,
      accessToken,
      sort,
      page,
      pageSize
    );
    yield put({ type: 'DELETE_CUSTOMER_FETCH', payLoad: customersData.data });
  } catch (e) {
    yield put({ type: 'CUSTOMERS_DATA_FATCH_FAILED' });
  }
}

function* editCustomer(action: any): Generator<any> {
  try {
    const { user, customer, page, pageSize, sort } = action.payLoad;
    const customersData: any = yield call(
      handleEditCustomer,
      customer,
      user,
      sort,
      page,
      pageSize
    );
    yield put({ type: 'EDIT_CUSTOMER', payLoad: customersData.data });
  } catch (e) {
    yield put({ type: 'CUSTOMERS_DATA_FATCH_FAILED' });
  }
}

// messages saga
function* sendMessage(action: any): Generator<any> {
  try {
    const { receiverId, text, user, page, pageSize } = action.payLoad;
    const sendMessageData: any = yield call(
      handleSendMessage,
      receiverId,
      text,
      user,
      page,
      pageSize
    );
    yield put({ type: 'SEND_MESSAGE', payLoad: sendMessageData.data });
  } catch (e) {
    yield put({ type: 'SEND_MESSAGE_FETCH_FAILED' });
  }
}

function* setReceiverId(action: any): Generator<any> {
  try {
    yield put({ type: 'SET_RECEIVER_ID', payLoad: action.payLoad });
  } catch (e) {
    yield put({ type: 'SET_RECEIVER_ID_FETCH_FAILED' });
  }
}

function* getCustomerMessage(action: any): Generator<any> {
  try {
    const { user, receiverId, page, pageSize } = action.payLoad;
    const getMessageData: any = yield call(
      handleGetMessage,
      user,
      receiverId,
      page,
      pageSize
    );
    yield put({ type: 'CUSTOMER_GET_MESSAGES', payLoad: getMessageData.data });
  } catch (e) {
    yield put({ type: 'CUSTOMER_GET_MESSAGES_FETCH_FAILED' });
  }
}

function* getCompanyMessage(action: any): Generator<any> {
  try {
    const { user, receiverId, page, pageSize } = action.payLoad;
    const getMessageData: any = yield call(
      handleGetMessage,
      user,
      receiverId,
      page,
      pageSize
    );
    yield put({ type: 'COMPANY_GET_MESSAGES', payLoad: getMessageData.data });
  } catch (e) {
    yield put({ type: 'COMPANY_GET_MESSAGES_FETCH_FAILED' });
  }
}

function* getConversations(action: any): Generator<any> {
  try {
    const { accessToken, page, pageSize } = action.payLoad;
    const conversationData: any = yield call(
      handleGetConversations,
      accessToken,
      page,
      pageSize
    );
    yield put({
      type: 'GET_CONVERSATIONS_DATA',
      payLoad: conversationData.data,
    });
  } catch (e) {
    yield put({ type: 'GET_CONVERSATIONS_DATA_FAILED' });
  }
}

function* getCustomerConversations(action: any): Generator<any> {
  try {
    const { accessToken, page, pageSize } = action.payLoad;
    const conversationData: any = yield call(
      handleGetConversations,
      accessToken,
      page,
      pageSize
    );
    yield put({
      type: 'GET_CUSTOMER_CONVERSATIONS_DATA',
      payLoad: conversationData.data,
    });
  } catch (e) {
    yield put({ type: 'GET_CUSTOMER_CONVERSATIONS_DATA_FAILED' });
  }
}

function* getCustomerSubscription(action: any): Generator<any> {
  try {
    const { accessToken, page, pageSize } = action.payLoad;
    const customerSubscriptionData: any = yield call(
      handleGetCustomerSubscriptions,
      accessToken,
      page,
      pageSize
    );
    yield put({
      type: 'GET_CUSTOMER_SUBSCRIPTION_DATA',
      payLoad: customerSubscriptionData.data,
    });
  } catch (e) {
    yield put({ type: 'GET_CUSTOMER_SUBSCRIPTION_DATA_FAILED' });
  }
}

function* getAppointments(action: any): Generator<any> {
  try {
    // const { name, pageNumber, pageSize, date } = action.payLoad;
    // console.log(name, action);
    const appointmentsData: any = yield call(
      handleAppointments
      // name,
      // pageNumber,
      // pageSize,
      // date
    );

    yield put({
      type: 'GET_APPOINTMENTS_DATA',
      payLoad: appointmentsData.data,
    });
  } catch (error) {
    yield put({
      type: 'GET_APPOINTMENTS_FAILED',
      payLoad: error.message,
    });
  }
}

export default function* mySaga() {
  yield takeEvery(actions.USER_LOGIN, loginUser);
  yield takeEvery(actions.USER_REGISTER, registerUser);
  yield takeEvery(actions.IMAGE_UPLOAD, handleFileUpload);
  yield takeEvery(actions.MY_SERVICES, fetchMyServicesData);
  yield takeEvery(actions.BUSINESS_INFO, addBusinessInfo);
  yield takeEvery(actions.ADDITIONAL_BUSINESS_INFO, addAdditionalBusinessInfo);
  yield takeEvery(actions.ADD_NEW_SERVICE, handleAddNewService);
  yield takeEvery(actions.DELETE_SERVICE, deleteService);
  yield takeEvery(actions.EDIT_SERVICE, editService);
  yield takeEvery(actions.CUSTOMERS, customersData);
  yield takeEvery(actions.ADD_NEW_CUSTOMERS, addNewCustomer);
  yield takeEvery(actions.EDIT_CUSTOMERS, editCustomer);
  yield takeEvery(actions.DELETE_CUSTOMER, deleteCustomer);
  yield takeEvery(actions.SEND_MESSAGES, sendMessage);
  yield takeEvery(actions.GET_CUSTOMER_MESSAGES, getCustomerMessage);
  yield takeEvery(actions.GET_COMPANY_MESSAGES, getCompanyMessage);
  yield takeEvery(actions.RECEIVER_ID, setReceiverId);
  yield takeEvery(actions.GET_CONVERSATION, getConversations);
  yield takeEvery(actions.CUSTOMER_INFO, addCustomerInfo);
  yield takeEvery(actions.GET_CONVERSATION_CUSTOMER, getCustomerConversations);
  yield takeEvery(actions.GET_SUBSCRIPTIONS, getCustomerSubscription);
  yield takeEvery(actions.GET_APPOINTMENTS, getAppointments);
  // yield takeEvery(actions.SET_USER_NAME_MIDDLE, setUserName);
}
