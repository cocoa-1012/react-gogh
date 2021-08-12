import React from "react";
import { Grid, Typography, Box, Hidden, Button } from "@material-ui/core";
import threeDotMoreImg from "../../../../assets/images/3 dots more.svg";

import useStyles from "./inboxComponents.style";

const InboxHeader = () => {

    const classes = useStyles();
    return (
        <Grid container direction="row" >
            <Typography variant="h1" className={classes.pageTitle}>
                Inbox
            </Typography>
            <Box className={classes.msgExtButton}>
                <Typography
                    variant="body1"
                    className={classes.msgExtButtonText}
                >
                    +2 new
                </Typography>
            </Box>
            <Box className={classes.threeDotMoreImg}>
                <img src={threeDotMoreImg} alt="moreMsg" />
            </Box>
        </Grid>
    );
};

export default InboxHeader;