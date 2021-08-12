import { makeStyles, Theme } from "@material-ui/core";
import { primaryColor, primaryTextColor } from "../../../../constants/colors";
import illustrationBgImage from "../../../../assets/images/whole-background.svg";
import { Height } from "@material-ui/icons";

export default makeStyles((theme: Theme) => ({
  mainRoot: {
    display: "flex",
    alignItems: "stretch",
    flexDirection: "column",
    marginBottom: 0,
    marginRight: 20,
    height: 'calc(100vh - 220px)',
    "@media (max-width: 1050px)": {
      width: "100%",
      marginRight: 0,
      marginBottom: 10,
      order: 1,
    },
  },
  //header
  pageTitle: {
    fontSize: 36,
    fontWeight: "bold",
    color: primaryTextColor,
  },
  msgExtButtonText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#2DCA73",
    fontFamily: "Montserrat-SemiBold",
  },
  msgExtButton: {
    backgroundColor: "#D5F5E3",
    borderRadius: 5,
    padding: "5px 7px",
    marginTop: 5,
    marginBottom: 8,
    marginLeft: 40,
    cursor: "pointer",
  },
  threeDotMoreImg: {
    marginTop: 5,
    marginLeft: "auto",
  },
  //search
  searchRoot: {
    padding: '4px 4px',
    display: 'flex',
    alignItems: 'center',
    width: "100%",
    marginBottom: 20,
    marginTop: 20,
  },
  searchImg: {
    color: "#0000ff",
    position: "absolute",
  },
  searchInput: {
    marginLeft: theme.spacing(5),
    fontSize: 12,
    flex: 1,
  },
  //list
  listRoot: {
    width: '100%',
    flexGrow: 2,
    backgroundColor: "white",
    padding: "5px 10px 5px 0px",
    borderRadius: 10,
    overflowY: "auto",
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "2px 15px 0px 10px",
    "&:hover": {
      backgroundColor: "#F6F6FB",
      cursor: "pointer",
    },
    "@media (max-width: 1050px)": {
      width: "100%",
      marginRight: 0,
      marginBottom: 10,
      order: 1,
    },
  },
  listTexts: {
    width: 260
  },
  listUnderLineGroup: {
    width: 280,
    display: "flex",
    alignItems: "center",
    borderBottom: "solid 1px #F6F6FB",
    marginBottom: -1,
    marginLeft: 20,
  },
  onlineDot: {
    width: 10,
    height: 10,
    borderRadius: "100%",
    backgroundColor: "#2DCA73",
  }
  //unused css

}));
