import { makeStyles, Theme } from "@material-ui/core";
import { primaryTextColor } from "../../constants/colors";

export default makeStyles((theme: Theme) => ({
  pageTitle: {
    fontSize: 36,
    fontWeight: "bold",
    color: primaryTextColor,
    marginBottom: 30,
  },
}));
