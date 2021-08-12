import { Box } from "@material-ui/core";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../interfaces";
import { LogInUserTokens } from "../../../../interfaces/userModels";
import { useLocalStorage } from "../../../../shared/hooks";
import { GET_COMPANY_MESSAGES, RECEIVER_ID } from "../../../../store/actionNames/actionNames";
// import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// import Avatar from '@material-ui/core/Avatar';
import CustomAvatar from "../../../customAvatar/customAvatar";
import useStyles from "./inboxComponents.style";


const InboxList = (data: any) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const getConversationsa = useSelector((state: RootState) => state.getConversations.data);
    const getConversations = useSelector((state: RootState) => state);
    const [userToken, setUserToken] = useLocalStorage<LogInUserTokens>("userToken", {
        accessToken: "",
        refreshToken: "",
        role: 0,
    });
    const [realData, setRealData] = useState([])
    const [pageNumber, setPageNumber] = useState<number>(1);

    let customers = data.data;

    // const testData = customers ? customers.map((item: any, i: number) => {
    //     return {
    //         firstName: item.firstName ? item.firstName : "Test First Name",
    //         lastName: item.lastName ? item.lastName : "Test Last Name",
    //         text: "test text",
    //         lastMessageAt: "2021/06/22",
    //         isOnline: false,
    //         isSender: i === 0 ? true : false,
    //     };
    // }) : [];

    useEffect(() => {
        const tempData = customers ? customers.map((item: any, i: number) => {
            return {
                firstName: item.firstName ? item.firstName : "Test First Name",
                lastName: item.lastName ? item.lastName : "Test Last Name",
                text: "test text",
                lastMessageAt: "2021/06/22",
                isOnline: false,
                isSender: i === 0 ? true : false,
            };
        }) : [];
        setRealData(tempData);
    }, []);

    // useEffect(() => {
    //     console.log("HH  --- getConversationsa --- HH", getConversationsa);
    //     const tempData1: any = getConversationsa ? getConversationsa.map((item: any, i: number) => {
    //         return {
    //             firstName: item.conversationUserName ? item.conversationUserName.split(" ")[0] : "FirstName",
    //             lastName: item.conversationUserName ? item.conversationUserName.split(" ")[1] : "LastName",
    //             text: item.text ? item.text : "",
    //             lastMessageAt: item.lastMessageAt ? item.lastMessageAt : "",
    //             isOnline: true,
    //             isSender: i === 0 ? true : false,
    //         };
    //     }) : [];

    //     getConversationsa && getConversationsa.length > 0 ?
    //         dispatch({
    //             type: RECEIVER_ID,
    //             payLoad: {
    //                 data: getConversationsa[0].conversationUserId,
    //                 firstName: getConversationsa[0].conversationUserName ? getConversationsa[0].conversationUserName.split(" ")[0] : "FirstName",
    //                 lastName: getConversationsa[0].conversationUserName ? getConversationsa[0].conversationUserName.split(" ")[1] : "LastName",
    //             }
    //         })
    //         : console.log("getconversations useEffect");
    //     getConversationsa && getConversationsa.length > 0 ?
    //         dispatch({
    //             type: GET_COMPANY_MESSAGES,
    //             payLoad: {
    //                 user: userToken.accessToken,
    //                 receiverId: getConversationsa[0].conversationUserId,
    //                 page: pageNumber,
    //                 pageSize: 10,
    //             }
    //         }) : console.log("getmessages useEffect");
    //     setRealData(getConversationsa && getConversationsa.length > 0 ? tempData1 : testData);
    // }, [getConversationsa]);

    // const changeIsSender = (i: number) => {
    //     console.log("UserToken", userToken.accessToken);
    //     getConversationsa && getConversationsa.length > 0 ?
    //         dispatch({
    //             type: RECEIVER_ID,
    //             payLoad: {
    //                 data: getConversationsa[i].conversationUserId,
    //                 firstName: getConversationsa[i].conversationUserName ? getConversationsa[i].conversationUserName.split(" ")[0] : "FirstName",
    //                 lastName: getConversationsa[i].conversationUserName ? getConversationsa[i].conversationUserName.split(" ")[1] : "LastName",
    //             }
    //         }) :
    //         dispatch({
    //             type: RECEIVER_ID,
    //             payLoad: {
    //                 data: data.data[i].id,
    //                 firstName: data.data[i].firstName,
    //                 lastName: data.data[i].lastName,
    //             }
    //         });
    //     getConversationsa && getConversationsa.length > 0 ?
    //         dispatch({
    //             type: GET_COMPANY_MESSAGES,
    //             payLoad: {
    //                 user: userToken.accessToken,
    //                 receiverId: getConversationsa[i].conversationUserId,
    //                 page: pageNumber,
    //                 pageSize: 10,
    //             }
    //         }) : console.log("TTT");

    //     const tt: any = getConversationsa ? getConversationsa.map((item: any, k: number) => {
    //         console.log("GetConversation exist");
    //         return {
    //             firstName: item.conversationUserName ? item.conversationUserName.split(" ")[0] : "FirstName",
    //             lastName: item.conversationUserName ? item.conversationUserName.split(" ")[1] : "LastName",
    //             text: item.text,
    //             lastMessageAt: item.lastMessageAt,
    //             isOnline: true,
    //             isSender: k === i ? true : false,
    //         };
    //     }) : console.log("getConversation don't exist");
    //     setRealData(getConversationsa && getConversationsa.length > 0 ? tt : testData);
    // }
    const changeIsSender = (i: number) => {
        console.log("SSS", data.data[i]);
        dispatch({
            type: RECEIVER_ID,
            payLoad: {
                data: data.data[i].userId,
                firstName: data.data[i].firstName,
                lastName: data.data[i].lastName,
            }
        });
        dispatch({
            type: GET_COMPANY_MESSAGES,
            payLoad: {
                user: userToken.accessToken,
                receiverId: data.data[i].id,
                page: pageNumber,
                pageSize: 10,
            }
        });

        const tt = customers.map((item: any, k: number) => {
            return {
                img: "",
                firstName: item.firstName,
                lastName: item.lastName,
                comment: "test comment",
                timeStamp: new Date(),
                time: "test time",
                isOnline: true,
                isSender: k === i ? true : false,
            };
        });
        setRealData(tt);
    }
    return (
        <List className={classes.listRoot}>
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
                                    {item.text}
                                    <br />
                                    <br />
                                    {item.lastMessageAt}
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