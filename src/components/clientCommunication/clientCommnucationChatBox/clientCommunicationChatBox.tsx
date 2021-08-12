import { Grid } from "@material-ui/core";
import React from "react";
import useStyles from "./components/chatBoxComponents.style";
import ChatBoxContents from "./components/chatBoxContents";
import ChatBoxHeader from "./components/chatBoxHeader";
import ChatBoxSendBox from "./components/chatBoxSendBox";


const ClientCommunicationChatBox = () => {
    const classes = useStyles();

    return (
        <Grid className={classes.mainRoot}>
            <ChatBoxHeader />
            <ChatBoxContents />
            <ChatBoxSendBox />
        </Grid>
    );
};

export default ClientCommunicationChatBox;