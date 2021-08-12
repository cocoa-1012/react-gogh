import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Grid, Select } from "@material-ui/core";
import useStyles from "./customersTable.style";
import {
  CustomerResponseModel,
  CustomerDataModel,
} from "../../../interfaces/customers";
import { Link } from "react-router-dom";
import plusIcon from "../../../assets/images/myServices/plus.svg";
import { isEmpty } from "../../../shared/hooks";
import { LogInUserTokens } from "../../../interfaces/userModels";
import ReactLoading from "react-loading";
import { primaryColor } from "../../../constants/colors";
import messageIcon from "../../../assets/images/message.svg";
import importIcon from "../../../assets/images/import.svg";
import moment from "moment";
import CustomAvatar from "../../customAvatar/customAvatar";
import MaterialTable from "material-table";
import callIcon from "../../../assets/images/call.svg";
import { MyServiceSubscriptionsModel } from "../../../interfaces/customers";
import RowActionWrapper from "./components/rowActionWrapper";
import { TableIcons } from "./components/tableIcons";

interface CustomersProps {
  customersData: CustomerResponseModel;
  currentUser: LogInUserTokens;
  pageNumber: number;
  setAddCustomersModal: (modal: boolean) => void;
  sort: number;
  setIsEdit: (isEdit: boolean) => void;
  setEditItem: (item: CustomerDataModel) => void;
}

