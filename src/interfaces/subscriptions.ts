import { AddressModel } from "./businessInfo";

//new
export interface GetActiveServiceSubscriptionsModel {
    activeServiceSubscription: GetActiveServiceSubscription[];
}

export interface GetActiveServiceSubscription {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    isDeleted: boolean;
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
    pictures: string[];
    deliveryDate: Date;
    serviceName: string;
    serviceProviderId: string;
    serviceProviderName: string;
    customerFirstName: string;
    customerLastName: string;
    customerAddress: AddressModel;
    deliveredByFirstName: string;
    deliveredByLastName: string;
}
