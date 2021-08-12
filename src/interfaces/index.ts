import { UserNameModel, LogInUserTokens } from './userModels';
import { CompanyInfoModel } from "./companyInfo";
import { CustomerResponseModel } from "./customers";
import { CustomerInfoModel } from "./customerInfo";
import { GetConversationsModel } from "./messages";
export interface RootState {
    currentUserName: UserNameModel;
    currentUser: LogInUserTokens;
    companyInfo: CompanyInfoModel;
    customers: CustomerResponseModel;
    customerInfo: CustomerInfoModel;
    getConversations: GetConversationsModel;
}