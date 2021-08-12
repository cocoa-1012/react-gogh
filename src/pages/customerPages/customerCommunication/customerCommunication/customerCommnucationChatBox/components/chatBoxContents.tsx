import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { useLocalStorage } from "../../../../../../shared/hooks";
import useStyles from "./chatBoxComponents.style";

interface GetCustomerMessagesModel {
    count: number;
    pageNumber: number;
    pageSize: number;
    data: GetCustomerMessagesDataModel[];
}

interface GetCustomerMessagesDataModel {
    id: string | null;
    createdAt: string | Date;
    updatedAt: string | Date;
    isDeleted: boolean;
    sender: number;
    companyId: string | null;
    userId: string | null;
    text: string;
    mediaFile: MediaFileModel[];
    chatMessageType: 1;
    chatAction: {};
    hasRead: boolean;
}

interface MediaFileModel {
    url: string;
    mediaType: 1;
}


const ChatBoxContents = () => {
    const classes = useStyles();
    const messages = useSelector((state: any) => state.getCustomerMessages.data);
    const firstName = useSelector((state: any) => state.setReceiverId.firstName);

    const [getCustomerMessages, setGetCustomerMessages] = useLocalStorage<GetCustomerMessagesModel>("getcustomermessages", {
        count: 1,
        pageNumber: 1,
        pageSize: 10,
        data: [],
    });

    console.log("getCustomerMessagesHHHHHH ==>", getCustomerMessages.data, messages);
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
    let tempData: GetCustomerMessagesDataModel[] = getCustomerMessages.data;
    return (
        <Grid className={classes.contentRoot}>
            <Grid className={classes.messagesGroupReverse}>
                {tempData && tempData.map((item: GetCustomerMessagesDataModel, i: Number) => (
                    <Grid className={item.sender === 1 ? classes.contentList : classes.contentList1}>
                        <p className={item.sender === 1 ? classes.contentItem : classes.contentItem1}>
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