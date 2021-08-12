import { makeStyles, Theme } from "@material-ui/core";
import { StyleProps } from "./interfaces";
import { primaryTextColor } from "../../constants/colors";

export default makeStyles((theme: Theme) => ({
  floatingInput: {
    width: "100%",
    height: 50,
    padding: "14px 0 0 10px",
    outline: 0,
    border: (props: StyleProps) => `2px solid ${props.borderColor}`,
    borderRadius: 10,
    fontSize: 16,
    fontFamily: "Arial, Helvetica, sans-serif",
    backgroundColor: "#fff",
    color: primaryTextColor,
  },
  floatingLabel: {
    fontSize: 16,
    padding: "0 12px",
    color: "#999",
    pointerEvents: "none",
    transformOrigin: "top left",
    transition: "all 0.2s ease-out",
    position: "absolute",
    transform: (props: StyleProps) => props.labelFloat,
  },
  floatingLabelInput: {
    width: "100%",
    margin: "10px 0",
    position: "relative",
    "&:focus": {
      floatingLabel: {
        transform: "translate(0, -12px) scale(0.75)",
      },
      floatingInput: {
        border: "2px solid #B7BBD8",
      },
    },
  },
}));
