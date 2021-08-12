import { Box } from "@material-ui/core";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomAvatar from "../../../../../../components/customAvatar/customAvatar";
import { LogInUserTokens } from "../../../../../../interfaces/userModels";
import { useLocalStorage } from "../../../../../../shared/hooks";
import { GET_CUSTOMER_MESSAGES, RECEIVER_ID } from "../../../../../../store/actionNames/actionNames";
import useStyles from "./inboxComponents.style";

interface GetCustomerChatListModel {
    count: number;
    pageNumber: number;
    pageSize: number;
    data: GetCustomerChatListDataModel[];
}

interface GetCustomerChatListDataModel {
    conversationUserName: string;
    conversationUserId: string;
    lastMessageAt: string;
    text: string;
}

const InboxList = (data: any) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const getConversationList = useSelector((state: any) => state.getCustomerConverSations);
    const [userToken, setUserToken] = useLocalStorage<LogInUserTokens>("userToken", {
        accessToken: "",
        refreshToken: "",
        role: 0,
    });
    const [getCustomerConversations, setGetCustomerConversations] = useLocalStorage<GetCustomerChatListModel>("getCustomerConversations", {
        count: 1,
        pageNumber: 1,
        pageSize: 10,
        data: [],
    });
    const [realData, setRealData] = useState([])
    const [pageNumber, setPageNumber] = useState<number>(1);

    let companies = getCustomerConversations.data;

    useEffect(() => {
        const tempData: any = companies ? companies.map((item: any, i: number) => {
            console.log("item", item);
            return {
                img: "",
                firstName: item.conversationUserName ? item.conversationUserName : "Test First Name",
                lastName: item.conversationUserName ? item.conversationUserName : "Test Last Name",
                comment: "test comment",
                time: "test time",
                isOnline: false,
                isSender: i === 0 ? true : false,
            };
        }) : [];
        setRealData(tempData);
        getConversationList.data && dispatch({
            type: RECEIVER_ID,
            payLoad: {
                data: getCustomerConversations.data[0].conversationUserId,
                firstName: getCustomerConversations.data[0].conversationUserName,
                lastName: getCustomerConversations.data[0].conversationUserName,
            }
        });
        getConversationList.data && dispatch({
            type: GET_CUSTOMER_MESSAGES,
            payLoad: {
                user: userToken.accessToken,
                receiverId: getCustomerConversations.data[0].conversationUserId,
                page: pageNumber,
                pageSize: 10,
            }
        });
    }, [getCustomerConversations.data]);

    const changeIsSender = (i: number) => {
        console.log("SSS", getCustomerConversations.data[i]);
        dispatch({
            type: RECEIVER_ID,
            payLoad: {
                data: getCustomerConversations.data[i].conversationUserId,
                firstName: getCustomerConversations.data[i].conversationUserName,
                lastName: getCustomerConversations.data[i].conversationUserName,
            }
        });
        dispatch({
            type: GET_CUSTOMER_MESSAGES,
            payLoad: {
                user: userToken.accessToken,
                receiverId: getCustomerConversations.data[i].conversationUserId,
                page: pageNumber,
                pageSize: 10,
            }
        });

        const tt: any = companies.map((item: any, k: number) => {
            return {
                img: "",
                firstName: item.conversationUserName,
                lastName: item.conversationUserName,
                comment: "test comment",
                time: "test time",
                isOnline: true,
                isSender: k === i ? true : false,
            };
        });
        setRealData(tt);
    }
    return (
        <List className={classes.listRoot}>
            {console.log("ASAS ==>", realData)}
            {realData && realData.map((item: any, i: number) => (
                <ListItem
                    key={i}
                    alignItems="flex-start"
                    style={{
                        borderLeft: item.isSender ? "solid 5px blue" : "none",
                        backgroundColor: item.isSender ? "#f6f6fb" : "white",
                    }}
                    onClick={(event) => {
                        changeIsSender(i);
                    }}
                    className={classes.listItem}>
                    <CustomAvatar
                        size={36}
                        firstName={item.firstName.split(" ")[0].toUpperCase()}
                        lastName={item.lastName.split(" ")[0].toUpperCase()}
                    />
                    <Box className={classes.listUnderLineGroup}>
                        <ListItemText
                            className={classes.listTexts}
                            primary={item.firstName + " " + (item.firstName.length > 8 ? item.lastName[0] + "." : item.lastName)}
                            secondary={
                                <React.Fragment>
                                    {item.comment}
                                    <br />
                                    <br />
                                    {item.time}
                                </React.Fragment>
                            }
                        >
                        </ListItemText>
                        <Box className={item.isOnline ? classes.onlineDot : ""}></Box>
                    </Box>
                </ListItem>
            ))
            }
        </List>
    );
};

export default InboxList;