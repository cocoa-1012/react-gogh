import { makeStyles, Theme } from "@material-ui/core";
import { primaryColor, primaryTextColor } from "../../../constants/colors";

interface StyleProps {
  isHourly: boolean;
}

export default makeStyles((theme: Theme) => ({
  pageTitle: {
    fontSize: 36,
    fontWeight: "bold",
    color: primaryTextColor,
    marginBottom: 30,
    marginLeft: 40,
  },
  pageContainer: {
    padding: "50px 40px",
    minHeight: "calc(100vh - 130px)",
    "@media (max-width: 780px)": {
      padding: "20px 10px",
    },
  },
  mySubscriptionsInfoSection: {
    backgroundColor: "#2C314D",
    width: "100%",
    height: "250px",
    borderRadius: 15,
    display: "flex",
    flexDirection: "row",
    position: "relative",
    "@media (max-width: 780px)": {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  mySubscriptionsInfoBlock: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    marginLeft: 60,
    width: 270,
    padding: "50px 0",
    zIndex: 10,
    "@media (max-width: 780px)": {
      justifyContent: "center",
      alignItems: "center",
      margin: 0,
      padding: "20px 0",
    },
  },
  mySubscriptionsInfoName: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#707070",
    margin: 0,
  },
  servicesTitleSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 50,
    "@media (max-width: 780px)": {
      flexDirection: "column",
    },
  },
  mySubscriptionsInfoTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    margin: 0,
    marginTop: 0,
  },
  mySubscriptionsInfoDescription: {
    fontSize: 18,
    fontWeight: 600,
    color: "#cccccc",
    margin: 0,
    "@media (max-width: 780px)": {
      textAlign: "center",
    },
  },
  serviceButtonWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    "@media (max-width: 780px)": {
      width: "100%",
      justifyContent: "flex-end",
      marginTop: 20,
    },
    "@media (max-width: 450px)": {
      flexDirection: "column",
    },
  },
  mySubscriptionsInfoBackImage: {
    position: "absolute",
    right: -27,
    bottom: -55,
    zIndex: 5,
  },
  mySubscriptionsSubtitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: primaryTextColor,
  },
  viewBillingButton: {
    backgroundColor: "white",
    padding: "10px 15px",
    marginRight: 50,
    "@media (max-width: 450px)": {
      marginRight: 0,
      width: "100%",
    },
  },
  findServiceButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "10px 15px",
    "@media (max-width: 450px)": {
      width: "100%",
      marginTop: 10,
    },
  },
  findServiceText: {
    textTransform: "none",
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 15,
  },
  viewBillingButtonText: {
    textTransform: "none",
    fontSize: 14,
    fontWeight: "bold",
  },
  addServicesModal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addServicesModalBody: {
    width: 1148,
    padding: 50,
    borderRadius: 20,
    backgroundColor: "white",
  },
  addServicesModalTitle: {
    fontSize: 36,
    fontWeight: "bold",
    color: primaryTextColor,
  },
  addServicesModalSubTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: primaryTextColor,
    marginBottom: 10,
    marginTop: 20,
  },
  addServicesFormWrapper: {
    marginTop: 20,
  },
  addServicesHourlyText: {
    color: (props: StyleProps) => !props.isHourly ? primaryColor : primaryTextColor,
  },
  addServicesFixedText: {
    color: (props: StyleProps) => !props.isHourly ? primaryTextColor : primaryColor,
  },
}));
