import {
  UploadFileTypesModel,
  SignUpUserRoleModel,
  PricingTypeModel,
  CustomerSortOrderModel,
} from "../interfaces/constantTypes";

export const uploadFileTypes: UploadFileTypesModel = {
  logo: 1,
  portfolio: 2,
  service: 3,
  messageImage: 4,
};

export const signUpUserRole: SignUpUserRoleModel = {
  businessOwner: 1,
  customer: 2,
};

export const pricingType: PricingTypeModel = {
  hourly: 1,
  fixedPrice: 2,
  noPrice: 3,
};

export const customerSortOrder: CustomerSortOrderModel = {
  createDateDesc: 0,
  createDateAsc: 1,
  firstNameDesc: 2,
  firstNameAsc: 3,
  lastNameDesc: 4,
  lastNameAsc: 5,
  lastActivityDesc: 6,
  lastActivityAsc: 7,
  totalRevenueDesc: 8,
  totalRevenueAsc: 9,
  totalVisitsDesc: 10,
  totalVisitsAsc: 11,
};
