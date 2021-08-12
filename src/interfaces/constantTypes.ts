export interface UploadFileTypesModel {
  logo: number;
  portfolio: number;
  service: number;
  messageImage: number;
}

export interface SignUpUserRoleModel {
  businessOwner: number;
  customer: number;
}

export interface PricingTypeModel {
  hourly: number;
  fixedPrice: number;
  noPrice: number;
}

export interface CustomerSortOrderModel {
  createDateDesc: number;
  createDateAsc: number;
  firstNameDesc: number;
  firstNameAsc: number;
  lastNameDesc: number;
  lastNameAsc: number;
  lastActivityDesc: number;
  lastActivityAsc: number;
  totalRevenueDesc: number;
  totalRevenueAsc: number;
  totalVisitsDesc: number;
  totalVisitsAsc: number;
}
