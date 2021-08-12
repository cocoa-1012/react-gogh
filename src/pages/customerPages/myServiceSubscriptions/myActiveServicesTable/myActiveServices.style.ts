import { makeStyles, Theme } from "@material-ui/core";
import { primaryTextColor } from "../../../../constants/colors";

export default makeStyles((theme: Theme) => ({
  tableContainer: {
    width: "100%",
    overflowX: "auto",
    borderRadius: 15,
    backgroundColor: "#fff",
    padding: "0 20px",
    marginTop: 30,
    paddingBottom: 75
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
    marginTop: 40,
    padding: "12px 20px",
    borderRadius: 10,
  },
  addServiceButtonText: {
    textTransform: "none",
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 15,
    marginRight: 15,
  },
  tableHeadText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#B7BBD8",
    maxWidth: 200,
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
    height: 200,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
