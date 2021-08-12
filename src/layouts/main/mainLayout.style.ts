import { createStyles } from "@material-ui/core";

export default createStyles({
  mainLayoutContainer: {
    width: "100%",
    position: "relative",
    backgroundColor: "#F6F6FB",
  },
  mainSection: {
    padding: "0 0 50px 280px",
    width: "100%",
    "@media (max-width: 780px)": {
      padding: 0,
    },
  },
});
