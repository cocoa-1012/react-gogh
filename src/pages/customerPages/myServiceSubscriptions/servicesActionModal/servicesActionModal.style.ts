import { makeStyles, Theme } from "@material-ui/core";
import { primaryColor, primaryTextColor } from "../../../../constants/colors";

interface StyleProps {
  pricing: boolean;
  uploadBoxActive: boolean;
}

export default makeStyles((theme: Theme) => ({
  addServicesModal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px 0",
  },
  addServicesModalBody: {
    width: 1148,
    padding: 50,
    borderRadius: 20,
    backgroundColor: "white",
    position: "relative",
    margin: "0 10px",
    height: 720,
    maxHeight: "100vh",
    overflowY: "auto",
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
  addServicesModalTitle: {
    fontSize: 36,
    fontWeight: "bold",
    color: primaryTextColor,
    "@media (max-width: 430px)": {
      fontSize: 25,
    },
  },
  addServicesModalSubTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: primaryTextColor,
    marginBottom: 10,
    marginTop: 15,
  },
  addServicesFormWrapper: {
    marginTop: 20,
  },
  addServicesHourlyText: {
    color: (props: StyleProps) =>
      !props.pricing ? primaryColor : primaryTextColor,
    margin: 0,
  },
  addServicesFixedText: {
    color: (props: StyleProps) =>
      !props.pricing ? primaryTextColor : primaryColor,
    margin: 0,
  },
  pricingSwitchWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  pricingAmount: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  pricingAmountUnit: {
    fontSize: 14,
    fontWeight: 600,
    color: primaryTextColor,
    position: "absolute",
    right: 0,
    marginRight: 15,
  },
  myServicesDescriptionTextArea: {
    width: "100%",
    height: 150,
    border: "1px solid #E4E6F2",
    borderRadius: 10,
    padding: 20,
    resize: "none",
  },
  describeText: {
    fontSize: 14,
    fontWeight: 600,
    color: "#B7BBD8",
  },
  imageDragArea: {
    padding: "20px 0",
    width: "100%",
    height: 140,
    border: "1px dashed #E4E6F2",
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: (props: StyleProps) =>
      props.uploadBoxActive ? "#E8EDFF" : "",
  },
  imageDropText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#707070",
    marginTop: 14,
  },
  imageDropTextButton: {
    color: primaryColor,
    cursor: "pointer",
  },
  imageItemWrapper: {
    marginTop: 15,
  },
  supportText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#B7BBD8",
  },
  descriptionNotification: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#e00000",
  },
  fileInput: {
    display: "none",
  },
  portfolioImageContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginTop: 10,
  },
  portfolioImageWrapper: {
    width: 80,
    height: 60,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    borderRadius: 10,
    backgroundColor: "black",
  },
  closeButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 5,
    position: "absolute",
    top: 0,
    right: 0,
    marginRight: -10,
    marginTop: -10,
    borderRadius: "100%",
    cursor: "pointer",
  },
  imageCoverCheckSection: {
    marginTop: 10,
    cursor: "pointer",
  },
  imageCoverCheckBox: {
    width: 18,
    height: 18,
    borderRadius: "100%",
    border: "1px solid #E4E6F2",
  },
  imageCoverCheckBoxChecked: {
    backgroundColor: primaryColor,
    borderColor: primaryColor,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  imageCoverText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#B7BBD8",
    marginLeft: 10,
  },
  imageCoverTextChecked: {
    color: primaryTextColor,
  },
  converedImagePreviewBox: {
    width: "100%",
    height: 140,
    overflow: "hidden",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    borderRadius: 10,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  coverPhotoText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 10,
  },
  tagInputWrapper: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  tagsAddButton: {
    fontSize: 14,
    fontWeight: "bold",
    color: primaryColor,
    position: "absolute",
    right: 0,
    marginRight: 20,
    cursor: "pointer",
  },
  tags: {
    padding: "7px 10px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E4E6F2",
    borderRadius: 5,
    marginRight: 5,
  },
  tagText: {
    fontSize: 12,
    fontWeight: "bold",
    color: primaryTextColor,
    marginRight: 8,
  },
  deleteTag: {
    cursor: "pointer",
    transition: "all .2s ease-in-out",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
}));
