import MainLayout from "../../layouts/main/mainLayout";
import {
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";
import CustomerDetail from "./customerDetail/customerDetail";
import CustomerMainPage from "./customersMain/customersMain";

const Customers = () => {
  const { path } = useRouteMatch();

  return (
    <MainLayout currentRouter="Customers">
      <Switch>
        <Route exact path={path}>
          <CustomerMainPage />
        </Route>
        <Route path={`${path}/details/:customerID`}>
          <CustomerDetail />
        </Route>
      </Switch>
    </MainLayout>
  );
};

export default Customers;
