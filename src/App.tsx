import { useEffect } from "react";
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import "./App.css";
import { routers } from "./config/routers";
import { LogInUserTokens } from "./interfaces/userModels";
import AppointmentsPage from "./pages/appointments/appointments";
import CustomerAppointmentsPage from "./pages/customerPages/appointments/appointments";
import CustomerBillingPage from "./pages/customerPages/billing/billing";
import CustomerCommunicationMainPage from "./pages/customerPages/customerCommunication/customerCommunicationMain";
import MyServiceSubscriptionPage from "./pages/customerPages/myServiceSubscriptions/myServiceSubscription";
import Customers from "./pages/customers/customers";
import DashboardPage from "./pages/dashboard/dashboard";
import LoginPage from "./pages/login/login";
import ClientCommunicationMainPage from "./pages/myServices/clientCommunication/clientCommunicationMain";
import MyServicesPage from "./pages/myServices/myServices";
import ReportsPage from "./pages/reports/reports";
import SignupPage from "./pages/signup/signup";
import { useLocalStorage } from "./shared/hooks";


function App() {
  const history = useHistory();
  const location = useLocation();
  const [userToken, setUserToken] = useLocalStorage<LogInUserTokens>("userToken", {
    accessToken: "",
    refreshToken: "",
    role: 0,
  });

  useEffect(() => {
    if (userToken.accessToken !== "" && location.pathname === '/') {
      if (userToken.role === 1) {
        history.replace('/dashboard');
      } else {
        history.replace('/customerAppointment');
      }
    } else if (userToken.accessToken === "" && location.pathname !== '/signup') {
      history.replace('/');
    }
  }, []);
  return (
    <div>
      <Switch>
        <Route path={routers.login} exact component={LoginPage} />
        <Route path={routers.signup} component={SignupPage} />
        <Route path={routers.myServices} component={MyServicesPage} />
        <Route path={routers.clientCommunication} component={ClientCommunicationMainPage} />
        <Route path={routers.customers} component={Customers} />
        <Route path={routers.dashboard} component={DashboardPage} />
        <Route path={routers.appointment} component={AppointmentsPage} />
        <Route path={routers.reports} component={ReportsPage} />
        <Route path={routers.customerSubscription} component={MyServiceSubscriptionPage} />
        <Route path={routers.customerAppointment} component={CustomerAppointmentsPage} />
        <Route path={routers.customerBilling} component={CustomerBillingPage} />
        <Route path={routers.customerCommunication} component={CustomerCommunicationMainPage} />
      </Switch>
    </div>
  );
}

export default App;
