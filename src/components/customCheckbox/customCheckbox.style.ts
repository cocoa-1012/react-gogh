import { makeStyles, Theme } from "@material-ui/core";
import { primaryTextColor } from "../../constants/colors";

interface StyleProps {
  color?: string;
}

export default makeStyles((theme: Theme) => ({
    checkboxContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      },
      checkbox: {
        width: 18,
        height: 18,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        cursor: "pointer",
        border: (props: StyleProps) => !props.color ? "2px solid #2255ff" : props.color === "primary" ? "2px solid #2255ff" : "2px solid #E4E6F2",
      },
      checkboxLabel: {
        fontSize: 12,
        marginLeft: 10,
        color: primaryTextColor,
        fontWeight: "bold",
      },
}));
