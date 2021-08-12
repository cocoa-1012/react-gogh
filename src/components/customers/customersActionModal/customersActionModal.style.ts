import { makeStyles, Theme } from "@material-ui/core";
import { primaryColor, primaryTextColor, secondaryColor } from "../../../constants/colors";

export default makeStyles((theme: Theme) => ({
  addCustomersModal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px 0",
  },
  addCustomersModalBody: {
    width: 610,
    padding: 50,
    borderRadius: 20,
    backgroundColor: "white",
    position: "relative",
    margin: "0 10px",
    maxHeight: "100vh",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "@media (max-width: 430px)": {
      padding: "30px 10px",
      margin: 0,
    },
  },
  closeModalButton: {
    width: 40,
    height: 40,
    borderRadius: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    backgroundColor: "#F6F6FB",
    position: "absolute",
    top: 0,
    right: 0,
    margin: 20,
  },
  modalTitle: {
    fontSize: 36,
    fontWeight: "bolder",
    color: primaryTextColor,
    marginBottom: 50,
  },
  inputSectionLabel: {
    fontSize: 14,
    fontWeight: "bold",
    color: primaryTextColor,
    width: "100%",
    textAlign: "left",
  },
  inputErrorMessage: {
    fontSize: 12,
    fontWeight: "bold",
    color: secondaryColor,
    width: "100%",
    textAlign: "left",
  },
  inputsRow: {
    width: "100%",
  },
  halfWidthInput: {
    width: "48%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  addContactButton: {
    marginTop: 40,
  },
}));
