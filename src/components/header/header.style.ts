import { createStyles } from "@material-ui/core";
import { primaryTextColor } from "../../constants/colors";

export default createStyles({
  header: {
    width: "100%",
    position: "sticky",
    top: 0,
    zIndex: 100,
    backgroundColor: "white",
    borderBottom: "1px solid #F6F6FB",
    padding: "20px 35px",
    height: 80,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    "@media (max-width: 780px)": {
      height: "auto",
    },
    "@media (max-width: 590px)": {
      flexDirection: "column",
    },
  },
  logoRowWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    "@media (max-width: 590px)": {
      alignSelf: "flex-start",
    },
  },
  logoImage: {
    width: 100,
  },
  headerMenuIcon: {
    marginRight: 35,
    cursor: "pointer",
    display: "none",
    "@media (max-width: 780px)": {
      display: "flex",
    },
  },
  profileSection: {
    height: "100%",
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    "@media (max-width: 590px)": {
      alignSelf: "flex-end",
      marginTop: 10,
    },
  },
  headerLogoWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  profileSectionItem: {
    height: "100%",
    position: "relative",
    padding: "0 30px",
    borderLeft: "1px solid #F8F8FA",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    "@media (max-width: 430px)": {
      padding: "0 10px",
    },
  },
  profilePhotoWrapper: {
    display: "flex",
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    width: 35,
    height: 35,
    borderRadius: 50,
    boxShadow: "4px 2px 15px #cacae7",
    cursor: "pointer",
  },
  profilePhoto: {
    width: "100%",
    height: "100%",
    borderRadius: "100%",
  },
  profileName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#3A3F5C",
    marginLeft: 15,
  },
  notificationAlert: {
    width: 10,
    height: 10,
    borderRadius: 50,
    border: "2px solid white",
    backgroundColor: "#ED604E",
    position: "absolute",
    marginLeft: 13,
    marginBottom: 13,
  },
  userActionBox: {
    width: 200,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "white",
    position: "absolute",
    right: 0,
    top: 0,
    marginRight: 80,
    marginTop: 50,
    boxShadow: "4px 2px 15px #dcdcef",
  },
  tooltipArrow: {
    position: "absolute",
    borderWidth: 10,
    borderStyle: "solid",
    borderColor: "transparent transparent white transparent",
    right: 0,
    top: 0,
    marginTop: -20,
    marginRight: 25,
  },
  userActionButtonsList: {
    padding: 0,
  },
  userActionButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    cursor: "pointer",
    borderRadius: 5,
    padding: 5,
    "&:hover": {
      backgroundColor: "#F6F6FB",
    }
  },
  logoutIcon: {
    width: 20,
    marginRight: 10,
  },
});
