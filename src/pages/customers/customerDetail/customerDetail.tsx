import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import { useParams, useHistory } from "react-router-dom";
import useStyles from "./customerDetail.style";
import BackImage from "../../../assets/images/signup/back.svg";
import threeDotIcon from "../../../assets/images/myServices/3-dots-menu.svg";
import phoneImage from "../../../assets/images/phone.svg";
import emailImage from "../../../assets/images/email.svg";
import locationImage from "../../../assets/images/address.svg";
import CustomAvatar from "../../../components/customAvatar/customAvatar";
import {
  CustomerResponseModel,
  CustomerDataModel,
} from "../../../interfaces/customers";
import { LogInUserTokens } from "../../../interfaces/userModels";
import messageIcon from "../../../assets/images/message.svg";
import callIcon from "../../../assets/images/call.svg";
import { useLocalStorage } from "../../../shared/hooks";
import { customerSortOrder } from "../../../constants/requestTypes";
import { CUSTOMERS } from "../../../store/actionNames/actionNames";
import { isEmpty } from "../../../shared/hooks";
import ReactLoading from "react-loading";
import { primaryColor } from "../../../constants/colors";
import noDataImage from "../../../assets/images/myServices/no-data.svg";

interface CustomerRootState {
  customers: CustomerResponseModel;
}

