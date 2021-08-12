import { createStyles } from "@material-ui/core";
import { primaryTextColor } from "../../constants/colors";

export default createStyles({
  sideBar: {
    height: "100vh",
    paddingTop: 80,
    position: "fixed",
    zIndex: 50,
    backgroundColor: "white",
    width: 280,
  },
  sidebarRouters: {
    width: "100%",
    padding: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
  },
  sidebarRouterItem: {
    listStyle: "none",
    width: "100%",
    padding: "0 20px",
  },
  routerLink: {
    padding: 15,
    margin: 0,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    borderRadius: 10,
    color: primaryTextColor,
  },
  routerLinkText: {
    color: primaryTextColor,
    fontSize: 14,
    fontWeight: "bold",
  },
  routerLinkIcon: {
    marginRight: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
