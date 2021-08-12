import React from "react";
import { Grid } from "@material-ui/core";
import ChatBoxHeader from "./components/chatBoxHeader";
import ChatBoxContents from "./components/chatBoxContents";
import ChatBoxSendBox from "./components/chatBoxSendBox";
import useStyles from "./components/chatBoxComponents.style";


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