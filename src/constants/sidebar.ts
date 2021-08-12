import { routers } from "../config/routers";

export const pagesData = [
    {
        name: "Dashboard",
        link: routers.dashboard,
    }, {
        name: "Appointments",
        link: routers.appointment,
    }, {
        name: "Customers",
        link: routers.customers,
    }, {
        name: "My Services",
        link: routers.myServices,
    }, {
        name: "Reports & Transactions",
        link: routers.reports,
    },
];

export const customerPagesData = [
    {
        name: "CustomerAppointments",
        link: routers.customerAppointment,
    }, {
        name: "My Service Subscriptions",
        link: routers.customerSubscription,
    }, {
        name: "Billing & Transactions",
        link: routers.customerBilling,
    },
];