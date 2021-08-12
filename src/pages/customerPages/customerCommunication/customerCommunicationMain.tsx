import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { customerSortOrder } from "../../../constants/requestTypes";
import {
    CustomerResponseModel
} from "../../../interfaces/customers";
import { LogInUserTokens } from "../../../interfaces/userModels";
import MainLayout from "../../../layouts/main/mainLayout";
import { useLocalStorage } from "../../../shared/hooks";
import { GET_CONVERSATION_CUSTOMER } from "../../../store/actionNames/actionNames";
import CustomerCommunicationChatBox from "./customerCommunication/customerCommnucationChatBox/customerCommunicationChatBox";
import CustomerCommunicationInbox from "./customerCommunication/customerCommunicationInbox/customerCommunicationInbox";
import useStyles from "./customerCommunicationMain.style";

interface CustomerRootState {
    customers: CustomerResponseModel;
}

const ClientCommunicationMainPage = () => {
    const classes = useStyles();
    const customer = useSelector((state: CustomerRootState) => state.customers.data);
    const wholeState = useSelector((state: any) => state.data);
    const [page, setPage] = useState<number>(1);
    const [sort, setSort] = useState<number>(customerSortOrder.createDateDesc);

    const [userToken, setUserToken] = useLocalStorage<LogInUserTokens>(
        "userToken",
        {
            accessToken: "",
            refreshToken: "",
            role: 0,
        }
    );

    const dispatch = useDispatch();

    useEffect(() => {
        console.log("getConversation",)
        dispatch({
            type: GET_CONVERSATION_CUSTOMER,
            payLoad: {
                accessToken: userToken.accessToken,
                page: page,
                pageSize: 10,
            },
        });
    }, []);

    return (
        <MainLayout currentRouter="My Services">
            {<Grid container direction="row" spacing={1} className={classes.pageContainer}>
                <Grid style={{ width: 400 }} >
                    <CustomerCommunicationInbox data={customer} />
                </Grid>
                <Grid style={{ flexGrow: 3 }} >
                    <CustomerCommunicationChatBox />
                </Grid>
            </Grid>}
        </MainLayout>
    );
};

export default ClientCommunicationMainPage;
