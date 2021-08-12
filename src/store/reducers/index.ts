import { combineReducers } from 'redux';
import {
  additionalBusinessInfo,
  businessInfo,
  componyInfo,
  customerInfo,
} from './businessInfo';
import { customers, getSubscriptions } from './customers';
import {
  getCompanyMessages,
  getConversations,
  getCustomerConverSations,
  getCustomerMessages,
  messages,
  setReceiverId,
} from './messages';
import { myServices } from './myServices';
import { currentUser, currentUserName, imageUrls } from './userReducers';
import { appointments } from './appointments';

export default combineReducers({
  currentUser,
  imageUrls,
  myServices,
  businessInfo,
  additionalBusinessInfo,
  customers,
  currentUserName,
  componyInfo,
  messages,
  setReceiverId,
  getConversations,
  customerInfo,
  appointments,
  getCustomerConverSations,
  getSubscriptions,
  getCustomerMessages,
  getCompanyMessages,
});
