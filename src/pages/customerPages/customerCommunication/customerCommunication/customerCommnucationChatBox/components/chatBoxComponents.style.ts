import { makeStyles, Theme } from "@material-ui/core";

export default makeStyles((theme: Theme) => ({
  mainRoot: {
    backgroundColor: "white",
    display: "flex",
    alignItems: "stretch",
    flexDirection: "column",
    marginLeft: 15,
    height: '100%',
    borderRadius: 10,
  },
  //header
  headerRoot: {
    padding: "10px 20px",
    display: "flex",
    justifyContent: "space-between",
    borderBottom: "solid gray 2px"
  },
  withText: {
    fontSize: 12,
    color: "#B7BBD8",
  },
  receiverText: {
    fontSize: 16,
    color: "#3A3F5C",
    fontWeight: "bold",
  },
  actionButtons: {
    display: "flex",
    padding: 10
  },
  actionButton: {
    marginLeft: 20,
  },

  //content
  contentRoot: {
    display: "flex",
    flexDirection: "column-reverse",
    position: "relative",
    padding: "10px 20px",
    justifyContent: "space-between",
    borderBottom: "solid gray 2px",
    flexGrow: 3,
  },
  messagesGroupReverse: {
    display: "flex",
    flexDirection: "column-reverse",
  },
  contentList: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginRight: 10,
  },
  contentList1: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    marginRight: 10,
  },
  contentItem: {
    color: "#d6d8dd",
    backgroundColor: "#3a3f5c",
    padding: "5px 15px",
    margin: 3,
    borderRadius: "0 0.5em 0.5em 0",
  },
  contentItem1: {
    color: "#d6d8dd",
    backgroundColor: "#3a3f5c",
    padding: "5px 15px",
    margin: 3,
    borderRadius: "0.5em 0 0 0.5em",
  },
  contentTimeItem: {
    color: "#c0c3dc",
    fontSize: 10,
    textAlign: "right",
    padding: "0 5px",
    marginTop: 0
  },
  istypingText: {
    position: "absolute",
    bottom: 10,
    left: 100,
    fontSize: 12,
    backgroundColor: "#F6F6FB",
    borderRadius: 15,
    color: "#B7BBD8",
    textAlign: "center",
    padding: "8px 40px 8px 25px"
  },
  //sendbox
  presetText: {
    display: "flex",
    justifyContent: "space-between",
    margin: "10px 40px 10px 40px",
  },
  messageInputGroup: {
    display: "flex",
    position: "relative",
  },
  messageInput: {
    fontSize: 14,
    display: "flex",
    alignItems: "flex-start",
    width: "100% !important",
    height: 60,
    margin: "0px 40px 40px 40px",
    backgroundColor: "#F6F6FB",
    borderRadius: 10,
    paddingLeft: 30,
    paddingRight: 80,
    border: "none",
    color: "#3A3F5C",
    paddingTop: 25,
    resize: "none"
  },
  sendButton: {
    position: "absolute",
    right: 47,
    top: 7,
    display: "flex",
    maxWidth: 46,
    minWidth: 46,
    maxHeight: 46,
    minHeight: 46,
    backgroundColor: "#2255FF",
    borderRadius: 5,
    "&: hover": {
      cursor: "pointer",
    },
    "& > img": {
      height: 20,
      width: 20,
    },
  }
}));
