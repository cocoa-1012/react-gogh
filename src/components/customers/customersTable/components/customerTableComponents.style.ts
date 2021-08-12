import { makeStyles, Theme } from "@material-ui/core";
import { primaryColor, primaryTextColor } from "../../../../constants/colors";

interface StyleProps {
  actionsBox?: boolean;
}

export default makeStyles((theme: Theme) => ({
  galleryImage: {
    width: 60,
    height: 40,
    borderRadius: 10,
    margin: "0 5px",
  },
  rearrangeButton: {
    cursor: "pointer",
  },
  rowActionButton: {
    width: 30,
    height: 30,
    borderRadius: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#F6F6FB",
    },
  },
  rowActionsWrapper: {
    position: "relative",
    width: 40,
  },
  rowActionsBox: {
    width: 170,
    height: 95,
    padding: 5,
    backgroundColor: "white",
    position: "absolute",
    right: 0,
    zIndex: 10,
    marginTop: -4,
    boxShadow: "6px 4px 35px #cccccc",
    display: (props: StyleProps) => (props.actionsBox ? "flex" : "none"),
  },
  tooltipArrow: {
    position: "absolute",
    borderWidth: 5,
    borderStyle: "solid",
    borderColor: "transparent transparent white transparent",
    right: 0,
    top: 0,
    marginTop: -10,
    marginRight: 25,
  },
  actionListWrapper: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 0,
    margin: 0,
  },
  actionText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#707070",
    marginLeft: 15,
    "&:hover": {
      color: primaryTextColor,
    },
  },
  actionItem: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "10px 15px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#F6F6FB",
    },
  },
  tableRow: {
    "&:hover": {
      backgroundColor: "#F6F6FB",
    },
  },
  tableCell: {
    fontSize: 14,
    fontWeight: 500,
    color: primaryTextColor,
    height: "100%",
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
  hourlyTextColor: {
    color: "#2DCA73",
  },
  imageGallery: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  imageExtButton: {
    backgroundColor: "#E8EDFF",
    borderRadius: 5,
    padding: 13,
    cursor: "pointer",
  },
  imageExtButtonText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#2255FF",
  },
  readMore: {
    fontSize: 14,
    fontWeight: 600,
    color: primaryColor,
    cursor: "pointer",
  },
  rowActionIconButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    cursor: "pointer",
  },
  rowActionButtonText: {
    fontSize: 14,
    fontWeight: "bold",
    color: primaryTextColor,
    marginLeft: 14,
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
}));
