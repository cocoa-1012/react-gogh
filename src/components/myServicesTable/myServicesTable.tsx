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
import useStyles from "./myServices.style";
import {
  MyServicesResponseModel,
  MyServicesDataModel,
} from "../../interfaces/myServices";
import noDataImage from "../../assets/images/myServices/no-data.svg";
import plusIcon from "../../assets/images/myServices/plus.svg";
import ServiceListRow from "./serviceListRow/serviceListRow";
import { isEmpty } from "../../shared/hooks";
import { LogInUserTokens } from "../../interfaces/userModels";
import ReactLoading from "react-loading";
import { primaryColor } from "../../constants/colors";

interface MyServicesProps {
  myServicesData: MyServicesResponseModel;
  currentUser: LogInUserTokens;
  pageNumber: number;
  setIsEdit: (isEdit: boolean) => void;
  setEditItem: (item: MyServicesDataModel) => void;
  setAddServicesModal: (modal: boolean) => void;
}

const MyServicesTable: React.FC<MyServicesProps> = ({
  myServicesData,
  currentUser,
  pageNumber,
  setIsEdit,
  setEditItem,
  setAddServicesModal,
}) => {
  const classes = useStyles();
  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell align="left" className={classes.tableHeadText}>
              Service
            </TableCell>
            <TableCell
              align="left"
              className={classes.tableHeadText}
              width="40%"
            >
              Description
            </TableCell>
            <TableCell align="left" className={classes.tableHeadText}>
              Photo gallery
            </TableCell>
            <TableCell align="left" className={classes.tableHeadText}>
              Subscribers
            </TableCell>
            <TableCell align="left" className={classes.tableHeadText}>
              Pricing
            </TableCell>
            <TableCell align="left"></TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        {!isEmpty(myServicesData) && myServicesData.data.length > 0 && (
          <TableBody className={classes.servicesTableBody}>
            {myServicesData.data.map((row: MyServicesDataModel, i) => (
              <ServiceListRow
                item={row}
                key={i}
                currentUser={currentUser}
                pageNumber={pageNumber}
                setIsEdit={setIsEdit}
                setEditItem={setEditItem}
                setAddServicesModal={setAddServicesModal}
              />
            ))}
          </TableBody>
        )}
      </Table>
      {isEmpty(myServicesData) && (
        <Box className={classes.loaderSpinnerWrapper}>
          <ReactLoading
            type="bars"
            color={primaryColor}
            height={100}
            width={100}
          />
        </Box>
      )}
      {!isEmpty(myServicesData) && myServicesData.data.length === 0 && (
        <Box className={classes.noDataContainer}>
          <img src={noDataImage} alt="no data" />
          <Typography variant="h2" className={classes.noServiceTitle}>
            No service added yet!
          </Typography>
          <Typography variant="body1" className={classes.noServiceDescription}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
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
              Add a service
            </Typography>
          </Button>
        </Box>
      )}
    </TableContainer>
  );
};

export default MyServicesTable;
