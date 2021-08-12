import { createMuiTheme } from "@material-ui/core/styles";
import { primaryColor, secondaryColor } from "./colors";
import "../index.css";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primaryColor,
      dark: "#2255FF",
    },
    secondary: {
      main: secondaryColor,
    },
  },
});

export default theme;
