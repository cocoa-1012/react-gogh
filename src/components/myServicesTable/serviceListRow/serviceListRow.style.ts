import { makeStyles, Theme } from "@material-ui/core";
import { primaryColor, primaryTextColor } from "../../../constants/colors";

interface StyleProps {
  actionsBox: boolean;
  descriptionLimit: boolean;
}

export default makeStyles((theme: Theme) => ({
  galleryImage: {
    width: 60,
    height: 40,
    borderRadius: 0,
    margin: "0px",
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
    paddingRight: 50
  },
  rowActionsBox: {
    width: 170,
    height: 95,
    padding: 5,
    backgroundColor: "white",
    position: "absolute",
    right: 35,
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
  serviceTableText: {
    fontSize: 14,
    fontWeight: 500,
    color: primaryTextColor,
    height: "100%",
    maxWidth: 400,
    padding: 0,
    paddingLeft: 15,
  },
  hourlyTextColor: {
    color: "#2DCA73",
  },
  imageGallery: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderBottom: "none",
    "& > img:hover": {
      backgroundColor: "#ffffff",
      width: 100,
      height: 60,
      marginLeft: -30,
      marginRight: -10,
      zIndex: 5,
    },
    padding: 0,
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
  description: {
    width: (props: StyleProps) => (props.descriptionLimit ? "auto" : 390),
    whiteSpace: "pre-wrap",
    overflow: "hidden",
    textOverflow: (props: StyleProps) =>
      props.descriptionLimit ? "" : "ellipsis",
  },
  readMore: {
    fontSize: 14,
    fontWeight: 600,
    color: primaryColor,
    cursor: "pointer",
  },
}));
