import React from "react";
import { useSelector } from "react-redux";
import { Grid, Box, Typography, TextField } from "@material-ui/core";
import useStyles from "./chatBoxComponents.style";
import { MessagesModel } from "../../../../interfaces/messages";

const ChatBoxContents = () => {
    const classes = useStyles();
    const messages = useSelector((state: any) => state.messages.data);
    const firstName = useSelector((state: any) => state.setReceiverId.firstName);
    const loggedTime = (dateTime: string | Date) => {
        let data = new Date(dateTime)
        let hrs = data.getHours();
        let mins = data.getMinutes();
        let chr = "";
        let cmins = "";
        if (hrs <= 9) {
            chr = '0' + hrs;
        } else {
            chr = '' + hrs;
        }
        if (mins < 10) {
            cmins = '0' + mins;
        } else {
            cmins = '' + mins;
        }
        const postTime = chr + ':' + cmins;
        return postTime
    }
    return (
        <Grid className={classes.contentRoot}>
            <Grid className={classes.contentList}>
                {messages && messages.map((item: MessagesModel, i: number) => (
                    <Grid key={i} >
                        <p className={classes.contentItem}>
                            {item.text}
                        </p>
                        <Typography className={classes.contentTimeItem} >{loggedTime(item.createdAt)}</Typography>
                    </Grid>
                ))}
                <Box>
                    {firstName && <Typography className={classes.istypingText}>
                        {firstName + " " + "is typing..."}
                    </Typography>}
                </Box>
            </Grid>
        </Grid>
    );
};

export default ChatBoxContents;