const CustomersTable: React.FC<CustomersProps> = ({
  customersData,
  currentUser,
  pageNumber,
  setAddCustomersModal,
  sort,
  setIsEdit,
  setEditItem,
}) => {
  const classes = useStyles();
  const [customersDataTable, setCustomersDataTable] = useState<
    CustomerDataModel[]
  >(customersData.data);

  useEffect(() => {
    setCustomersDataTable(customersData.data);
  }, [customersData]);

  const quickSearchByServices = (service: string | unknown) => {
    if (service === "No contract") {
      setCustomersDataTable(
        customersData.data.filter(
          (item: CustomerDataModel) =>
            item.myServiceSubscriptions === null ||
            item.myServiceSubscriptions.length === 0
        )
      );
    } else {
      setCustomersDataTable(customersData.data);
    }
  };

  const serviceStatus = (services: MyServiceSubscriptionsModel[] | null) => {
    return (
      <Box className={classes.serviceStatusWrapper}>
        <Box
          className={classes.statusBar}
          style={{
            backgroundColor:
              services === null || services.length === 0
                ? "#B7BBD8"
                : "#2DCA73",
          }}
        ></Box>
        <Typography
          variant="body1"
          className={classes.statusText}
          style={{
            color:
              services === null || services.length === 0
                ? "#B7BBD8"
                : "#3A3F5C",
          }}
        >
          {services === null || services.length === 0
            ? "No contract"
            : "Active"}
        </Typography>
      </Box>
    );
  };

  return (
    <>
      <Grid
        container
        direction="row"
        alignItems="center"
        justify="flex-end"
        className={classes.pageSubtitleRow}
      >
        <Grid className={classes.customerTableActionWrapper}>
          <Box className={classes.serviceSelectWrapper}>
            <Typography variant="body1" className={classes.serviceSelectText}>
              Services:
            </Typography>
            <Select
              native
              onChange={(e) => quickSearchByServices(e.target.value)}
              inputProps={{
                name: "age",
                id: "age-native-simple",
              }}
            >
              <option value={10}>All services</option>
              <option value={20}>No contract</option>
            </Select>
          </Box>
          <Button
            variant="outlined"
            color="primary"
            className={classes.whiteButton}
          >
            <img
              src={messageIcon}
              alt="message"
              className={classes.buttonIcon}
            />
            Send batch message
          </Button>
          <Button
            variant="outlined"
            color="primary"
            className={classes.whiteButton}
          >
            <img src={importIcon} alt="import" className={classes.buttonIcon} />
            Import
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.addServiceButton}
            onClick={() => setAddCustomersModal(true)}
          >
            <img src={plusIcon} alt="plus" />
            <Typography variant="body1" className={classes.addServiceText}>
              New customer
            </Typography>
          </Button>
        </Grid>
        <Box className={classes.materialGridTableContainer}>
          {isEmpty(customersData) && (
            <Box className={classes.loaderSpinnerWrapper}>
              <ReactLoading
                type="bars"
                color={primaryColor}
                height={100}
                width={100}
              />
            </Box>
          )}
          {!isEmpty(customersData) && (
            <MaterialTable
              title="All customers"
              icons={TableIcons}
              columns={[
                {
                  field: "name",
                  title: "NAME",
                  render: (rowdata: any) => (
                    <Box className={classes.customerData}>
                      <CustomAvatar
                        size={30}
                        firstName={rowdata.name.split(" ")[0]}
                        lastName={rowdata.name.split(" ")[1]}
                      />
                      <Link
                        to={`customers/details/${rowdata.id}`}
                        className={classes.customerName}
                      >
                        {rowdata.name}
                      </Link>
                    </Box>
                  ),
                },
                {
                  field: "lastActivity",
                  title: "LAST ACTIVITY",
                  cellStyle: {
                    fontSize: 14,
                    fontWeight: 500,
                    color: "#3A3F5C",
                  },
                },
                {
                  field: "serviceStatus",
                  title: "SERVICE STATUS",
                  render: (rowdata: any) =>
                    serviceStatus(rowdata.serviceStatus),
                },
                {
                  field: "totalRevenue",
                  title: "TOTAL REVENUE",
                  cellStyle: {
                    fontSize: 14,
                    fontWeight: 500,
                    color: "#3A3F5C",
                  },
                },
                {
                  field: "totalVisits",
                  title: "TOTAL VISITS",
                  cellStyle: {
                    fontSize: 14,
                    fontWeight: 500,
                    color: "#3A3F5C",
                  },
                },
                {
                  field: "actions",
                  title: "ACTIONS",
                  render: (rowdata: any) => (
                    <Box className={classes.actionRow}>
                      <Box className={classes.rowActionIconButton}>
                        <img src={messageIcon} alt="message" />
                        <Typography
                          variant="body1"
                          className={classes.rowActionButtonText}
                        >
                          Message
                        </Typography>
                      </Box>
                      <Box className={classes.rowActionIconButton}>
                        <img src={callIcon} alt="call" />
                        <Typography
                          variant="body1"
                          className={classes.rowActionButtonText}
                        >
                          Call
                        </Typography>
                      </Box>
                      <RowActionWrapper
                        item={
                          customersData.data.filter(
                            (customer: CustomerDataModel) =>
                              customer.id === rowdata.id
                          )[0]
                        }
                        setIsEdit={setIsEdit}
                        setEditItem={setEditItem}
                        setAddCustomersModal={setAddCustomersModal}
                        currentUser={currentUser}
                        pageNumber={pageNumber}
                        sort={sort}
                        customerID={rowdata.id}
                      />
                    </Box>
                  ),
                },
              ]}
              data={
                customersDataTable
                  ? customersDataTable.map((item: CustomerDataModel) => {
                    return {
                      id: item.id,
                      name: `${item.firstName.length < 10 ? item.firstName : item.firstName.slice(0, 10) + "..."} ${item.lastName.length < 10 ? item.lastName : item.lastName.slice(0, 10) + "..."}`,
                      lastActivity: moment(item.lastActivity).fromNow(),
                      serviceStatus: item.myServiceSubscriptions,
                      totalRevenue: `$${item.totalRevenue}`,
                      totalVisits: item.totalVisits,
                      actions: "actions",
                    };
                  })
                  : []
              }
              options={{
                selection: true,
                headerStyle: {
                  fontSize: 11,
                  fontWeight: "bold",
                  color: "#B7BBD8",
                },
              }}
            />
          )}
        </Box>
      </Grid>
    </>
  );
};

export default CustomersTable;
