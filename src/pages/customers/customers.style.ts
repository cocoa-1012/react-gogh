import { makeStyles, Theme } from "@material-ui/core";
import { primaryColor, primaryTextColor } from "../../constants/colors";
import crmLogoBackground from "../../assets/images/customers/crm-logo-background.svg";

export default makeStyles((theme: Theme) => ({
  pageTitle: {
    fontSize: 36,
    fontWeight: "bold",
    color: primaryTextColor,
    marginBottom: 30,
  },
  pageContainer: {
    padding: "50px 40px",
    minHeight: "calc(100vh - 130px)",
  },
  customerDataCard: {
    padding: "20px 40px",
    borderRadius: 15,
    boxShadow: "none",
  },
  cardContent: {
    padding: 0,
    paddingBottom: "0px !important",
  },
  customerDataCardTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#B7BBD8",
  },
  customerData: {
    fontSize: 48,
    fontWeight: "bold",
    color: primaryTextColor,
  },
  cardBlock: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: 290,
  },
  customerRatioCard: {
    height: "100%",
    padding: "20px 40px",
    borderRadius: 15,
    boxShadow: "none",
  },
  crmLogoWrapper: {
    position: "relative",
    width: "100%",
    height: "100%",
    backgroundImage: `url(${crmLogoBackground})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    borderRadius: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  CRMlogoImage: {
    width: "80%",
    position: "absolute",
    bottom: 0,
  },
  pageSubtitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: primaryTextColor,
  },
  pageSubtitleRow: {
    margin: "50px 0",
  },
  serviceSelectWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginRight: 30,
  },
  customerTableActionWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  buttonIcon: {
    marginRight: 15,
  },
  addServiceButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "10px 15px",
  },
  customerTableTitleWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  customerSearchWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 50,
  },
  customerSearch: {
    border: "none",
    backgroundColor: "transparent",
    marginLeft: 20,
    fontSize: 14,
    fontWeight: 500,
    color: primaryTextColor,
    "&:focus": {
      outline: "none",
    },
  },
  progressBarContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  progressBarWrapper: {
    width: 140,
    height: 140,
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  customProgressBar: {
    position: "absolute",
  },
  customProgressText: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  pregressBarCustomerNumber: {
    fontSize: 25,
    fontWeight: "bold",
    color: primaryTextColor,
  },
  progressBarDesc: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#B7BBD8", 
  },
  percentageDescBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 20,
  },
  newCustomerPercentageColor: {
    width: 10,
    height: 10,
    borderRadius: "100%",
    backgroundColor: primaryColor,
  },
  newCustomerPercentageDesc: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#B7BBD8",
    marginLeft: 10,
  },
  returningCustomerPercentageColor: {
    width: 10,
    height: 10,
    borderRadius: "100%",
    backgroundColor: "#2DCA73",
  },
  returningCustomerPercentageDesc: {
    fontSize: 12,
    fontWeight: "bold",
    color: primaryTextColor,
    marginLeft: 10,
  },
}));
