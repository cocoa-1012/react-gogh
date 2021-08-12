import { makeStyles, Theme } from "@material-ui/core";
import { primaryTextColor } from "../../constants/colors";

export default makeStyles((theme: Theme) => ({
    selectedBox: {
        width: "100%",
        height: 50,
        padding: "0 20px",
        outline: 0,
        borderRadius: 10,
        fontSize: 16,
        backgroundColor: "#fff",
        border: "2px solid #E4E6F2",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        cursor: "pointer",
        position: "relative",
      },
      floatingLabel: {
        fontSize: 16,
        color: "#999",
      },
      dropBox: {
          width: "100%",
          position: "absolute",
          top: 0,
          marginTop: 49,
          backgroundColor: "white",
          border: "1px solid #E4E6F2",
          padding: "10px 10px ",
          margin: 0,
          right: 0,
          "& > li": {
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              listStyle: "none",
              margin: 0,
              padding: "5px 10px",
              borderRadius: 5,
              "&:hover": {
                  backgroundColor: "#F6F6FB",
              }
          }
      },
      selectedValue: {
        fontSize: 16,
        fontWeight: 400,
        color: primaryTextColor,
      }
}));
