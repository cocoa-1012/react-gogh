import { makeStyles, Theme } from "@material-ui/core";
import { primaryTextColor, primaryColor } from "../../../constants/colors";

export default makeStyles((theme: Theme) => ({
  tableContainer: {
    width: "100%",
    overflowX: "auto",
    borderRadius: 15,
    backgroundColor: "#fff",
    padding: "0 20px",
    marginTop: 30,
  },
  pageSubtitleRow: {
    margin: "50px 0",
  },
  customerTableActionWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    "@media (max-width: 1050px)": {
      flexDirection: "column",
      width: "100%",
    },
  },
  serviceSelectWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginRight: 30,
    "@media (max-width: 1050px)": {
      width: "100%",
      marginRight: 0,
      order: 2,
      marginTop: 20,
    },
  },
  serviceSelectText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#B7BBD8",
    marginRight: 10,
  },
  whiteButton: {
    color: primaryColor,
    backgroundColor: "white",
    border: "none",
    boxShadow: "2px 3px 15px #999999",
    padding: "10px 15px",
    fontSize: 14,
    fontWeight: "bold",
    marginRight: 30,
    "&:hover": {
      border: "none",
    },
    "@media (max-width: 1050px)": {
      width: "100%",
      marginRight: 0,
      marginBottom: 10,
      order: 1,
    },
  },
  buttonIcon: {
    marginRight: 15,
  },
  addServiceText: {
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 15,
  },
  tableElement: {
    display: "flex",
    flexDirection: "column",
  },
  tableHead: {
    width: "100%",
  },
  noDataContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "75px 0",
  },
  tableRow: {
    width: "100%",
  },
  noServiceTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: primaryTextColor,
    marginTop: 30,
  },
  noServiceDescription: {
    fontSize: 16,
    fontWeight: 400,
    color: primaryTextColor,
    marginTop: 10,
  },
  addServiceButton: {
    padding: 10,
    "@media (max-width: 1050px)": {
      width: "100%",
      padding: 10,
      order: 1,
    },
  },
  addServiceButtonText: {
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 15,
  },
  tableHeadText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#B7BBD8",
  },
  servicesTableBody: {
    width: "100%",
    minWidth: "100%",
    overflowX: "auto",
  },
  table: {
    minWidth: 950,
  },
  loaderSpinnerWrapper: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  sortIcon: {
    marginRight: 10,
  },
  tableHeaderWithSort: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    cursor: "pointer",
  },
  serviceStatusWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  statusBar: {
    width: 10,
    height: 10,
    borderRadius: "100%",
  },
  statusText: {
    fontSize: 14,
    fontWeight: 500,
    marginLeft: 15,
  },
  materialGridTableContainer: {
    width: "100%",
    backgroundColor: "white",
    marginTop: 50,
    padding: 20,
    "& .MuiPaper-elevation2": {
      boxShadow: "none",
      border: "none",
    },
    "& .MuiToolbar-regular": {
      paddingRight: "0px !important",
      paddingLeft: "0px !important",
      "& h6": {
        fontSize: 24,
        fontWeight: "bold",
        color: primaryTextColor,
      },
    },
    "@media (max-width: 1050px)": {
      marginTop: 20,
    },
  },
  customerData: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  customerName: {
    fontSize: 14,
    fontWeight: "bold",
    color: primaryTextColor,
    marginLeft: 20,
    cursor: "pointer",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  rowActionIconButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    cursor: "pointer",
    marginRight: 15,
  },
  rowActionButtonText: {
    fontSize: 14,
    fontWeight: "bold",
    color: primaryTextColor,
    marginLeft: 14,
  },
  actionRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  }
}));
