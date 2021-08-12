import React from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@material-ui/core";
import useStyles from "./myActiveServices.style";
import {
  MyServicesResponseModel,
  MyServicesDataModel,
} from "../../../../interfaces/myServices";
import noDataImage from "../../../../assets/images/myServices/no-data.svg";
import plusIcon from "../../../../assets/images/myServices/plus.svg";
import ServiceListRow from "./serviceListRow/serviceListRow";
import { isEmpty } from "../../../../shared/hooks";
import { LogInUserTokens } from "../../../../interfaces/userModels";
import ReactLoading from "react-loading";
import { primaryColor } from "../../../../constants/colors";

interface MyServicesProps {
  mySubscriptionsData: MyServicesResponseModel;
  currentUser: LogInUserTokens;
  pageNumber: number;
  setAddServicesModal: (modal: boolean) => void;
}

const MyServicesTable: React.FC<MyServicesProps> = ({
  mySubscriptionsData,
  currentUser,
  pageNumber,
  setAddServicesModal,
}) => {
  const classes = useStyles();
  // console.log("Table props", mySubscriptionsData);
  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            {/* <TableCell></TableCell> */}
            <TableCell align="left" className={classes.tableHeadText}>
              Service PROVIDER
            </TableCell>
            <TableCell
              align="left"
              className={classes.tableHeadText}
              width="10%"
            >
              Address
            </TableCell>
            <TableCell align="left" className={classes.tableHeadText}>
              MONTHLY PRICE
            </TableCell>
            <TableCell align="left" className={classes.tableHeadText}>
              ACTIONS
            </TableCell>
            {/* <TableCell align="left" className={classes.tableHeadText}>
              Pricing
            </TableCell> */}
            {/* <TableCell align="left"></TableCell> */}
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        {!isEmpty(mySubscriptionsData) && mySubscriptionsData.data.length > 0 && (
          <TableBody className={classes.servicesTableBody}>
            {mySubscriptionsData.data.map((row: MyServicesDataModel, i) => (
              <ServiceListRow
                item={row}
                key={i}
                currentUser={currentUser}
                pageNumber={pageNumber}
              />
            ))}
          </TableBody>
        )}
      </Table>
      {isEmpty(mySubscriptionsData) && (
        <Box className={classes.loaderSpinnerWrapper}>
          <ReactLoading
            type="bars"
            color={primaryColor}
            height={100}
            width={100}
          />
        </Box>
      )}
      {!isEmpty(mySubscriptionsData) && (
        // {!isEmpty(myServicesData) && myServicesData.data.length === 0 && (
        <Box className={classes.noDataContainer}>
          <img src={noDataImage} alt="no data" />
          <Typography variant="h2" className={classes.noServiceTitle}>
            You haven't subscribed to any service yet!
          </Typography>
          <Typography variant="body1" className={classes.noServiceDescription}>
            Visit Gogh Marketplace to find and subscribe to a service.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            className={classes.addServiceButton}
          >
            <img src={plusIcon} alt="plus" />
            <Typography
              variant="body1"
              className={classes.addServiceButtonText}
              onClick={() => setAddServicesModal(true)}
            >
              Marketplace
            </Typography>
          </Button>
        </Box>
      )}

    </TableContainer>
  );
};

export default MyServicesTable;