const CustomerDetail = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [userToken, setUserToken] = useLocalStorage<LogInUserTokens>(
    "userToken",
    {
      accessToken: "",
      refreshToken: "",
      role: 0,
    }
  );

  useEffect(() => {
    dispatch({
      type: CUSTOMERS,
      payLoad: {
        accessToken: userToken.accessToken,
        sort: customerSortOrder.createDateDesc,
        page: 1,
        pageSize: 10,
      },
    });
  }, []);

  const { customerID }: any = useParams();
  const customers: CustomerResponseModel = useSelector(
    (state: CustomerRootState) => state.customers
  );

  const returnDetailItem = (itemData: any, item: string) => {
    return itemData[item];
  };
  const customerDetailItem: CustomerDataModel | false =
    !isEmpty(customers) &&
    customers.data.filter(
      (customerItem: CustomerDataModel) => customerItem.id === customerID
    )[0];
  return (
    <Box className={classes.pageContainer}>
      <Box className={classes.pageHeadSection}>
        <Box
          className={classes.backButton}
          onClick={() => {
            history.push("/customers");
          }}
        >
          <img src={BackImage} alt="back button" />
          <span>Back</span>
        </Box>
      </Box>
      <Grid
        container
        direction="row"
        alignItems="flex-start"
        justify="space-between"
        spacing={3}
        className={classes.customerDetailsSection}
      >
        <Grid item xs={12} md={12} lg={4}>
          <Card className={classes.customerDetailCard}>
            <CardContent className={classes.cardContents}>
              {isEmpty(customers) && (
                <ReactLoading
                  type="spokes"
                  color={primaryColor}
                  height={30}
                  width={30}
                />
              )}
              {!isEmpty(customers) && (
                <>
                  <Box className={classes.customerActionButton}>
                    <img src={threeDotIcon} alt="three dots" />
                  </Box>
                  <CustomAvatar
                    firstName={returnDetailItem(
                      customerDetailItem,
                      "firstName"
                    )}
                    lastName={returnDetailItem(customerDetailItem, "lastName")}
                    fontSize={30}
                    size={140}
                  />
                  <Typography variant="h1" className={classes.customerName}>
                    {returnDetailItem(customerDetailItem, "firstName")}{" "}
                    {returnDetailItem(customerDetailItem, "lastName")}
                  </Typography>
                  <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                    className={classes.customerDetailPersonalInfoRow}
                  >
                    <img src={phoneImage} alt="phone" />
                    <Box className={classes.customerDetailPersonalInfoTextBox}>
                      <Typography
                        variant="body1"
                        className={classes.customerDetailPersonalInfoTextTitle}
                      >
                        PHONE NUMBER
                      </Typography>
                      <Typography
                        variant="body1"
                        className={classes.customerDetailPersonalInfoTextDesc}
                      >
                        {returnDetailItem(customerDetailItem, "phoneNumber")}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                    className={classes.customerDetailPersonalInfoRow}
                  >
                    <img src={emailImage} alt="email" />
                    <Box className={classes.customerDetailPersonalInfoTextBox}>
                      <Typography
                        variant="body1"
                        className={classes.customerDetailPersonalInfoTextTitle}
                      >
                        EMAIL
                      </Typography>
                      <Typography
                        variant="body1"
                        className={classes.customerDetailPersonalInfoTextDesc}
                      >
                        {returnDetailItem(customerDetailItem, "email")}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                    className={classes.customerDetailPersonalInfoRow}
                  >
                    <img src={locationImage} alt="address" />
                    <Box className={classes.customerDetailPersonalInfoTextBox}>
                      <Typography
                        variant="body1"
                        className={classes.customerDetailPersonalInfoTextTitle}
                      >
                        ADDRESS
                      </Typography>
                      <Typography
                        variant="body1"
                        className={classes.customerDetailPersonalInfoTextDesc}
                      >
                        {
                          returnDetailItem(customerDetailItem, "address")
                            .streetAddress
                        }
                        , {returnDetailItem(customerDetailItem, "address").city}
                        ,{" "}
                        {returnDetailItem(customerDetailItem, "address").state}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    alignItems="center"
                    justify="center"
                  >
                    <Box className={classes.customerContactButton}>
                      <img src={messageIcon} alt="message" />
                      <Typography
                        variant="body1"
                        className={classes.customerContactButtonText}
                      >
                        Message
                      </Typography>
                    </Box>
                    <Box className={classes.customerContactButton}>
                      <img src={callIcon} alt="call" />
                      <Typography
                        variant="body1"
                        className={classes.customerContactButtonText}
                      >
                        Call
                      </Typography>
                    </Box>
                  </Grid>
                </>
              )}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={12} lg={8} className={classes.customerServicesSection}>
          <Card className={classes.customerDetailCard}>
            <CardContent className={classes.cardContents}>
              <Typography
                variant="h1"
                className={classes.upcomingServicesCardTitle}
              >
                Upcoming services (0)
              </Typography>
              <TableContainer
                component={Paper}
                className={classes.tableContainer}
              >
                <Table className={classes.table}>
                  <TableHead>
                    <TableRow
                      className={classes.upComingServicesTableHeaderRow}
                    >
                      <TableCell
                        align="left"
                        className={classes.upComingServicesTableHeader}
                      >
                        SERVICE NAME
                      </TableCell>
                      <TableCell
                        align="right"
                        className={classes.upComingServicesTableHeader}
                      >
                        DATE
                      </TableCell>
                      <TableCell
                        align="left"
                        className={classes.upComingServicesTableHeader}
                      ></TableCell>
                    </TableRow>
                  </TableHead>
                </Table>
                <Box className={classes.noDataBox}>
                  {isEmpty(customers) && (
                    <ReactLoading
                      type="spokes"
                      color={primaryColor}
                      height={30}
                      width={30}
                    />
                  )}
                  {!isEmpty(customers) && (
                    <>
                      <img src={noDataImage} alt="no data" />
                      <Typography
                        variant="h2"
                        className={classes.noServiceTitle}
                      >
                        No services yet!
                      </Typography>
                    </>
                  )}
                </Box>
              </TableContainer>
            </CardContent>
          </Card>
          <Card className={classes.customerDetailCard}>
            <CardContent className={classes.cardContents}>
              <Typography
                variant="h1"
                className={classes.servicesHistoryCardTitle}
              >
                Service history (0)
              </Typography>
              <TableContainer
                component={Paper}
                className={classes.tableContainer}
              >
                <Table className={classes.table}>
                  <TableHead>
                    <TableRow
                      className={classes.upComingServicesTableHeaderRow}
                    >
                      <TableCell
                        align="left"
                        className={classes.upComingServicesTableHeader}
                      >
                        SERVICE NAME
                      </TableCell>
                      <TableCell
                        align="right"
                        className={classes.upComingServicesTableHeader}
                      >
                        CONTRACTOR
                      </TableCell>
                      <TableCell
                        align="left"
                        className={classes.upComingServicesTableHeader}
                      >
                        DATE
                      </TableCell>
                      <TableCell
                        align="left"
                        className={classes.upComingServicesTableHeader}
                      >
                        PAYMENT METHOD
                      </TableCell>
                      <TableCell align="left"></TableCell>
                    </TableRow>
                  </TableHead>
                </Table>
                <Box className={classes.noDataBox}>
                  {isEmpty(customers) && (
                    <ReactLoading
                      type="spokes"
                      color={primaryColor}
                      height={30}
                      width={30}
                    />
                  )}
                  {!isEmpty(customers) && (
                    <>
                      <img src={noDataImage} alt="no data" />
                      <Typography
                        variant="h2"
                        className={classes.noServiceTitle}
                      >
                        No services yet!
                      </Typography>
                    </>
                  )}
                </Box>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CustomerDetail;
