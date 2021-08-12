import React from "react";
import { useSelector } from "react-redux";
import { Grid, Typography, Box } from "@material-ui/core";
import SettingImg from "../../../../../../assets/images/clientCommunication/settings.svg";
import SearchImg from "../../../../../../assets/images/clientCommunication/search grey.svg";
import useStyles from "./chatBoxComponents.style";

const ChatBoxHeader = () => {
    const classes = useStyles();
    const firstName = useSelector((state: any) => state.setReceiverId.firstName);
    const lastName = useSelector((state: any) => state.setReceiverId.lastName);
    return (
        <Grid className={classes.headerRoot}>
            <Box>
                <Typography className={classes.withText}>
                    You are chatting with:
                </Typography>
                {firstName && <Typography className={classes.receiverText}>
                    {firstName + " " + lastName}
                </Typography>}
            </Box>
            <Box className={classes.actionButtons}>
                <Box className={classes.actionButton}>
                    <img src={SearchImg} alt="search" />
                </Box>
                <Box className={classes.actionButton}>
                    <img src={SettingImg} alt="setting" />
                </Box>
            </Box>
        </Grid>
    );
};

export default ChatBoxHeader;