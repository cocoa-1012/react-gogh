import { ReducersActionsModel } from './interfaces';

interface IAppointmentCustomerAddress {
  city: string;
  state: string;
  streetAddress: string;
}

interface IAppointmentData {
  customerAddress: IAppointmentCustomerAddress;
  customerFirstName: string;
  customerLastName: string;
  deliveredByFirstName: string;
  deliveredByLastName: string;
  eventDate: string;
  serviceName: string;
  status: number;
}

interface IAppointment {
  count: number;
  appointmentsData: IAppointmentData[];
  pageNumber: number;
  pageSize: number;
}

const INITIAL_STATE: IAppointment = {
  count: 0,
  appointmentsData: [],
  pageNumber: 1,
  pageSize: 1,
};

export const appointments = (
  state = INITIAL_STATE,
  action: ReducersActionsModel
) => {
  switch (action.type) {
    case 'GET_APPOINTMENTS_DATA':
      return {
        ...state,
        appointmentsData: action.payLoad,
      };
    default: {
      return state;
    }
  }
};
