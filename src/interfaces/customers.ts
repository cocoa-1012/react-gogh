import { AddressModel } from "./businessInfo";

export interface NextAppointmentModel {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
  eventDate: Date;
  customerId: string;
  userId: string;
  subscriptionId: string;
  status: 1;
  cancellationReason: string;
  deliveredById: string;
  pictures: string;
  deliveryDate: Date;
}

export interface MyServiceSubscriptionsModel {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: Date;
  userId: string;
  myServiceIds: string[];
  serviceName: string;
  amount: number;
  subscriptionType: number;
  address: AddressModel;
  serviceProviderId: string;
  serviceProviderName: string;
  nextAppointment: NextAppointmentModel;
}

export interface CustomerDataModel {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  address: AddressModel;
  phoneNumber: string;
  companyId: string;
  lastActivity: Date;
  totalRevenue: number;
  totalVisits: number;
  myServiceSubscriptions: MyServiceSubscriptionsModel[];
}

export interface CustomerResponseModel {
  pageNumber: number;
  pageSize: number;
  count: number;
  data: CustomerDataModel[];
}

export interface NewCustomerModel {
  id: string | null;
  createdAt: string | Date;
  updatedAt: string | Date;
  isDeleted: boolean;
  userId: string | null;
  firstName: string;
  lastName: string;
  email: string;
  address: AddressModel;
  phoneNumber: string;
  companyId: string | null;
  lastActivity: string | Date;
  totalRevenue: number;
  totalVisits: number;
}
