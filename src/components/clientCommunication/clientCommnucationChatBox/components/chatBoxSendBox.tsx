import { Box, Button, Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SendImg from "../../../../assets/images/clientCommunication/send.svg";
import { LogInUserTokens } from "../../../../interfaces/userModels";
import { useLocalStorage } from "../../../../shared/hooks";
import { SEND_MESSAGES } from "../../../../store/actionNames/actionNames";
import useStyles from "./chatBoxComponents.style";

const ChatBoxSendBox = () => {
    const [typedValue, setTypedValue] = useState("");
    const dispatch = useDispatch();
    const classes = useStyles();
    const receiverId = useSelector((state: any) => state.setReceiverId.data);
    const [userToken, setUserToken] = useLocalStorage<LogInUserTokens>("userToken", {
        accessToken: "",
        refreshToken: "",
        role: 0,
    });
    const [pageNumber, setPageNumber] = useState<number>(1);

    const sendMessage = () => {
        console.log("SendBox/receiverId==>", receiverId)
        if (typedValue) {
            dispatch({
                type: SEND_MESSAGES,
                payLoad: {
                    user: userToken.accessToken,
                    receiverId: receiverId,
                    text: typedValue,
                    page: pageNumber,
                    pageSize: 10,
                }
            });
            setTypedValue("");
        } else {
            alert("Please enter your message!");
        }
    }
    return (
        <Grid>
            <Grid className={classes.presetText}>
                <Typography>Suggested presets: </Typography>
                <Box>Reschedule an appointment</Box>
            </Grid>
            <Box className={classes.messageInputGroup}>
                <textarea
                    name="messageTyping"
                    value={typedValue}
                    onChange={e => setTypedValue(e.target.value)}
                    className={classes.messageInput}
                />
                <Button className={classes.sendButton} onClick={sendMessage}>
                    <img src={SendImg} alt="send" />
                </Button>
            </Box>
        </Grid>
    );
};

export default ChatBoxSendBox;