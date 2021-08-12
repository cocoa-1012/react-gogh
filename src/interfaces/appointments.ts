// appointments

export interface IAppointmentCustomerAddress {
  city: string;
  state: string;
  streetAddress: string;
}
export interface AppointmentsRequestModel {
  customerAddress: IAppointmentCustomerAddress;
  customerFirstName: string;
  customerLastName: string;
  deliveredByFirstName: string;
  deliveredByLastName: string;
  eventDate: string;
  serviceName: string;
  status: number;
}
