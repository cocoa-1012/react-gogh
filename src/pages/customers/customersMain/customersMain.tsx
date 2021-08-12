import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  Hidden,
} from "@material-ui/core";
import useStyles from "./customersMain.style";
import totalCustomersImage from "../../../assets/images/customers/total-customers.svg";
import activeServices from "../../../assets/images/customers/active-services.svg";
import { CUSTOMERS } from "../../../store/actionNames/actionNames";
import { useLocalStorage } from "../../../shared/hooks";
import { LogInUserTokens } from "../../../interfaces/userModels";
import { customerSortOrder } from "../../../constants/requestTypes";
import {
  CustomerResponseModel,
  CustomerDataModel,
} from "../../../interfaces/customers";
import CustomersTable from "../../../components/customers/customersTable/customersTable";
import CustomersActionModal from "../../../components/customers/customersActionModal/customersActionModal";
import ReactLoading from "react-loading";
import { primaryColor } from "../../../constants/colors";
import { isEmpty } from "../../../shared/hooks";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import customerHeadImage from "../../../assets/images/customers.svg";

interface CustomerRootState {
  customers: CustomerResponseModel;
}

const CustomerMainPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [page, setPage] = useState<number>(1);
  const [userToken, setUserToken] = useLocalStorage<LogInUserTokens>(
    "userToken",
    {
      accessToken: "",
      refreshToken: "",
      role: 0,
    }
  );
  const [sort, setSort] = useState<number>(customerSortOrder.createDateDesc);
  const [addCustomersModal, setAddCustomersModal] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editItem, setEditItem] = useState<CustomerDataModel>();
  const customer = useSelector((state: CustomerRootState) => state.customers);

  useEffect(() => {
    dispatch({
      type: CUSTOMERS,
      payLoad: {
        accessToken: userToken.accessToken,
        sort: sort,
        page: page,
        pageSize: 10,
      },
    });
  }, []);
  const percentage = 0;
  return (
    <Grid className={classes.pageContainer}>
      <Typography variant="h1" className={classes.pageTitle}>
        CRM
      </Typography>
      <Grid container direction="row" spacing={3}>
        <Grid item xs={12} md={6} lg={3} className={classes.cardBlock}>
          <Card className={classes.customerDataCard}>
            <CardContent className={classes.cardContent}>
              <Typography
                variant="body1"
                className={classes.customerDataCardTitle}
              >
                Total customers
              </Typography>
              <Grid
                container
                direction="row"
                alignItems="center"
                justify="space-between"
              >
                {isEmpty(customer) && (
                  <ReactLoading
                    type="spokes"
                    color={primaryColor}
                    height={30}
                    width={30}
                  />
                )}
                {!isEmpty(customer) && (
                  <Typography variant="h1" className={classes.customerData}>
                    {customer.data.length}
                  </Typography>
                )}
                <img src={totalCustomersImage} alt="total customers" />
              </Grid>
            </CardContent>
          </Card>
          <Card className={classes.customerDataCard}>
            <CardContent className={classes.cardContent}>
              <Typography
                variant="body1"
                className={classes.customerDataCardTitle}
              >
                Active services
              </Typography>
              <Grid
                container
                direction="row"
                alignItems="center"
                justify="space-between"
              >
                {isEmpty(customer) && (
                  <ReactLoading
                    type="spokes"
                    color={primaryColor}
                    height={30}
                    width={30}
                  />
                )}
                {!isEmpty(customer) && (
                  <>
                    {customer.data.length > 0 && (
                      <Typography variant="h1" className={classes.customerData}>
                        {
                          customer.data.filter(
                            (item: CustomerDataModel) =>
                              item.myServiceSubscriptions !== null
                          ).length
                        }
                      </Typography>
                    )}
                  </>
                )}
                <img src={activeServices} alt="active services" />
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={3} className={classes.cardBlock}>
          <Card className={classes.customerRatioCard}>
            <CardContent className={classes.cardContent}>
              <Typography
                variant="body1"
                className={classes.customerDataCardTitle}
              >
                Customers ratio
              </Typography>
              <Box className={classes.progressBarContainer}>
                <Box className={classes.progressBarWrapper}>
                  <Box className={classes.customProgressBar}>
                    <CircularProgressbar
                      value={percentage}
                      strokeWidth={15}
                      styles={buildStyles({
                        pathColor: "#2DCA73",
                        trailColor: "#2255FF",
                        strokeLinecap: "butt",
                      })}
                    />
                  </Box>
                  <Box className={classes.customProgressText}>
                    {isEmpty(customer) && (
                      <ReactLoading
                        type="spokes"
                        color={primaryColor}
                        height={30}
                        width={30}
                      />
                    )}
                    {!isEmpty(customer) && (
                      <>
                        <Typography
                          variant="body1"
                          className={classes.pregressBarCustomerNumber}
                        >
                          {customer.data.length}
                        </Typography>
                        <Typography
                          variant="body1"
                          className={classes.progressBarDesc}
                        >
                          Total
                        </Typography>
                      </>
                    )}
                  </Box>
                </Box>
              </Box>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid item xs={5} className={classes.percentageDescBox}>
                  <Box className={classes.newCustomerPercentageColor}></Box>
                  <Typography
                    variant="body1"
                    className={classes.newCustomerPercentageDesc}
                  >
                    New
                  </Typography>
                </Grid>
                <Grid item xs={5} className={classes.percentageDescBox}>
                  <Box
                    className={classes.returningCustomerPercentageColor}
                  ></Box>
                  <Typography
                    variant="body1"
                    className={classes.returningCustomerPercentageDesc}
                  >
                    Returning
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Hidden mdDown>
          <Grid item xs={6}>
            <Box className={classes.crmLogoWrapper}>
              <img
                src={customerHeadImage}
                alt="CRM logo"
                className={classes.CRMlogoImage}
              />
            </Box>
          </Grid>
        </Hidden>
      </Grid>
      <CustomersTable
        customersData={customer}
        currentUser={userToken}
        pageNumber={page}
        sort={sort}
        setAddCustomersModal={setAddCustomersModal}
        setIsEdit={setIsEdit}
        setEditItem={setEditItem}
      />
      <CustomersActionModal
        currentUser={userToken}
        addCustomersModal={addCustomersModal}
        setAddCustomersModal={setAddCustomersModal}
        page={page}
        sort={sort}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
        editItem={editItem}
      />
    </Grid>
  );
};

export default CustomerMainPage;
